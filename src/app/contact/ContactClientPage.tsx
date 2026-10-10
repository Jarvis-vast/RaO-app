"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, AlertCircle, MessageCircle } from "lucide-react";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { BUSINESS_CONFIG } from "@/lib/config/business";

export default function ContactClientPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [planningType, setPlanningType] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successData, setSuccessData] = useState<{
    requestId: string;
    whatsappUrl: string;
  } | null>(null);

  const whatsappDirectUrl = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi RaO! I would like to speak with a personal travel designer regarding a trip."
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile or WhatsApp number.");
      return;
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        setErrorMsg("Please enter a valid email address.");
        return;
      }
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: email || undefined,
          planningType: planningType || "General Inquiry",
          message: message || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit your message.");
      }

      setSuccessData({
        requestId: data.requestId,
        whatsappUrl: data.whatsappUrl,
      });
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try WhatsApp directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Direct Options */}
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-5xl font-semibold text-foreground tracking-tight">Let&apos;s plan your next escape.</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Have questions or prefer talking to a human first? Our travel designers are here to guide you.
            </p>
          </header>

          <div className="space-y-6 pt-2">
            <div className="bg-[#1C0A0B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary font-medium text-lg">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <h3>WhatsApp Direct Concierge</h3>
              </div>
              <p className="text-foreground/80 font-light text-sm">
                Chat directly with a human planner. Active 9:00 AM – 9:00 PM IST.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all text-sm font-medium"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-medium text-primary">Follow Our Odysseys</h3>
              <p className="text-foreground/80 font-light text-sm">
                Stay inspired with our latest trip stories, itineraries, and updates across social media.
              </p>
              <div className="pt-2">
                <SocialLinks />
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-medium text-primary">Ready to plan?</h3>
              <p className="text-foreground/80 font-light text-sm">
                Jump straight into our interactive planner. Choose your mood, dates, and budget.
              </p>
              <div className="pt-2">
                <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-accent px-6 py-3 font-medium text-sm transition-colors">
                  <Link href="/plan">Open Planner <ArrowRight className="w-4 h-4 ml-1.5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Enquiry Form */}
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          {!successData ? (
            <>
              <h2 className="text-2xl font-medium text-foreground mb-2">Send an Enquiry</h2>
              <p className="text-xs text-muted-foreground font-light mb-6">
                Tell us about your upcoming plans. We usually respond within a few hours.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground px-1 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="e.g. Vikram Malhotra"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground px-1 font-medium">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="e.g. +91 98200 12345"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground px-1 font-medium">Email (Optional)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="vikram@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground px-1 font-medium">Trip Type</label>
                  <select
                    value={planningType}
                    onChange={(e) => setPlanningType(e.target.value)}
                    className="w-full bg-[#1C0A0B] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="">Select trip style</option>
                    <option value="Friends Getaway">Friends Getaway</option>
                    <option value="Family Trip">Family Vacation</option>
                    <option value="Couple / Romance">Couple / Honeymoon</option>
                    <option value="Corporate / Team">Corporate / Team Retreat</option>
                    <option value="Solo Reset">Solo Exploration</option>
                    <option value="Other">Other Custom Journey</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground px-1 font-medium">Message or Requirements</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-muted-foreground/50"
                    placeholder="Tell us what you have in mind..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-primary text-primary-foreground hover:bg-accent py-6 text-sm font-medium transition-colors shadow-lg mt-2"
                >
                  {submitting ? "Sending Your Enquiry..." : "Send Message"}
                </Button>
              </form>
            </>
          ) : (
            <div className="space-y-6 text-center py-6">
              <div className="w-14 h-14 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-light text-foreground">Message Received!</h3>
                <p className="text-xs text-primary font-mono tracking-wider font-semibold">
                  ENQUIRY ID: {successData.requestId}
                </p>
                <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm mx-auto pt-2">
                  Thank you, {name}! A RaO travel designer has received your inquiry and will reach out promptly.
                </p>
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href={successData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full rounded-full bg-[#25D366] text-black font-medium py-3 px-6 text-sm hover:bg-[#20ba59] transition-colors gap-2 shadow-lg"
                >
                  <span>Continue on WhatsApp Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Button
                  variant="ghost"
                  onClick={() => {
                    setSuccessData(null);
                    setName("");
                    setPhone("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Send Another Message
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
