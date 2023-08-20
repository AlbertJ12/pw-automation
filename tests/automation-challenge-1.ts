import { test, expect } from '@playwright/test';
import { ThinkingTesterContactListPage } from '../pages/thinking-tester-contact-list-page';

test('getting started should contain table of contents', async ({ page }) => {
  const contactListPage = new ThinkingTesterContactListPage(page);
  await contactListPage.goto();
  await contactListPage.getStarted();
  await expect(contactListPage.tocList).toHaveText([
    `How to install Playwright`,
    `What's Installed`,
    `How to run the example test`,
    `How to open the HTML test report`,
    `Write tests using web first assertions, page fixtures and locators`,
    `Run single test, multiple tests, headed mode`,
    `Generate tests with Codegen`,
    `See a trace of your tests`
  ]);
});

test('should show Page Object Model article', async ({ page }) => {
  const contactListPage = new ThinkingTesterContactListPage(page);
  await contactListPage.goto();
  await contactListPage.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});


/*
Ideas:
Option A: Use bcrypt and store data locally (bcrypt)
Option B: User Setup/Teardown https://playwright.dev/docs/api-testing

Setup data using API/UI
Do All tests
Delete using API/UI
Teardown
*/