// Exercise the shipped panel, not the producer's development server.
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const producer = resolve(process.argv[2] ?? "");
const bundle = resolve(
  process.argv[3] ?? resolve(root, "custom_components/cabane/frontend"),
);
if (!process.argv[2])
  throw new Error(
    "Usage: node scripts/verify_workspace_import.mjs FRONTEND_REPO [BUNDLE]",
  );
const { chromium } = createRequire(resolve(producer, "package.json"))(
  "playwright-core",
);
const fixture = JSON.parse(
  await readFile(
    resolve(root, "tests/fixtures/outdoor-workspace.json"),
    "utf8",
  ),
);
const host = await readFile(
  resolve(producer, "tests/fixtures/native-panel-host.html"),
  "utf8",
);
const marker = "const copies = new Map();";
assert.ok(
  host.includes(marker),
  "synthetic host must expose the saved-copy fixture seam",
);
const mime = {
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".woff2": "font/woff2",
};
const server = createServer(async (req, res) => {
  try {
    const path = new URL(req.url, "http://fixture").pathname;
    if (path === "/cabane") {
      res.setHeader("Content-Type", "text/html");
      res.end(
        host.replace(
          marker,
          "const copies = new Map(); window.__savedCopies = copies;",
        ),
      );
      return;
    }
    const prefix = "/fixture-assets/deep/revision/";
    const file = resolve(bundle, path.slice(prefix.length));
    if (!path.startsWith(prefix) || !file.startsWith(bundle + sep)) {
      res.writeHead(404).end();
      return;
    }
    res.setHeader(
      "Content-Type",
      mime[extname(file)] ?? "application/octet-stream",
    );
    res.end(await readFile(file));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((done) => server.listen(0, "127.0.0.1", done));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({
  headless: true,
  channel: "chromium",
  args: [
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
  ],
});
let page;
try {
  const context = await browser.newContext();
  page = await context.newPage();
  page.on("pageerror", (error) => console.error(error.message));
  await page.goto(`${origin}/cabane`);
  await page.getByRole("button", { name: /Build my home/ }).click();
  await page.getByRole("button", { name: /Workspaces:/ }).click();
  await page.getByRole("button", { name: /^Import(?: workspace)?$/ }).click();
  await page.evaluate((backup) => {
    backup.workspace.homeAssistantUrl = window.location.origin;
    window.__savedCopies.set(backup.record.homeId, {
      version: 1,
      document: JSON.stringify(backup),
    });
  }, fixture);
  await page
    .getByRole("button", { name: "From Home Assistant", exact: true })
    .click();
  await page
    .locator(".workspace-ha-library")
    .getByRole("button", { name: /^(?:Open|Load workspace)$/ })
    .click();
  await Promise.race([
    page.locator(".workspace-ha-library").waitFor({ state: "hidden" }),
    page
      .locator(".workspace-ha-library [role=alert]")
      .waitFor()
      .then(async () => {
        throw new Error(
          await page.locator(".workspace-ha-library [role=alert]").innerText(),
        );
      }),
  ]);
  const record = await page.evaluate(async (id) => {
    const db = await new Promise((done, reject) => {
      const request = indexedDB.open("cabane-projects-v2");
      request.onsuccess = () => done(request.result);
      request.onerror = () => reject(request.error);
    });
    try {
      const raw = await new Promise((done, reject) => {
        const request = db
          .transaction("home-projects")
          .objectStore("home-projects")
          .get(id);
        request.onsuccess = () => done(request.result);
        request.onerror = () => reject(request.error);
      });
      return JSON.parse(raw);
    } finally {
      db.close();
    }
  }, fixture.record.homeId);
  for (const slice of ["draft", "published"]) {
    assert.deepEqual(
      record[slice].floors[0].outdoorPlatforms,
      fixture.record[slice].floors[0].outdoorPlatforms,
      `${slice} retains platform polygons, finishes, edge IDs and overrides`,
    );
  }
  assert.equal(
    await page.evaluate(() =>
      window.__hostFixture.stats.requests.some(
        (type) => type === "cabane/workspaces/put",
      ),
    ),
    false,
    "loading must not rewrite the saved document",
  );
  console.log(
    "Bundled panel HA import passed: outdoor platforms survive in draft and published records.",
  );
} catch (error) {
  console.error(
    "Visible buttons:",
    await page.getByRole("button").allTextContents(),
  );
  console.error("Panel text:", await page.locator("cabane-panel").innerText());
  throw error;
} finally {
  await browser.close();
  await new Promise((done) => server.close(done));
}
