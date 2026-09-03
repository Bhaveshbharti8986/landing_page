import React from 'react';
import { Newspaper, Users, MessageSquare, Search, Globe, Shield, Database, Lock, Sparkles, CheckCircle } from 'lucide-react';

export default function SecurityUseCases() {
  const useCases = [
    { icon: Newspaper, label: 'News Websites', color: 'bg-blue-50 text-blue-600' },
    { icon: Users, label: 'Social Media', color: 'bg-purple-50 text-purple-600' },
    { icon: MessageSquare, label: 'Forums & Blogs', color: 'bg-amber-50 text-amber-600' },
    { icon: Search, label: 'Search Engines', color: 'bg-emerald-50 text-emerald-600' },
    { icon: Globe, label: 'Any Web App', color: 'bg-indigo-50 text-indigo-600' },
  ];

  const securityPillars = [
    {
      icon: Shield,
      title: '100% Local Privacy',
      description: 'Your visual data and sensitive text never leave your device without explicit consent.',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      icon: Database,
      title: 'No Data Storage',
      description: 'We do not collect, store, log, or monetize any of your personal information. Ever.',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      icon: Lock,
      title: 'Secure by Design',
      description: 'Built with ONNX WASM web sandbox isolation and lightweight zero-DOM pixel grounding.',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    },
  ];

  return (
    <section id="security" className="py-12 lg:py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Column: Where Can You Use It? */}
          <div id="where-to-use" className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 space-y-4 flex flex-col justify-between h-full overflow-hidden">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-semibold uppercase tracking-wider border border-blue-100">
                <Globe className="w-3 h-3 text-blue-600" /> Universal Compatibility
              </div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-1.5 tracking-tight">
                Where Can You Use It? <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              </h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                WISE Extension seamlessly runs on-device across all websites and platforms without degrading performance.
              </p>
            </div>

            {/* Use cases pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {useCases.map((uc, i) => {
                const IconComp = uc.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center text-center space-y-1.5 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-200 group"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${uc.color} group-hover:scale-105 transition-transform`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-800">{uc.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-normal">
              <span className="flex items-center gap-1 text-blue-600 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" /> Zero DOM Tree modification
              </span>
              <span>Sub-300ms latency</span>
            </div>
          </div>

          {/* Right Column: Security You Can Trust */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 space-y-4 flex flex-col justify-between h-full overflow-hidden">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold uppercase tracking-wider border border-emerald-100">
                <Lock className="w-3 h-3 text-emerald-600" /> High Standards
              </div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-1.5 tracking-tight">
                Security You Can Trust <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              </h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Built with privacy and security as our top priority from day one.
              </p>
            </div>

            {/* Security Pillars Cards */}
            <div className="space-y-2.5 pt-1">
              {securityPillars.map((sp, idx) => {
                const IconComp = sp.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 ${sp.badgeColor}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-slate-900">{sp.title}</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal">{sp.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-normal">
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Production Verified
              </span>
              <span className="font-mono text-slate-400 text-[10px]">Zero-Leakage Benchmark</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
