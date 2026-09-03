import React from 'react';
import { Eye, ShieldCheck, CloudUpload, MonitorPlay, RefreshCw, Lock, Sparkles } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Eye,
      title: 'See Locally',
      description: 'Capture and understand what\'s on your screen using in-browser ONNX YOLOv8 visual AI.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      icon: ShieldCheck,
      title: 'Protect Locally',
      description: 'Identify and redact sensitive information (PII, passwords, emails, faces) before it leaves your device.',
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      icon: CloudUpload,
      title: 'Reason Remotely',
      description: 'Send only sanitized, redacted context to cloud models (e.g. Groq VLM) for intelligent reasoning.',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      icon: MonitorPlay,
      title: 'Act Locally',
      description: 'Execute the required UI actions and synthetic clicks in your browser locally with zero DOM leakage.',
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      icon: RefreshCw,
      title: 'Observe Again',
      description: 'Capture the updated screen state and repeat the perception loop for continuous browser safety.',
      color: 'bg-teal-50 text-teal-600 border-teal-100',
    },
    {
      icon: Lock,
      title: 'Your Data Stays Safe',
      description: 'We never collect, store, or transmit your unredacted personal data. Ever.',
      color: 'bg-sky-50 text-sky-600 border-sky-100',
    },
  ];

  return (
    <section id="what-is-webshield" className="py-12 lg:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wider border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            What is WISE Extension?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            <strong>Web Intelligence Security Extension (WISE)</strong> is an intelligent browser agent that detects and protects sensitive content on-device.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="group bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-5 sm:p-6 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between items-center text-center space-y-3 h-full overflow-hidden"
              >
                <div className="w-full flex flex-col items-center space-y-3">
                  
                  {/* Icon Container */}
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${feature.color} group-hover:scale-105 transition-transform shrink-0`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
