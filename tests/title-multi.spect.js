const { test, expect } = require("@playwright/test");

const casos = [
  { url: "https://example.com/", titulo: "Example Domain" },
  //{ url: "https://example.com/", titulo: "/Example/" },
  { url: "https://www.google.com/", titulo: "Google" },
];

for (const { url, esperado } of casos) {
  test(`valida el texto del titulo correcto en ${url}`, async ({ page }) => {
    //abre la pagina example.com
    await page.goto(url);
    await sleep(5000);

    //verificacion del titulo exacto
    await expect(page).toHaveTitle(esperado);
  });
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
