import React from 'react';
import { Download, ShieldCheck, Sparkles, CheckCircle2, Cpu } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-14 lg:py-18 bg-slate-900 text-white relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 mx-auto flex items-center justify-center shadow-lg animate-float">
          <ShieldCheck className="w-7 h-7" />
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
            Ready to Browse Smarter and Safer with WISE?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal">
            Join privacy-conscious users who trust <strong>WISE (Web Intelligence Security Extension)</strong> for on-device visual intelligence and zero-leakage security.
          </p>
        </div>

        {/* Direct ZIP Download Button - Solid White */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
          <a
            href="/wise-extension.zip"
            download="wise-extension.zip"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-md transition-all duration-200 hover:scale-105"
          >
            <Download className="w-4 h-4 text-blue-600" />
            <span>Download WISE Zip (21MB)</span>
          </a>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" /> Chrome, Edge & Brave Compatible
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Sparkles className="w-4 h-4 text-amber-400" /> Windows & macOS Supported
          </span>
          <span className="flex items-center gap-1.5 text-blue-300">
            <Cpu className="w-4 h-4" /> On-Device WASM Engine Verified
          </span>
        </div>

      </div>
    </section>
  );
}
