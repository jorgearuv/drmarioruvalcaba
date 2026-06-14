import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const analyticsTypesPath = new URL("../lib/analytics/types.ts", import.meta.url);

test("whatsapp conversion uses the current Google Ads label", async () => {
  const analyticsTypes = await readFile(analyticsTypesPath, "utf8");

  assert.match(analyticsTypes, /sendTo:\s*"AW-17983868749\/i2OnCNOKqLgcEM2esP9C"/);
  assert.doesNotMatch(analyticsTypes, /AW-17983868749\/sEVFCM7jpY4cEM2esP9C/);
});
