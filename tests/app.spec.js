import { test, expect } from '@playwright/test';

test.describe('HOMELY Global Navigation & Interaction Tests', () => {

    test('Dashboard Interactions and Routing', async ({ page }) => {
        // Go to dashboard
        await page.goto('http://localhost:5173/?page=user_dashboard.html');

        // Wait for dynamic page load
        await page.waitForTimeout(1000);

        // Test global Nav components
        const pantryNav = page.locator('nav').getByText('Pantry');
        await pantryNav.click();

        await page.waitForTimeout(500);
        expect(page.url()).toContain('pantry.html');

        // Go Back to dashboard using app back button
        await page.goto('http://localhost:5173/?page=user_dashboard.html');
        await page.waitForTimeout(1000);

        // Test Recipe Card navigation
        const recipeCard = page.locator('h2', { hasText: 'Next Meal' }).locator('..');
        await recipeCard.click();

        await page.waitForTimeout(500);
        expect(page.url()).toContain('weekly_meal_planner.html');

        // Go Back
        const backBtn = page.locator('header').locator('button');
        await backBtn.click();

        await page.waitForTimeout(500);
        expect(page.url()).toContain('user_dashboard.html');
    });

    test('Recipe Details Flow', async ({ page }) => {
        await page.goto('http://localhost:5173/?page=recipe_details.html');
        await page.waitForTimeout(1000);

        // Test Start Cooking button (fixed nav-btn)
        const startCookingStr = page.locator('button', { hasText: 'Start Cooking' });
        await startCookingStr.click();

        await page.waitForTimeout(500);
        expect(page.url()).toContain('guided_cook_mode.html');
    });

    test('Guided Cook Mode Step Logic', async ({ page }) => {
        await page.goto('http://localhost:5173/?page=guided_cook_mode.html');
        await page.waitForTimeout(1000);

        // Ensure starting at step 1
        await expect(page.locator('#step-text')).toHaveText('Step 01');

        // Ensure previous button is disabled visually/functionally via CSS
        const prevBtn = page.locator('#prev-step-btn');
        await expect(prevBtn).toHaveClass(/pointer-events-none/);

        // Go forward
        const nextBtn = page.locator('#next-step-btn');
        await nextBtn.click();

        await page.waitForTimeout(300);
        await expect(page.locator('#step-text')).toHaveText('Step 02');

        // Ensure prev button is active
        await expect(prevBtn).not.toHaveClass(/pointer-events-none/);

        // Go backward
        await prevBtn.click();

        await page.waitForTimeout(300);
        await expect(page.locator('#step-text')).toHaveText('Step 01');
    });

});
