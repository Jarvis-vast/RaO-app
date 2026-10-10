-- Additive migration: Add lead attribution fields to customer_lead_requests table
ALTER TABLE "customer_lead_requests" ADD COLUMN IF NOT EXISTS "utmSource" TEXT;
ALTER TABLE "customer_lead_requests" ADD COLUMN IF NOT EXISTS "utmMedium" TEXT;
ALTER TABLE "customer_lead_requests" ADD COLUMN IF NOT EXISTS "utmCampaign" TEXT;
ALTER TABLE "customer_lead_requests" ADD COLUMN IF NOT EXISTS "landingPage" TEXT;
ALTER TABLE "customer_lead_requests" ADD COLUMN IF NOT EXISTS "referrer" TEXT;
