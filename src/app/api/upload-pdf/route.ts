import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        // Validate file type
        if (!file.type.includes('pdf')) {
            return NextResponse.json(
                { error: 'Only PDF files are allowed' },
                { status: 400 }
            );
        }

        // Validate file size (max 10MB)
        const MAX_SIZE = 10 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
            return NextResponse.json(
                { error: 'File too large. Maximum size is 10MB' },
                { status: 400 }
            );
        }

        // Sanitize filename
        const timestamp = Date.now();
        const sanitizedName = file.name
            .replace(/[^a-zA-Z0-9.-]/g, '-')
            .toLowerCase();
        const filename = `reports/${timestamp}-${sanitizedName}`;

        // Upload to Vercel Blob
        const blob = await put(filename, file, {
            access: 'public',
        });

        return NextResponse.json({
            success: true,
            url: blob.url,
            pathname: blob.pathname,
            downloadUrl: blob.downloadUrl,
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: 'Upload failed' },
            { status: 500 }
        );
    }
}
