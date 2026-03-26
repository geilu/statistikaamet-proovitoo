import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
});

test("entire quiz flow", async ({ page }) => {
    await page.click("text=Alusta viktoriiniga");

    const answers = [
        "Vesi jäätudes paisub", // oige
        "62 aastat", // oige
        "Tammu Ville" // vale
    ];

    for (const answer of answers) {
        await page.getByText(answer).click();
        await page.click("text=Sisesta");
        await page.click("text=Liigu edasi");
    }

    await expect(page.getByRole("heading", { name: "Kokkuvõte" })).toBeVisible(); // kokkuvõte lõpus
    await expect(page.getByText("2/3")).toBeVisible(); // lõpptulemus lõpus
    await expect(page.getByText(/Õige|Vale/)).not.toHaveCount(0); // tabelis õige/vale olemas
});

test("error when no answer selected", async ({ page }) => {
    await page.click("text=Alusta viktoriiniga");

    await page.click("text=Sisesta");

    await expect(page.getByText("Proovi valida mingi vastus!")).toBeVisible();
});

test("app opens", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Viktoriin" })).toBeVisible();
});

test("can answer a question right", async ({ page }) => {
    await page.click("text=Alusta viktoriiniga");

    await page.getByText("Vesi jäätudes paisub").click();
    await page.click("text=Sisesta");

    await expect(page.getByText("Tubli! Valisid õige vastuse.")).toBeVisible();
})

test("can answer a question wrong", async ({ page })  => {
    await page.click("text=Alusta viktoriiniga");

    await page.getByText("Vesi jäätudes kahaneb").click();
    await page.click("text=Sisesta");

    await expect(page.getByText("Kahjuks see pole õige vastus!")).toBeVisible();
});