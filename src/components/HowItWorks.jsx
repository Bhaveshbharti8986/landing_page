import React from 'react';
import { Download, Globe, ScanEye, ShieldCheck, RefreshCw, ArrowRight, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '1. Install',
      title: 'Download & Load',
      description: 'Download the WISE extension zip package or clone the repository into Chrome/Edge/Brave.',
      icon: Download,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      step: '2. Browse',
      title: 'Browse Normally',
      description: 'Browse news, social media, web apps, or forms without changing your workflow.',
      icon: Globe,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      step: '3. Detect',
      title: 'Visual Detection',
      description: 'In-browser YOLOv8 WASM model identifies 6 UI control types and PII fields in under 300ms.',
      icon: ScanEye,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      step: '4. Protect',
      title: 'Instant Canvas Blur',
      description: 'Sensitive fields are pixelated locally on HTML5 Canvas before any network egress.',
      icon: ShieldCheck,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      step: '5. Repeat',
      title: 'Continuous Safety',
      description: 'The perception loop dynamically monitors screen updates for continuous automated protection.',
      icon: RefreshCw,
      color: 'bg-teal-50 text-teal-600 border-teal-200',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 lg:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wider border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '7s' }} /> Simple Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            How to Use WISE Extension?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Simple, automated steps for a safer and more private browsing experience with WISE.
          </p>
        </div>

        {/* 5-Step Process Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch relative">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative group h-full">
                
                {/* Step Card */}
                <div className="bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-5 text-center flex flex-col justify-between items-center h-full overflow-hidden shadow-2xs transition-all duration-200">
                  <div className="space-y-3 w-full flex flex-col items-center">
                    
                    {/* Icon Badge */}
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform duration-200 shrink-0`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Step Tag */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      {item.step}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Arrow for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 -translate-y-1/2 z-10 pointer-events-none text-slate-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
