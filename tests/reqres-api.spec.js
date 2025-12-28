import { test, expect } from '@playwright/test';

test('ReqRes API Automation - Fixed JSONPlaceholder', async ({ request }) => {
  // -------------------------------
  // 1️⃣ CREATE USER (POST) ✅ Works
  // -------------------------------
  const createResponse = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: {
        name: 'Karthik',
        job: 'Tester'
      }
    }
  );

  expect(createResponse.status()).toBe(201);
  const createData = await createResponse.json();
  const userId = createData.id;  // Will be 11
  console.log('Created User ID:', userId);

  // -------------------------------
  // 2️⃣ GET EXISTING USER (use ID 1)
  // JSONPlaceholder only has users 1-10
  // -------------------------------
  const getResponse = await request.get('https://jsonplaceholder.typicode.com/users/1');
  expect(getResponse.status()).toBe(200);

  const getData = await getResponse.json();
  console.log('Fetched User:', getData.name);

  // -------------------------------
  // 3️⃣ UPDATE EXISTING USER (PUT) ✅ Works
  // -------------------------------
  const updateResponse = await request.put(
    'https://jsonplaceholder.typicode.com/users/1',  // Use existing ID
    {
      data: {
        name: 'Karthik Updated',
        job: 'Senior Tester'
      }
    }
  );

  expect(updateResponse.status()).toBe(200);
  const updateData = await updateResponse.json();
  expect(updateData.name).toBe('Karthik Updated');
  console.log('Updated Name:', updateData.name);
});
