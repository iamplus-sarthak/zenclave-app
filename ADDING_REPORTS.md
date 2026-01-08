# Adding Reports

## Quick Start

### 1. Upload PDF

```bash
npm run upload-pdf path/to/report.pdf
```

Copy the returned URL.

### 2. Insert into Database

Go to Neon Console → SQL Editor:

```sql
INSERT INTO tenant_documents (title, url, type, json_config)
VALUES (
  'Your Report Title',
  'https://xxxxx.blob.vercel-storage.com/reports/...',
  'report',
  '{
    "summary": "Brief overview of the report",
    "initialQuestionIds": ["q1", "q2", "q3"],
    "questions": [
      {
        "id": "q1",
        "text": "What are the key findings?",
        "answer": "The main findings are...",
        "nextQuestionIds": ["q4", "q5"],
        "isCTA": false
      }
    ],
    "stats": {
      "totalViews": 1234,
      "viewsChange": 12,
      "avgTime": "4m 30s",
      "timeChange": 8,
      "completion": 85,
      "completionChange": 3,
      "activeReaders": 42,
      "readersChange": 5
    }
  }'::jsonb
)
RETURNING id;
```

### 3. View Report

```
http://localhost:3000/report?id=<returned-id>
```

## Question Structure

### Basic Question
```json
{
  "id": "q1",
  "text": "Question shown to user",
  "answer": "Bot response. Use **bold** and [links](url).",
  "nextQuestionIds": ["q2", "q3"],
  "isCTA": false
}
```

### CTA Question (shows form instead of answer)
```json
{
  "id": "cta",
  "text": "Ready to get started?",
  "answer": "",
  "nextQuestionIds": [],
  "isCTA": true
}
```

## Question Flow

Questions can branch infinitely:

```
Initial: [q1, q2, q3]
  ↓
q1 → [q4, q5]
  ↓
q4 → [q6, q7]
  ↓
q6 → [cta]
```

Use `initialQuestionIds` for first questions, `nextQuestionIds` for follow-ups.

## Stats Format

```json
"stats": {
  "totalViews": 1234,        // number
  "viewsChange": 12,          // percentage
  "avgTime": "4m 30s",        // string
  "timeChange": 8,            // percentage
  "completion": 85,           // percentage
  "completionChange": 3,      // percentage
  "activeReaders": 42,        // number
  "readersChange": 5          // percentage
}
```

That's it!
