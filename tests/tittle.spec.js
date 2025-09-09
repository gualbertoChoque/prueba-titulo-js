const { test, expect } = require("@playwright/test");

test("validar el titulo exacto", async ({ page }) => {
  await page.goto("https://example.com/");
  await sleep(5000);

  // Verificacion del titulo
  await expect(page).toHaveTitle("Example Domain");
});

test("validar el titulo con ragex(contiene palabra)", async ({ page }) => {
  //abre la pagina example.com
  await page.goto("https://example.com/");
  await sleep(5000);

  // Verificacion palabra
  await expect(page).toHaveTitle(/Example/);
});

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
