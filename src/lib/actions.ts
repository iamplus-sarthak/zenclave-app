"use server";

import fs from 'fs';
import path from 'path';

export async function getReport(id: string = "demo-1") {
    try {
        const filePath = path.join(process.cwd(), `src/data/reports/${id}.json`);

        if (!fs.existsSync(filePath)) {
            console.warn(`Report file not found: ${filePath}`);
            return null;
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');
        const report = JSON.parse(fileContents);

        return report;
    } catch (error) {
        console.error("Error reading report data:", error);
        return null;
    }
}
