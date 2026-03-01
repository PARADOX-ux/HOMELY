import puppeteer from 'puppeteer';

(async () => {
    console.log("Starting Automated UI Test...");
    const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 414, height: 896 } });
    const page = await browser.newPage();

    const baseUrl = 'http://localhost:5173/';

    const pagesToTest = [
        'welcome.html',
        'user_dashboard.html',
        'pantry.html',
        'ai_assistant.html',
        'profile.html',
        'dietary_preferences.html',
        'edit_profile.html',
        'settings.html',
        'smart_grocery_list.html',
        'weekly_meal_planner.html',
        'ingredient_selection.html',
        'order_ingredients.html',
        'get_missing_ingredients.html',
        'guided_cook_mode.html',
        'recipe_details.html',
        'nutrition_details.html'
    ];

    let passCount = 0;
    let failCount = 0;

    for (const testPage of pagesToTest) {
        console.log(`\n--- Testing ${testPage} ---`);
        try {
            await page.goto(`${baseUrl}?page=${testPage}`, { waitUntil: 'networkidle2', timeout: 10000 });

            // Allow JS to initialize
            await new Promise(r => setTimeout(r, 1000));

            // Find back button
            const backBtn = await page.$('button .material-symbols-outlined');
            if (!backBtn) {
                console.log(`[PASS] ${testPage} (No back button needed/found)`);
                continue;
            }

            const iconText = await page.evaluate(el => el.textContent.trim(), backBtn);
            if (iconText.includes('arrow_back') || iconText.includes('close')) {
                // Click back button to see if it works without error
                await page.evaluate(el => el.parentElement.click(), backBtn);

                await new Promise(r => setTimeout(r, 1500));

                const currentUrl = page.url();

                // If it went to login/welcome when it shouldn't have (unless it was welcome.html)
                if (currentUrl.includes('welcome.html') && testPage !== 'welcome.html') {
                    console.log(`[FAIL] ${testPage} back button routed to welcome/login screen!`);
                    failCount++;
                } else {
                    console.log(`[PASS] ${testPage} back button routed safely to: ${currentUrl.split('?page=')[1] || 'Dashboard'}`);
                    passCount++;
                }
            } else {
                console.log(`[PASS] ${testPage} (No standard back arrow)`);
            }

        } catch (err) {
            console.log(`[ERROR] Failed to test ${testPage}: ${err.message}`);
            failCount++;
        }
    }

    console.log(`\n=== Test Results ===`);
    console.log(`Passed: ${passCount}`);
    console.log(`Failed: ${failCount}`);

    await browser.close();
    process.exit(failCount > 0 ? 1 : 0);
})();
