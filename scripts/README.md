# PDF Upload CLI

Upload PDFs to Vercel Blob Storage.

## Setup

Add to `.env.local`:
```bash
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxx
```

Get token from: Vercel Dashboard → Project → Storage → Blob → Settings

## Usage

```bash
npm run upload-pdf path/to/file.pdf
```

## Example

```bash
npm run upload-pdf public/reports/q3-analysis.pdf
```

Returns a Blob URL. Use it in your database INSERT statement.
