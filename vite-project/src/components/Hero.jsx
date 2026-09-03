import React from 'react';
import { Download, Play, Cpu, ShieldCheck, Zap, Lock, Sparkles, Plus, Code2 } from 'lucide-react';

export default function Hero() {
  const avatarUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80";

  return (
    <section id="home" className="relative pt-8 pb-12 lg:pt-12 lg:pb-20 overflow-hidden bg-slate-50/50" data-purpose="hero-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Hero Text Left Column */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left animate-fade-in-up">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-100 shadow-2xs text-xs font-semibold text-blue-600 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>AI-Powered Web Intelligence & Security</span>
            </div>

            {/* Headline - Solid Colors & Lighter Weight */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.18]">
              See <span className="text-blue-600">Locally.</span><br />
              Protect <span className="text-blue-600">Locally.</span><br />
              Act <span className="text-blue-600">Locally.</span>
            </h1>

            {/* Subtitle description */}
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong className="text-slate-900 font-semibold">WISE (Web Intelligence Security Extension)</strong> is your on-device AI browser agent that detects, redacts, and protects sensitive information in real-time — <strong className="font-medium text-slate-800">your data stays 100% on your device.</strong>
            </p>

            {/* Action Buttons - Solid Blue Button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="/wise-extension.zip"
                download="wise-extension.zip"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-2xs transition-all duration-200 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Download Extension Zip</span>
              </a>

              <a
                href="#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-blue-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-all duration-200 shadow-2xs"
              >
                <Play className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                <span>Watch Prototype</span>
              </a>
            </div>

            {/* Quick Feature Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-slate-600 text-xs font-medium">
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-blue-600" />
                <span>On-Device WASM</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>12MB YOLO Model</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Showcase - Clean Solid Colors & Framed Face */}
          <div className="lg:col-span-6 animate-float">
            <div className="relative mx-auto max-w-xl rounded-2xl bg-white p-3 sm:p-4 border border-slate-200 shadow-lg">
              
              {/* Browser Window Header */}
              <div className="px-2 pb-3 flex items-center justify-between gap-3 border-b border-slate-100 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="text-xs text-slate-500 ml-2 font-normal">News Article</span>
                </div>

                {/* Address Bar Simulation */}
                <div className="flex-1 max-w-sm bg-slate-50 rounded-md px-2.5 py-1 text-xs text-slate-500 flex items-center gap-1.5 border border-slate-200 truncate shadow-2xs">
                  <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="truncate text-slate-600 font-mono text-[10px]">https://newswebsite.com/article</span>
                </div>

                <div className="text-slate-400 p-0.5 hover:text-slate-600">
                  <Plus className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Browser Split View Inner Body */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-0.5 select-none">
                
                {/* Left Card - Before Blur */}
                <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      JUNE 10, 2025 • 2 MIN READ
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      Celebrity's Personal Information Leaked
                    </h3>

                    {/* Clear Unsplash Portrait Image */}
                    <div className="w-full h-28 sm:h-32 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 my-2 shadow-2xs relative flex items-center justify-center">
                      <img
                        src={avatarUrl}
                        alt="Anika Sharma Original Portrait"
                        className="w-full h-full object-cover object-[center_25%]"
                      />
                      <span className="absolute top-1.5 right-1.5 bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-2xs">
                        Face Exposed
                      </span>
                    </div>

                    {/* Exposed Data Fields */}
                    <div className="space-y-1.5 text-[10px] sm:text-xs">
                      <div className="p-1.5 bg-[#fffbeb] rounded-lg border border-[#fef3c7] leading-tight">
                        <span className="text-slate-500 block text-[9px] font-normal">Name:</span>
                        <span className="font-semibold text-slate-800 text-[10px]">Anika Sharma</span>
                      </div>

                      <div className="p-1.5 bg-[#fffbeb] rounded-lg border border-[#fef3c7] leading-tight">
                        <span className="text-slate-500 block text-[9px] font-normal">Email:</span>
                        <span className="font-medium text-slate-800 font-mono text-[9px] break-all">anika.sharma@gmail.com</span>
                      </div>

                      <div className="p-1.5 bg-[#fffbeb] rounded-lg border border-[#fef3c7] leading-tight">
                        <span className="text-slate-500 block text-[9px] font-normal">Phone:</span>
                        <span className="font-medium text-slate-800 font-mono text-[9px]">+91 98765 43210</span>
                      </div>

                      <div className="p-1.5 bg-[#fffbeb] rounded-lg border border-[#fef3c7] leading-tight">
                        <span className="text-slate-500 block text-[9px] font-normal">Address:</span>
                        <span className="font-semibold text-slate-800 text-[9px]">123, Green Park, New Delhi, India</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-bold text-white bg-slate-900 rounded-md">
                      Before Blur
                    </span>
                  </div>
                </div>

                {/* Central Split Indicator Badge */}
                <div className="hidden sm:flex absolute inset-y-0 left-1/2 -translate-x-1/2 items-center justify-center pointer-events-none z-20">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white shadow-sm border border-white flex items-center justify-center">
                    <Code2 className="w-3 h-3" />
                  </div>
                </div>

                {/* Right Card - After Blur */}
                <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      JUNE 10, 2025 • 2 MIN READ
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      Celebrity's Personal Information Leaked
                    </h3>

                    {/* Redacted Blurred Unsplash Portrait Image */}
                    <div className="w-full h-28 sm:h-32 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 my-2 shadow-2xs relative flex items-center justify-center">
                      <img
                        src={avatarUrl}
                        alt="Anika Sharma Redacted Blurred Portrait"
                        className="w-full h-full object-cover object-[center_25%] blur-[9px] scale-105"
                      />
                      <span className="absolute top-1.5 right-1.5 bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-2xs">
                        Face Redacted
                      </span>
                    </div>

                    {/* Redacted Data Fields */}
                    <div className="space-y-1.5 text-[10px] sm:text-xs">
                      <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-200 leading-tight">
                        <span className="text-slate-400 block text-[9px] font-normal">Name:</span>
                        <div className="h-3 w-24 bg-slate-300 rounded blur-[2px] mt-0.5" />
                      </div>

                      <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-200 leading-tight">
                        <span className="text-slate-400 block text-[9px] font-normal">Email:</span>
                        <div className="h-3 w-32 bg-slate-300 rounded blur-[3px] mt-0.5" />
                      </div>

                      <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-200 leading-tight">
                        <span className="text-slate-400 block text-[9px] font-normal">Phone:</span>
                        <div className="h-3 w-28 bg-slate-300 rounded blur-[3px] mt-0.5" />
                      </div>

                      <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-200 leading-tight">
                        <span className="text-slate-400 block text-[9px] font-normal">Address:</span>
                        <div className="h-3 w-40 bg-slate-300 rounded blur-[3px] mt-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-1">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-bold text-white bg-blue-600 rounded-md">
                      After Blur
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
