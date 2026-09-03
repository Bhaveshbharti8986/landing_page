import React, { useState, useEffect } from 'react';
import { Download, Globe, ScanEye, ShieldCheck, RefreshCw, Sparkles, Terminal, CheckCircle2, Cpu } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      id: 0,
      step: 'Step 1',
      title: 'Download & Load',
      description: 'Download wise-extension.zip and load unpacked into Chrome, Edge, or Brave.',
      icon: Download,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      badge: 'Unpacked Mode',
    },
    {
      id: 1,
      step: 'Step 2',
      title: 'Browse Normally',
      description: 'Browse news, social media, web apps, or forms without changing your workflow.',
      icon: Globe,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      badge: 'Zero Overhead',
    },
    {
      id: 2,
      step: 'Step 3',
      title: 'AI Visual Detection',
      description: 'In-browser YOLOv8 WASM model identifies PII and UI elements in under 300ms.',
      icon: ScanEye,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      badge: 'YOLOv8 WASM',
    },
    {
      id: 3,
      step: 'Step 4',
      title: 'Instant Canvas Blur',
      description: 'Sensitive data is redacted directly on HTML5 Canvas before any network egress.',
      icon: ShieldCheck,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      badge: '12ms Redaction',
    },
    {
      id: 4,
      step: 'Step 5',
      title: 'Perception Loop',
      description: 'Continuous screen monitoring automatically protects new content dynamically.',
      icon: RefreshCw,
      color: 'text-teal-600 bg-teal-50 border-teal-200',
      badge: 'Continuous Safety',
    },
  ];

  // Auto-play through steps every 3.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  return (
    <section
      id="how-it-works"
      className="py-14 lg:py-20 bg-slate-50/70 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wider border border-blue-100 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Interactive Process Loop</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How WISE Extension Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Click any step card or watch the automated workflow below to see WISE protection in real-time.
          </p>
        </div>

        {/* Dynamic Progress Line */}
        <div className="max-w-4xl mx-auto mb-8 hidden lg:block relative">
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* 5 Animated Interactive Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch mb-8">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeStep === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setActiveStep(index);
                  setIsAutoPlaying(false);
                }}
                className={`relative text-left rounded-xl p-5 transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer select-none overflow-hidden ${
                  isActive
                    ? 'bg-white border-2 border-blue-600 shadow-lg -translate-y-1'
                    : 'bg-white/80 border border-slate-200 hover:border-blue-300 hover:bg-white opacity-85 hover:opacity-100 shadow-2xs'
                }`}
              >
                {/* Active Step Top Indicator Bar */}
                {isActive && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-blue-600" />
                )}

                <div className="space-y-3 w-full flex flex-col items-center">
                  
                  {/* Icon Badge with Dynamic CSS Animation */}
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${item.color} ${
                    isActive ? 'scale-110 shadow-2xs' : ''
                  } transition-all duration-300 shrink-0 relative`}>
                    <IconComponent className={`w-5 h-5 ${
                      isActive && index === 0 ? 'animate-bounce' : ''
                    } ${
                      isActive && index === 1 ? 'animate-spin' : ''
                    } ${
                      isActive && index === 2 ? 'animate-pulse' : ''
                    } ${
                      isActive && index === 3 ? 'animate-pulse' : ''
                    } ${
                      isActive && index === 4 ? 'animate-spin' : ''
                    }`} style={{ animationDuration: index === 1 || index === 4 ? '10s' : '2s' }} />
                  </div>

                  {/* Step Tag */}
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    isActive ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {item.step}
                  </span>

                  {/* Step Title */}
                  <h3 className={`text-xs sm:text-sm font-bold transition-colors ${
                    isActive ? 'text-blue-600' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

              </button>
            );
          })}
        </div>

        {/* Live Interactive Step Visual Showcase Window */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl text-white relative overflow-hidden">
          
          {/* Window Control Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="text-xs text-slate-400 font-mono ml-2">
                WISE Perception Engine • Step {activeStep + 1} of 5
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono bg-blue-950 text-blue-300 border border-blue-800 px-2.5 py-0.5 rounded-full font-semibold">
                {steps[activeStep].badge}
              </span>
            </div>
          </div>

          {/* Step 1 Visual Showcase */}
          {activeStep === 0 && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold border-b border-slate-800 pb-2">
                <Terminal className="w-4 h-4" />
                <span>$ chrome://extensions --load-unpacked ~/Downloads/wise-extension</span>
              </div>
              <div className="space-y-2 text-slate-300 text-[11px] bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Extension Archive Extracted: wise-extension.zip (21.29 MB)</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ONNX Runtime Web WASM Module Initialized</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>YOLOv8-Nano Vision Model Loaded into CPU/GPU Memory</span>
                </div>
                <p className="text-slate-400 pt-1 text-[10px]">WISE is active and ready to protect your browser in real-time.</p>
              </div>
            </div>
          )}

          {/* Step 2 Visual Showcase */}
          {activeStep === 1 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2 font-mono">
                <div className="flex items-center gap-1.5 text-blue-400">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Browsing https://newswebsite.com/article</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 font-semibold">
                  Zero Page Slowdown
                </span>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="h-3 w-1/3 bg-slate-800 rounded animate-pulse" />
                <div className="h-3 w-2/3 bg-slate-800 rounded animate-pulse" />
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans pt-1">
                  WISE runs quietly in the background without modifying your DOM structure or interrupting your natural scrolling flow.
                </p>
              </div>
            </div>
          )}

          {/* Step 3 Visual Showcase */}
          {activeStep === 2 && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-amber-400 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5 font-bold">
                  <Cpu className="w-4 h-4" />
                  <span>YOLOv8 WASM In-Browser Vision Detection</span>
                </div>
                <span className="text-[10px] text-amber-300 bg-amber-950 px-2 py-0.5 rounded border border-amber-800 font-semibold">
                  Latency: 284ms
                </span>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2 text-[11px]">
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded border border-amber-500/40">
                  <span className="text-slate-300">[UI_CONTROL] Password Field</span>
                  <span className="text-amber-400 font-bold">Confidence: 99.4%</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded border border-amber-500/40">
                  <span className="text-slate-300">[PII_TEXT] Email: user@domain.com</span>
                  <span className="text-amber-400 font-bold">Confidence: 98.9%</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded border border-amber-500/40">
                  <span className="text-slate-300">[FACE_DETECT] Profile Avatar</span>
                  <span className="text-amber-400 font-bold">Confidence: 97.2%</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 4 Visual Showcase */}
          {activeStep === 3 && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-purple-400 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>HTML5 Canvas Local Pixel Blur</span>
                </div>
                <span className="text-[10px] text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800 font-semibold">
                  12ms Processing
                </span>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2 text-[11px]">
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded border border-purple-500/40">
                  <span className="text-slate-400">Password:</span>
                  <span className="bg-purple-900 text-purple-200 px-3 py-0.5 rounded blur-[4px] select-none font-bold">
                    [REDACTED_SECRET]
                  </span>
                </div>
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded border border-purple-500/40">
                  <span className="text-slate-400">Credit Card:</span>
                  <span className="bg-purple-900 text-purple-200 px-3 py-0.5 rounded blur-[4px] select-none font-bold">
                    4111 **** **** 1111
                  </span>
                </div>
                <p className="text-emerald-400 text-[10px] pt-1">
                  100% Sanitized — Zero Network Egress Verified before transmission.
                </p>
              </div>
            </div>
          )}

          {/* Step 5 Visual Showcase */}
          {activeStep === 4 && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-teal-400 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5 font-bold">
                  <RefreshCw className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Perception Loop Continuous Heartbeat</span>
                </div>
                <span className="text-[10px] text-teal-300 bg-teal-950 px-2 py-0.5 rounded border border-teal-800 font-semibold">
                  Active Monitoring
                </span>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2 text-[11px]">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Frame Perception Latency:</span>
                  <span className="text-emerald-400 font-bold">2.2s Full Perception Loop</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Heap Memory Leakage:</span>
                  <span className="text-emerald-400 font-bold">0.00 MB Leakage Verified</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Safety Status:</span>
                  <span className="text-teal-400 font-bold">Continuous Automated Protection Active</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
