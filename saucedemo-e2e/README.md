# 🎭 Playwright UI Testing Workshop

This repository contains end-to-end UI tests built with **Playwright** and **TypeScript**.  
The tests use the [SauceDemo](https://www.saucedemo.com/) demo application to practice login, add-to-cart, and checkout scenarios.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/CristianSava/playwright-workshop.git
cd playwright-workshop/saucedemo-e2e
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npm run install:browsers
```

### 4. Run the tests
```bash
npm test
```

---

## 🧰 Useful Commands

- Run all tests in headed mode (see the browser window):
  ```bash
  npm run headed
  ```

- Run with the Playwright UI mode:
  ```bash
  npm run test:ui
  ```

- Open the last HTML report:
  ```bash
  npm run report
  ```

---

## 📂 Project Structure
```
saucedemo-e2e/
│── tests/
│   └── e2e.spec.ts        # Example Playwright tests
│── playwright.config.ts   # Playwright configuration
│── package.json
│── tsconfig.json
```

---

✅ With this setup, your students only need to:
1. Clone the repo  
2. Run `npm install`  
3. Run `npm run install:browsers`  
4. Run the tests with `npm test`  

That’s it — minimal setup 🎉
