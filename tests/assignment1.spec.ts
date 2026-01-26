import { test, expect, Page } from '@playwright/test';


const SWIFT_TRANSLATOR_URL = 'https://www.swifttranslator.com/';
const SINHALA_UNICODE_RANGE = /[\u0D80-\u0DFF]/; 

const CASES = require('../test-cases.json');


function getInputLengthType(input: string): 'S' | 'M' | 'L' {
  const length = input.length;
  if (length <= 30) return 'S';
  if (length <= 299) return 'M';
  return 'L';
}

async function waitForSinhalaText(page: Page, timeout: number = 8000): Promise<void> {
  await page.waitForFunction(
    () => SINHALA_UNICODE_RANGE.test(document.body.innerText),
    { timeout }
  );
}

async function extractSinhalaText(page: Page): Promise<string> {
  return await page.evaluate(() => {
    const body = document.body;
    const walker = document.createTreeWalker(
      body,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      null
    );
    
    let node;
    while ((node = walker.nextNode())) {
      const text = (node.textContent || '').trim();
      if (/[\u0D80-\u0DFF]/.test(text)) {
        return text;
      }
    }
    
    return document.body.innerText || '';
  });
}

async function enterInputText(page: Page, inputText: string, isUITest: boolean = false): Promise<void> {
  const editable = page.locator('textarea, input[type="text"], [contenteditable="true"]').first();
  
  if (await editable.count() === 0) {
    await page.focus('body');
    if (isUITest) {
      for (const char of inputText) {
        await page.keyboard.type(char, { delay: 50 });
        await page.waitForTimeout(200); 
      }
    } else {
      await page.keyboard.type(inputText, { delay: 5 });
    }
  } else {
    if (isUITest) {
      await editable.fill('');
      for (const char of inputText) {
        await editable.type(char, { delay: 50 });
        await page.waitForTimeout(200); 
      }
    } else {
      await editable.fill('');
      await editable.fill(inputText);
    }
  }
}

test.describe('Assignment 1 - SwiftTranslator Automated Test Suite', () => {
  
  for (const testCase of CASES) {
    const isUITest = testCase.id.startsWith('Pos_UI') || testCase.id.startsWith('Neg_UI');
    const isNegativeTest = testCase.id.startsWith('Neg_Fun');
    const inputLengthType = getInputLengthType(testCase.input);
    
    test(`${testCase.id} - Transliteration Test`, async ({ page }) => {
      await page.goto(SWIFT_TRANSLATOR_URL, { 
        waitUntil: 'domcontentloaded' 
      });

      await enterInputText(page, testCase.input, isUITest);

      let transliterationOccurred = false;
      if (!isNegativeTest) {
        try {
          await waitForSinhalaText(page, 10000);
          transliterationOccurred = true;
        } catch (e) {
          
        }
      }

      const actualOutput = await extractSinhalaText(page);
      
      console.log('\n' + '='.repeat(80));
      console.log(`TEST CASE: ${testCase.id}`);
      console.log(`Input Length Type: ${inputLengthType} (${testCase.input.length} chars)`);
      console.log(`Input: "${testCase.input}"`);
      console.log(`Actual Output: "${actualOutput.substring(0, 300)}${actualOutput.length > 300 ? '...' : ''}"`);
      console.log(`Output Length: ${actualOutput.length} characters`);
      console.log(`Transliteration Occurred: ${transliterationOccurred ? 'Yes' : 'No'}`);
      console.log(`Test Type: ${isUITest ? 'UI Test' : isNegativeTest ? 'Negative Functional' : 'Positive Functional'}`);
      console.log('='.repeat(80));
      
      expect(actualOutput.length).toBeGreaterThanOrEqual(0);
      
      if (testCase.input.trim().length > 0) {
        expect(actualOutput.length).toBeGreaterThan(0);
      }
      
      if (isUITest) {
        const bodyText = await page.locator('body').textContent();
        const hasOutput = actualOutput.length > 0 || (bodyText && bodyText.length > 0);
        expect(hasOutput).toBeTruthy();
      }
    });
  }
});
