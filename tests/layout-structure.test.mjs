import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const rootLayoutPath = new URL("../app/layout.tsx", import.meta.url);
const localeLayoutPath = new URL("../app/[locale]/layout.tsx", import.meta.url);

test("root layout owns html, body, and global styles", async () => {
  const rootLayout = await readFile(rootLayoutPath, "utf8");

  assert.match(rootLayout, /import\s+"\.\/globals\.css";/);
  assert.match(rootLayout, /<html\b/);
  assert.match(rootLayout, /<body\b/);
});

test("locale layout stays nested and does not import global css", async () => {
  const localeLayout = await readFile(localeLayoutPath, "utf8");

  assert.doesNotMatch(localeLayout, /import\s+"\.\.\/globals\.css";/);
  assert.doesNotMatch(localeLayout, /<html\b/);
  assert.doesNotMatch(localeLayout, /<body\b/);
});
