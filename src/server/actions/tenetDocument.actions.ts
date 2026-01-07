"use server";
import { db } from '../db';
import { tenantDocuments, TenantDocument } from '../schema/tenantDocument';
import { eq } from 'drizzle-orm';

export async function getTenetDocumentById(id: string): Promise<TenantDocument | null> {
	if (!id) return null;

	const results = await db
		.select()
		.from(tenantDocuments)
		.where(eq(tenantDocuments.id, id))
		.limit(1);

	return results[0] ?? null;
}

