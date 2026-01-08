#!/usr/bin/env node

// Load environment variables from .env.local
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

/**
 * CLI tool to upload PDFs to Vercel Blob Storage
 * 
 * Usage:
 *   node scripts/upload-pdf.js path/to/file.pdf
 *   npm run upload-pdf path/to/file.pdf
 */

import { put } from '@vercel/blob';
import { readFile } from 'fs/promises';
import { basename } from 'path';

async function uploadPDF(filePath) {
    try {
        const fileBuffer = await readFile(filePath);
        const fileName = basename(filePath);

        // Validate file extension
        if (!fileName.toLowerCase().endsWith('.pdf')) {
            throw new Error('File must be a PDF');
        }

        // Create sanitized filename with timestamp
        const timestamp = Date.now();
        const sanitizedName = fileName
            .replace(/[^a-zA-Z0-9.-]/g, '-')
            .toLowerCase();
        const blobPath = `reports/${timestamp}-${sanitizedName}`;

        console.log(`Uploading ${fileName}...`);

        // Upload to Vercel Blob
        const blob = await put(blobPath, fileBuffer, {
            access: 'public',
            contentType: 'application/pdf',
        });

        console.log('\nSuccess! Blob URL:');
        console.log(blob.url);
        console.log('');

        return blob;
    } catch (error) {
        console.error('Upload failed:', error.message);
        process.exit(1);
    }
}

// Get file path from command line arguments
const filePath = process.argv[2];

if (!filePath) {
    console.error('❌ Error: No file path provided\n');
    console.log('Usage:');
    console.log('  node scripts/upload-pdf.js path/to/file.pdf');
    console.log('  npm run upload-pdf path/to/file.pdf\n');
    process.exit(1);
}

uploadPDF(filePath);
