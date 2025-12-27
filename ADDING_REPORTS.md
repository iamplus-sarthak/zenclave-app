# Adding New Reports to Zenclave

This guide explains how to add new interactive PDF reports to the Zenclave system.

## Overview
Zenclave uses a **1:1 mapping** between a PDF file and a JSON data file. 
- **PDF File**: The actual document displayed on the left.
- **JSON File**: Controls the chatbot logic, stats, and metadata on the right.

---

## Step 1: Add the PDF File
Place your PDF document in the public reports directory:
- **Path**: `/public/reports/your-report-name.pdf`

---

## Step 2: Create the JSON Data File
Create a corresponding JSON file in the data directory. The filename must match the `id` you want to use in the URL.
- **Path**: `/src/data/reports/your-report-name.json`

### JSON Structure Reference
```json
{
  "id": "your-report-name",
  "title": "Professional Title of the Report",
  "pdfUrl": "/reports/your-report-name.pdf",
  "summary": "A brief overview displayed at the start of the chat.",
  "stats": {
    "totalViews": "1,234",
    "avgTime": "5m 30s",
    "completion": "85%",
    "activeReaders": "42"
  },
  "initialQuestionIds": ["q1", "q2"],
  "questions": [
    {
      "id": "q1",
      "text": "The question text shown to the user",
      "answer": "The bot's response. You can use [Markdown Links](https://link.com) here.",
      "category": "Technology",
      "icon": "Layers",
      "nextQuestionIds": ["q1_followup"]
    },
    {
      "id": "q1_followup",
      "text": "A deeper follow-up question",
      "answer": "Detailed explanation...",
      "category": "Implementation",
      "icon": "Settings",
      "nextQuestionIds": []
    }
  ]
}
```

### Key Fields Documentation:
- **`initialQuestionIds`**: These determine which buttons appear first when the report loads.
- **`nextQuestionIds`**: Enables a decision-tree structure. When a user clicks a question, the bot provides the answer and then displays these IDs as the next set of options.
- **`icon`**: Use names from [Lucide React](https://lucide.dev/icons) (e.g., `Shield`, `Zap`, `Activity`).

---

## Advanced Features

### 1. Infinite Question Branching
You can create complex decision trees of any depth.
- Simply point `nextQuestionIds` to a new set of question IDs.
- You can loop back to previous questions or end a branch by leaving `nextQuestionIds` empty `[]`.

**Example:**
Q1 -> [Q1a, Q1b] -> Q1a -> [Q1a1, Q1a2] ...

### 2. Dynamic Lead Form Trigger (CTA)
To make a specific question trigger the "Lead Generation Form" (instead of an answer), add the `"isCTA": true` flag.

```json
{
  "id": "final_cta_question",
  "text": "Ready to transform your business?",
  "answer": "", 
  "category": "Action",
  "icon": "Rocket",
  "isCTA": true
}
```
**Note**: When `isCTA` is true, the `answer` field is ignored by the bot, but requires a string value (can be empty).

### 3. Lead Generation Popup
The "Download PDF" button in the header automatically triggers a lead capture popup. No configuration is needed for this; it applies globally to all reports.

---

## Step 3: Viewing the Report
Once both files are added, the report is available instantly.

**URL Format:**
`http://localhost:3000/report?id=your-report-name`

Replace `your-report-name` with the filename (without extension) from Step 2.

---

## Tips for Best Results
1.  **Deep Linking**: Use the branching feature to guide users from high-level summaries to specific deep-dives.
2.  **Strategic CTAs**: Place `isCTA` questions at logical "high-intent" moments in the conversation flow (e.g., after explaining pricing or ROI).
3.  **Rich Text**: You can use Markdown links in answers: `[Click here](https://...)`.

