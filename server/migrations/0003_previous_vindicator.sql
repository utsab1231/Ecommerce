ALTER TABLE "user" ADD COLUMN "location" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "phoneNumber" text;--> statement-breakpoint
ALTER TABLE "account" DROP COLUMN IF EXISTS "phoneNumber";