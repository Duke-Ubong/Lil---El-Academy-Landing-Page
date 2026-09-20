import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Curriculum from "./components/Curriculum";
import Year10Intervention from "./components/Year10Intervention";
import WhyUs from "./components/WhyUs";
import ParentPartnership from "./components/ParentPartnership";
import AdmissionTracker from "./components/AdmissionTracker";
import ParentInquiryForm from "./components/ParentInquiryForm";
import FloatingFormBar from "./components/FloatingFormBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFA] text-stone-900 selection:bg-[#7B182B] selection:text-white">
      {/* Sticky Header with Logo, Navigation & Enroll CTA */}
      <Navbar />

      {/* Main Landing Flow */}
      <main className="flex-grow">
        {/* High-Impact Hero with Tagline, Core Value Props, Trust Numbers */}
        <Hero />

        {/* About Us: Christian Worldview, Mission, Parent Partnership */}
        <AboutUs />

        {/* Curriculum & Programs: Interactive KS1 to KS4 Subject Breakdowns */}
        <Curriculum />

        {/* Featured High-Conversion Section: Year 10 Early Intervention */}
        <Year10Intervention />

        {/* Why Choose Us: 6 Core Pillars & Comparison Table vs. Mainstream */}
        <WhyUs />

        {/* Parent-School Partnership & Real Testimonials */}
        <ParentPartnership />

        {/* Visual Step-by-Step Admission Process Tracker */}
        <AdmissionTracker />

        {/* Parent Registration & Inquiry Booking Form */}
        <ParentInquiryForm />
      </main>

      {/* Floating Apple Glass Quick Enroll Dock */}
      <FloatingFormBar />

      {/* Footer with Contact Info (+447768639106, info@lilelacademy.com), Socials & Copyright */}
      <Footer />
    </div>
  );
}
