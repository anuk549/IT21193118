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
├── IT21193118.xlsx                  # Test cases with inputs, expected outputs, and results
└── README.md                        # This file
```

---

## ✅ Prerequisites

Before running the project, make sure the following are installed on your machine:

- **Python 3.11 or 3.12** → [https://www.python.org/downloads/](https://www.python.org/downloads/)
- **Google Chrome** (recommended) → [https://www.google.com/chrome/](https://www.google.com/chrome/)
- **Git** (to clone the repository) → [https://github.com/anuk549/IT21193118](https://github.com/anuk549/IT21193118)

---

## 🚀 Setup & Installation

### Step 1 – Clone the Repository

```bash
git clone https://github.com/anuk549/IT21193118
```

### Step 2 – Install Python Dependencies

Run the following commands **once** to install all required packages:

```bash
pip install -U pip
pip install playwright openpyxl
playwright install
```

---

## ▶️ Running the Tests

### Step 1 – Prepare the Excel File

Open `IT21193118.xlsx` and make sure the following columns are filled in for each test case:

| Column              | Description                     |
| ------------------- | ------------------------------- |
| `TC ID`             | Test case ID (e.g., `Neg_0001`) |
| `Input length type` | S / M / L                       |
| `Input`             | Singlish input text             |
| `Expected output`   | Correct Sinhala translation     |

### Step 2 – Run the Automation Script

Open **Command Prompt** and navigate to the project folder:

Then run:

```bash
python test_automation.py --excel "IT21193118.xlsx" --url "https://www.pixelssuite.com/chat-translator" --wait-ms 5000 --type-delay-ms 80 --slow-mo-ms 200 --save-every 1 --keep-open
```

### Step 3 – Check Results

Once the script finishes:

1. Open `IT21193118.xlsx`
2. Verify the values automatically filled under `Actual output` and `Status`
3. Manually fill in columns `G` and `H`:
   - `Singlish input types covered`
   - `Evidence or rationale for the input type covered`

---

## ⚙️ Script Arguments (Reference)

| Argument          | Default                                       | Description                                   |
| ----------------- | --------------------------------------------- | --------------------------------------------- |
| `--excel`         | `IT21193118.xlsx`                             | Path to the Excel test case file              |
| `--url`           | `https://www.pixelssuite.com/chat-translator` | URL of the target application                 |
| `--wait-ms`       | `5000`                                        | Time (ms) to wait for output after each input |
| `--type-delay-ms` | `80`                                          | Delay (ms) between each keystroke             |
| `--slow-mo-ms`    | `200`                                         | Slow motion delay for browser actions         |
| `--save-every`    | `1`                                           | Save Excel after every N test cases           |
| `--keep-open`     | `false`                                       | Keep browser open after all tests complete    |
| `--headless`      | `false`                                       | Run browser in background (no UI visible)     |

---

## 📌 Notes

- This project tests only the **Chat Sinhala** transliteration function.
- Standard Sinhala, backend APIs, performance, scalability, and security testing are **out of scope**.
- All 50 test cases are **negative**: the `Expected output` column contains the corrected Sinhala text, while `Actual output` contains the application output collected by Playwright. These rows are expected to show `Fail`.

---

_IT21193118 | BSc (Hons) in Information Technology – Year 3 | SLIIT_
