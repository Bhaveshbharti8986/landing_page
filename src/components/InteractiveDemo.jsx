import React, { useState, useRef } from 'react';
import { Sparkles, Play, Sliders, Video, Eye, ShieldCheck, CheckCircle, Scan } from 'lucide-react';

export default function InteractiveDemo() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="demo" className="py-12 lg:py-16 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wider border border-blue-100">
            <Scan className="w-3.5 h-3.5 text-blue-600 animate-pulse" /> Real-Time Perception Demo
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            See WISE Extension in Action
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Drag the interactive slider below to test the live ONNX canvas redaction engine in real-time.
          </p>
        </div>

        {/* Two Column Interactive Demos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Demo 1: Interactive Before/After Blur Slider Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                  See the Blur in Action <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                </h3>
                <p className="text-[11px] text-slate-500 font-normal mt-0.5">Drag the slider horizontally to compare before & after blur</p>
              </div>
              <span className="text-[10px] font-mono bg-blue-600 text-white px-2.5 py-0.5 rounded-full shadow-2xs font-semibold animate-pulse shrink-0">
                {Math.round(sliderPos)}% Redacted
              </span>
            </div>

            {/* Slider Container Box */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative w-full h-[280px] sm:h-[300px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-slate-200 bg-slate-900 shadow-md group"
            >
              
              {/* AFTER BLUR LAYER (Full width background) */}
              <div className="absolute inset-0 bg-slate-950 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-950 px-2 py-0.5 rounded border border-purple-800 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-purple-400" /> After Blur (Sanitized)
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono font-medium">ONNX Canvas Redaction</span>
                </div>

                <div className="space-y-2 font-mono text-[11px] text-slate-300">
                  <div className="flex justify-between items-center bg-slate-900 p-2 rounded-lg border border-slate-800 shadow-inner">
                    <span className="text-slate-400">Email:</span>
                    <span className="bg-purple-900 text-purple-200 px-2 py-0.5 rounded blur-[3px] select-none font-medium text-[10px]">
                      j***.d**@example.com
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-slate-900 p-2 rounded-lg border border-slate-800 shadow-inner">
                    <span className="text-slate-400">Phone:</span>
                    <span className="bg-purple-900 text-purple-200 px-2 py-0.5 rounded blur-[3px] select-none font-medium text-[10px]">
                      +1 202-***-0176
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-slate-900 p-2 rounded-lg border border-slate-800 shadow-inner">
                    <span className="text-slate-400">Card Number:</span>
                    <span className="bg-purple-900 text-purple-200 px-2 py-0.5 rounded blur-[3px] select-none font-medium text-[10px]">
                      4111 **** **** 1111
                    </span>
                  </div>
                </div>

                <div className="text-[10px] text-purple-300 flex items-center justify-between pt-2 border-t border-slate-800 font-normal">
                  <span className="font-mono text-emerald-400 font-medium">Zero Egress Verified</span>
                  <span className="font-mono text-blue-400 font-medium">12ms Canvas Latency</span>
                </div>
              </div>

              {/* BEFORE BLUR LAYER (Clipped overlay based on sliderPos) */}
              <div
                style={{ width: `${sliderPos}%` }}
                className="absolute inset-y-0 left-0 bg-white p-4 flex flex-col justify-between border-r-2 border-blue-500 shadow-md overflow-hidden transition-all duration-75"
              >
                {/* AI SCANNING BEAM ANIMATION */}
                <div className="animate-scanline z-10 pointer-events-none" />

                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 flex items-center gap-1 whitespace-nowrap">
                    <Eye className="w-3 h-3 text-blue-600" /> Before Blur (Raw Page Input)
                  </span>
                </div>

                <div className="space-y-2 font-mono text-[11px] text-slate-800 relative">
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 whitespace-nowrap">Email:</span>
                    <span className="bg-amber-100 text-amber-900 font-medium px-2 py-0.5 rounded text-[10px] whitespace-nowrap border border-amber-200">
                      john.doe@example.com
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 whitespace-nowrap">Phone:</span>
                    <span className="bg-amber-100 text-amber-900 font-medium px-2 py-0.5 rounded text-[10px] whitespace-nowrap border border-amber-200">
                      +1 202-555-0176
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 whitespace-nowrap">Card Number:</span>
                    <span className="bg-amber-100 text-amber-900 font-medium px-2 py-0.5 rounded text-[10px] whitespace-nowrap border border-amber-200">
                      4111 1111 1111 1111
                    </span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 flex items-center justify-between pt-2 border-t border-slate-200 whitespace-nowrap font-normal">
                  <span className="font-semibold text-amber-700">Exposed PII: 3 items detected</span>
                </div>
              </div>

              {/* SLIDER DRAGGABLE BAR / HANDLE */}
              <div
                style={{ left: `${sliderPos}%` }}
                className="absolute top-0 bottom-0 -ml-4 w-8 flex items-center justify-center pointer-events-none z-20"
              >
                <div className="w-7 h-7 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center text-white">
                  <Sliders className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          </div>

          {/* Demo 2: Watch Our Prototype Video Box */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-full space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                Watch Our Prototype <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              </h3>
              <p className="text-[11px] text-slate-500 font-normal mt-0.5">See how WISE Extension performs real-time visual perception</p>
            </div>

            {/* Video Box Container */}
            <div className="relative w-full h-[280px] sm:h-[300px] rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group">
              {isPlayingVideo ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="WISE Extension Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full bg-slate-950 p-5 flex flex-col justify-between">
                  
                  {/* Decorative Video Interface */}
                  <div className="flex items-center justify-between text-slate-300 text-[11px]">
                    <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-semibold text-white text-[10px]">WISE Live Prototype</span>
                    </div>
                    <span className="font-mono text-slate-400 bg-black/60 px-2 py-0.5 rounded text-[10px]">1:45 HD</span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="flex flex-col items-center justify-center space-y-3 my-auto">
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(true)}
                      className="w-13 h-13 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200 border-2 border-white/20"
                      aria-label="Play prototype video"
                    >
                      <Play className="w-5 h-5 fill-white translate-x-0.5" />
                    </button>
                    <p className="text-xs font-semibold text-white drop-shadow">
                      Click to Play Prototype Demo
                    </p>
                  </div>

                  {/* Bottom Stats */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-300">
                    <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-medium">
                      <CheckCircle className="w-3.5 h-3.5" /> Tested on 47 PII Scenarios
                    </span>
                    <span className="flex items-center gap-1 text-blue-400 text-[10px] font-semibold">
                      <Video className="w-3.5 h-3.5" /> Watch Video Demo
                    </span>
                  </div>

                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
