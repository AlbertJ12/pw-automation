import { test, expect } from '@playwright/test';
import { ThinkingTesterContactListPage } from '../pages/thinking-tester-contact-list-page';
const fs = require('fs');
var data = fs.readFileSync('secret.json');
var secretObj = JSON.parse(data);


test('add user through API', async ({ page }) => {
  const contactListPage = new ThinkingTesterContactListPage(page);
  await contactListPage.goto();
  
});

test('should show Page Object Model article', async ({ page }) => {
  const contactListPage = new ThinkingTesterContactListPage(page);
  await contactListPage.goto();
  await contactListPage.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});


test('add new user through API', async ({ request }, user) => {
  const newIssue = await request.post(`https://thinking-tester-contact-list.herokuapp.com/`, {
    data: {
      title: `${secretObj.users}`,
      body: 'Bug description',
    }
  });
  expect(newIssue.ok()).toBeTruthy();

  // const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  // expect(issues.ok()).toBeTruthy();
  // expect(await issues.json()).toContainEqual(expect.objectContaining({
  //   title: '[Bug] report 1',
  //   body: 'Bug description'
  // }));
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