# Finac Plus – UI & API Automation Assignment
Hi! This repo contains my **UI and API automation assignment** for Finac Plus.  
I used **Playwright** with **JavaScript** to automate both the DemoQA Book Store UI and ReqRes APIs.

--------------------------
## What’s in this project
- **UI Automation** for DemoQA Book Store  
- **API Automation** for ReqRes (create, fetch, update user)  
- Extracted book info saved in a text file (`book-details.txt`)  
- Playwright configuration and Node.js setup

------------------------




## UI Automation – How it works

1. First, I manually created a new user on [DemoQA](https://demoqa.com/).  
2. Logged in with the created user.  
3. Checked that the username and logout button appeared.  
4. Went to the Book Store section and searched for **"Learning JavaScript Design Patterns"**.  
5. Verified the book appeared in the results.  
6. Saved **Title, Author, Publisher** in a text file (`book-details.txt`).  
7. Logged out successfully.

---

## API Automation – How it works

Using [ReqRes API](https://reqres.in/):

1. **Create a user** → validated the response → saved the `userId`.  
2. **Get user details** → validated the returned data.  
3. **Update user name** → validated the updated name.  

All responses and validations are logged in the console.

-----------------------------------

## How to run the tests
## RUN UI TESTS
npx playwright test tests/demoqa-ui.spec.js --headed

## RUN API TESTS
npx playwright test tests/reqres-api.spec.js


