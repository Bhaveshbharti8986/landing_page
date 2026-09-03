import React, { useState } from 'react';
import { Monitor, Apple, CheckCircle2, Download, Copy, Check, FolderArchive } from 'lucide-react';

export default function InstallationGuide() {
  const [activeOS, setActiveOS] = useState('windows');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const windowsSteps = [
    {
      title: 'Step 1: Download WISE Extension Zip File',
      description: 'Click the Download button to save wise-extension.zip onto your Windows PC.',
      code: 'https://landingpage.webshield.ai/wise-extension.zip',
    },
    {
      title: 'Step 2: Unzip the Package & Open Chrome Extensions',
      description: 'Extract the zip archive, open Chrome/Edge/Brave, and navigate to chrome://extensions.',
      code: 'chrome://extensions',
    },
    {
      title: 'Step 3: Enable Developer Mode',
      description: 'In the top-right corner of the Extensions page, toggle "Developer mode" switch to ON.',
    },
    {
      title: 'Step 4: Load Unpacked Extension',
      description: 'Click "Load unpacked" button, then select the unzipped extension folder directory.',
    },
    {
      title: 'Step 5: Pin & Activate WISE Extension',
      description: 'Click the puzzle icon on your browser toolbar and pin WISE for instant protection.',
    },
  ];

  const macSteps = [
    {
      title: 'Step 1: Download WISE Extension Archive on macOS',
      description: 'Download the wise-extension.zip file and double-click to unzip in Finder.',
      code: 'unzip wise-extension.zip -d ~/Downloads/wise-extension',
    },
    {
      title: 'Step 2: Navigate to Browser Extensions',
      description: 'Launch Chrome or Brave on macOS and type the extensions address into your URL bar.',
      code: 'chrome://extensions',
    },
    {
      title: 'Step 3: Toggle macOS Developer Mode',
      description: 'Turn on the "Developer mode" toggle switch located in the upper-right corner.',
    },
    {
      title: 'Step 4: Select Unpacked Extension Directory',
      description: 'Click "Load unpacked", press Command + Shift + G in Finder, and select the unzipped extension folder.',
    },
    {
      title: 'Step 5: Verify ONNX Web WASM Acceleration',
      description: 'WISE Extension will automatically initialize WebAssembly for on-device visual AI processing.',
    },
  ];

  const currentSteps = activeOS === 'windows' ? windowsSteps : macSteps;

  return (
    <section id="installation" className="py-12 lg:py-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-[11px] font-semibold uppercase tracking-wider">
            <Download className="w-3.5 h-3.5" /> Easy Setup Guide
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Installation Process for Windows & macOS
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            Follow the step-by-step guide below to install WISE Extension on your preferred operating system.
          </p>
        </div>

        {/* OS Switcher Tabs - Solid Blue Active State */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800 p-1 rounded-xl border border-slate-700 inline-flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveOS('windows')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 ${
                activeOS === 'windows'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Windows Installation</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveOS('mac')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 ${
                activeOS === 'mac'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Apple className="w-4 h-4" />
              <span>macOS Installation</span>
            </button>
          </div>
        </div>

        {/* Installation Steps Container */}
        <div className="max-w-3xl mx-auto bg-slate-800/80 border border-slate-700 rounded-2xl p-5 sm:p-7 shadow-xl space-y-5 animate-fade-in-up">
          
          <div className="flex items-center justify-between border-b border-slate-700 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold">
                {activeOS === 'windows' ? <Monitor className="w-4 h-4" /> : <Apple className="w-4 h-4" />}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {activeOS === 'windows' ? 'Windows OS Guide' : 'macOS Guide'}
                </h3>
                <p className="text-[10px] text-slate-400 font-normal">Compatible with Google Chrome, Microsoft Edge, Brave & Opera</p>
              </div>
            </div>
            <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-bold">
              Unpacked Mode
            </span>
          </div>

          {/* Steps Timeline */}
          <div className="space-y-3.5">
            {currentSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-600 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {idx + 1}
                </div>
                <div className="flex-1 space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-blue-300 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {step.code && (
                    <div className="relative mt-1 bg-slate-900 border border-slate-800 rounded-lg p-2 font-mono text-[10px] text-emerald-400 flex items-center justify-between group/code">
                      <span className="overflow-x-auto pr-6">{step.code}</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(step.code, idx)}
                        className="p-1 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Action Download Footer */}
          <div className="pt-4 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-normal">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Includes ONNX WASM + YOLOv8 Engine</span>
            </div>
            <a
              href="/wise-extension.zip"
              download="wise-extension.zip"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-2xs transition-all hover:scale-105"
            >
              <FolderArchive className="w-3.5 h-3.5" />
              <span>Download WISE Zip (21MB)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
