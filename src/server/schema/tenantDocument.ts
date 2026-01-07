import { pgTable, uuid, text, timestamp, json, jsonb } from 'drizzle-orm/pg-core';
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';

export const tenantDocuments = pgTable('tenant_documents', {
  id: uuid('id').defaultRandom().primaryKey(),
  tenantId: text('tenant_id'), // nullable by default
  title: text('title').notNull(),
  description: text('description'), // nullable
  url: text('url').notNull(),
  type: text('type').notNull(),
  assistantId: text('assistant_id'), // nullable

  jsonConfig: jsonb('json_config'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),

  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});


export type TenantDocument = InferSelectModel<typeof tenantDocuments>;

export type NewTenantDocument = InferInsertModel<typeof tenantDocuments>;