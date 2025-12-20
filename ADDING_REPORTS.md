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

## Step 3: Viewing the Report
Once both files are added, the report is automatically available via dynamic routing.

**URL Format:**
`http://localhost:3000/report?id=your-report-name`

Replace `your-report-name` with the exact filename (excluding `.json`) of the file you created in Step 2.

---

## Tips for Best Results
1. **Markdown Links**: Use `[Text](URL)` in the `answer` field to provide clickable resources during the chat.
2. **Icons**: Use consistent categories and icons to give the bot a structured feel.
3. **No Database Needed**: The system reads directly from the filesystem, so you can add reports by simply dropping files into the folders.
