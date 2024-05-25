import { APIResponse, expect } from '@playwright/test';
import { test } from '../../framework/fixtures/page.fixtures';
import { Endpoints } from '../../data-storage';


test('C006: Should GET events', async ({ request }) => {
  const response: APIResponse = await request.get(`${process.env.BASE_URL}/${Endpoints.Products}`);
  const respBody = await response.json();
  const respHeaders = response.headers();

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  expect(respBody.length).toBeGreaterThan(0);
  expect(Object.values(respHeaders).some((item) => item === 'application/json;charset=UTF-8')).toBeTruthy();
});
