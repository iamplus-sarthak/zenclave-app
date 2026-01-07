CREATE TABLE "tenant_documents" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" text,
	"title" text NOT NULL,
	"description" text,
	"url" text NOT NULL,
	"type" text NOT NULL,
	"assistant_id" text,
	"json_config" json,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
