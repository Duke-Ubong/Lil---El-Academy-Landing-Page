"use client";

import React from "react";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import AboutUs from "@/src/components/AboutUs";
import Curriculum from "@/src/components/Curriculum";
import Year10Intervention from "@/src/components/Year10Intervention";
import WhyUs from "@/src/components/WhyUs";
import ParentPartnership from "@/src/components/ParentPartnership";
import ParentInquiryForm from "@/src/components/ParentInquiryForm";
import Footer from "@/src/components/Footer";

/**
 * Lil-El Academy - High-Converting Landing Page
 * Next.js App Router (app/page.tsx)
 *
 * Theme Palette:
 * - Deep Maroon / Crimson: #5A0F1D / #4A0C17
 * - Dark Green: #163A24 / #0E2919
 * - Gold: #D4AF37 / #FAF5EB
 * - Crisp White & Warm Stone: #FFFFFF / #FCFCFA
 */
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFA] text-stone-900 selection:bg-[#7B182B] selection:text-white">
      {/* Sticky Header with Logo, Navigation Links, and Enroll CTA */}
      <Navbar />

      <main className="flex-grow">
        {/* High-Impact Hero Section */}
        <Hero />

        {/* Mission, Biblical Worldview, and Parental Partnership */}
        <AboutUs />

        {/* Interactive KS1 to KS4 Subject Breakdowns (Maths, English, Science) */}
        <Curriculum />

        {/* Featured Section: Year 10 Early Intervention */}
        <Year10Intervention />

        {/* Why Choose Us & Comparison Table against Mainstream Schools */}
        <WhyUs />

        {/* Parent-School Partnership & Testimonials */}
        <ParentPartnership />

        {/* Secure Parent Registration & Diagnostic Booking Form */}
        <ParentInquiryForm />
      </main>

      {/* Official Academy Footer with Verified Contact Details */}
      <Footer />
    </div>
  );
}
