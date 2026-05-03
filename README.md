# IT21193118 – Assignment 1: Transliteration Accuracy Testing

**Module:** IT3040 – IT Project Management  
**Student ID:** IT21193118  
**Option:** Option 1 – Chat Sinhala Transliteration (Singlish → Sinhala)  
**Target Application:** [https://www.pixelssuite.com/chat-translator](https://www.pixelssuite.com/chat-translator)

---

## 📁 Project Structure

```
test_automation/
├── test_automation.py               # Main Playwright automation script
├── Assignment 1 - Test cases.xlsx   # Test cases with inputs & expected outputs
└── README.md                        # This file
```

---

## ✅ Prerequisites

Before running the project, make sure the following are installed on your machine:

- **Python 3.11 or 3.12** → [https://www.python.org/downloads/](https://www.python.org/downloads/)
- **Google Chrome** (recommended) → [https://www.google.com/chrome/](https://www.google.com/chrome/)
- **Git** (to clone the repository) → [https://git-scm.com/](https://git-scm.com/)

---

## 🚀 Setup & Installation

### Step 1 – Clone the Repository

```bash
git clone <your-repository-url>
cd test_automation
```

### Step 2 – Install Python Dependencies

Run the following commands **once** to install all required packages:

```bash
pip install -U pip
pip install playwright openpyxl
playwright install
```

> If you face permission errors, use `pip install --user playwright openpyxl`

---

## ▶️ Running the Tests

### Step 1 – Prepare the Excel File

Open `Assignment 1 - Test cases.xlsx` and make sure the following columns are filled in for each test case:

| Column | Description |
|--------|-------------|
| `TC ID` | Test case ID (e.g., `Neg_0001`) |
| `Input length type` | S / M / L |
| `Input` | Singlish input text |
| `Expected output` | Correct Sinhala translation |

> ⚠️ Do **NOT** manually fill in the `Actual output` or `Status` columns — these are filled automatically by the script.

### Step 2 – Run the Automation Script

Open **Command Prompt** and navigate to the project folder:

```bash
cd /d D:\test_automation
```

Then run:

```bash
python test_automation.py --excel "Assignment 1 - Test cases.xlsx" --url "https://www.pixelssuite.com/chat-translator" --wait-ms 5000 --type-delay-ms 80 --slow-mo-ms 200 --save-every 1 --keep-open
```

### Step 3 – Check Results

Once the script finishes:

1. Open `Assignment 1 - Test cases.xlsx`
2. Verify the values automatically filled under `Actual output` and `Status`
3. Manually fill in columns `G` and `H`:
   - `Singlish input types covered`
   - `Evidence or rationale for the input type covered`

---

## ⚙️ Script Arguments (Reference)

| Argument | Default | Description |
|----------|---------|-------------|
| `--excel` | `Assignment 1 - Test cases.xlsx` | Path to the Excel test case file |
| `--url` | `https://www.pixelssuite.com/chat-translator` | URL of the target application |
| `--wait-ms` | `5000` | Time (ms) to wait for output after each input |
| `--type-delay-ms` | `80` | Delay (ms) between each keystroke |
| `--slow-mo-ms` | `200` | Slow motion delay for browser actions |
| `--save-every` | `1` | Save Excel after every N test cases |
| `--keep-open` | `false` | Keep browser open after all tests complete |
| `--headless` | `false` | Run browser in background (no UI visible) |

---

## 🧪 Test Case Coverage

The test suite contains **50 negative test cases** (`Neg_0001` to `Neg_0050`) covering all **24 Singlish input types** as specified in Appendix 1 of the assignment, with a minimum of **2 test cases per input type**.

| # | Singlish Input Type |
|---|----------------------|
| 1 | Question forms |
| 2 | Command forms |
| 3 | Greetings |
| 4 | Requests |
| 5 | Responses |
| 6 | Repeated Words |
| 7 | Inputs with Punctuation Marks |
| 8 | Romanization / Spelling Variants |
| 9 | Isolated English Word Insertions in Singlish |
| 10 | Multi-Word English Phrases in Singlish |
| 11 | English Digital Terms in Singlish |
| 12 | Platform/App Names in Singlish |
| 13 | English Abbreviations/Acronyms in Singlish |
| 14 | English Clipped Forms in Singlish |
| 15 | Place Names Embedded in Singlish |
| 16 | Person Names Embedded in Singlish |
| 17 | Inputs with Numbers and Numeric Suffixes |
| 18 | Inputs with Currency |
| 19 | Inputs with Time Formats |
| 20 | Inputs with Dates |
| 21 | Inputs with Unit of Measurements |
| 22 | Inputs with Slang and Casual Phrasing |
| 23 | Online Identifiers in Singlish |
| 24 | Inputs Containing Emojis |

---

## 🔧 Troubleshooting

**Problem:** `playwright` command not found  
**Fix:** Run `pip install playwright` then `playwright install`

**Problem:** Excel file not found error  
**Fix:** Make sure the Excel file name matches exactly and is placed inside the `test_automation/` folder

**Problem:** Browser doesn't open  
**Fix:** Ensure Google Chrome is installed, or run `playwright install chromium`

**Problem:** Output column not updating  
**Fix:** Increase `--wait-ms` to `7000` or `10000` to give the app more time to respond

---

## 📌 Notes

- This project tests only the **Chat Sinhala** transliteration function.  
- Standard Sinhala, backend APIs, performance, scalability, and security testing are **out of scope**.  
- All 50 test cases are **negative** (cases where the system fails to produce the correct output).

---

*IT21193118 | BSc (Hons) in Information Technology – Year 3 | SLIIT*
