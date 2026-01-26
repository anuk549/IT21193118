# IT21193118
# IT3040 - Assignment 1: SwiftTranslator Automated Testing

Automated Playwright test suite for testing the SwiftTranslator website (Singlish to Sinhala transliteration).

## Overview

- **24 Positive Functional Tests** - Correct transliteration scenarios
- **10 Negative Functional Tests** - Error handling scenarios  
- **1 UI Test** - Real-time output updates
- **Total: 35 test cases**

**Website**: https://www.swifttranslator.com/

## Installation

1. **Install Node.js** (version 18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers** (required once)
   ```bash
   npx playwright install
   ```

## Running Tests

**Headless mode** (no browser window):
```bash
npm test
```

**Headed mode** (visible browser, for debugging):
```bash
npm run test:headed
```

## Viewing Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

Or open `playwright-report/index.html` directly in your browser.

## Project Structure

```
├── tests/
│   └── assignment1.spec.ts    # Main test file
├── test-cases.json             # 35 test cases
├── playwright.config.ts        # Configuration
├── package.json                # Dependencies
└── Assignment1_TestCases_completed.xlsx  # Excel template (to be completed)
```

## Test Output

Each test logs:
- Test Case ID
- Input text
- Actual output (Sinhala text)
- Input length type (S/M/L)
- Test status

1. **Expected Output** - Correct Sinhala translation
2. **Actual Output** - From test execution logs
3. **Status** - Pass/Fail (compare Expected vs Actual)
4. **Accuracy Justification** - Why test passed/failed
5. **What is covered by the test** - 4-part format:
   - Input Type / Domain
   - Sentence / Grammar Focus
   - Input Length Type (S/M/L)
   - Quality Focus


## Important Notes

- Tests are **read-only** - they don't modify the website
- Excel file must be completed before submission
- Test cases from sample template should NOT be included
- Plagiarism check: similarity > 10% = no marks
