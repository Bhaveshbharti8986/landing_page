import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does WISE Extension achieve 100% on-device visual perception?',
      answer:
        'WISE (Web Intelligence Security Extension) incorporates ONNX Runtime Web compiled to WebAssembly (WASM) with a specialized YOLOv8-nano UI vision model. Screenshot frames captured in memory are processed directly on your computer’s CPU/GPU, eliminating cloud vision API round-trips.',
    },
    {
      question: 'What sensitive data (PII) does WISE Extension detect and redact?',
      answer:
        'WISE Extension identifies passwords, email addresses, phone numbers, faces, credit card numbers, and physical addresses. It applies local HTML5 Canvas mosaic blurring and blackouts in under 12ms before data leaves your browser.',
    },
    {
      question: 'Is WISE Extension compatible with both Windows and macOS?',
      answer:
        'Yes! WISE Extension is fully compatible with Windows 10/11 and macOS (Intel & Apple Silicon M1/M2/M3/M4). It runs inside Chromium browsers like Google Chrome, Microsoft Edge, and Brave.',
    },
    {
      question: 'How do I download and install the extension zip on Windows or Mac?',
      answer:
        'Click the Download WISE Zip button (21MB), extract the zip archive on your computer, navigate to chrome://extensions in your browser, turn on Developer Mode in the top-right corner, and click "Load unpacked" to select the extracted folder.',
    },
    {
      question: 'Does WISE Extension store or monetize my personal browsing data?',
      answer:
        'Never. WISE Extension operates on a strict zero-data collection policy. Your raw visual screenshots and page context are held in transient memory only during active detection.',
    },
    {
      question: 'Can WISE Extension work alongside Cloud VLMs (e.g. Groq VLM)?',
      answer:
        'Yes! When integrated with cloud reasoning APIs, WISE Extension strips all PII first and transmits only 100% sanitized pixel context over HTTPS.',
    },
  ];

  return (
    <section id="faq" className="py-12 lg:py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wider border border-blue-100">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" /> Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            Got Questions? We Have Answers <Sparkles className="w-5 h-5 text-blue-600 animate-spin" style={{ animationDuration: '8s' }} />
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Everything you need to know about WISE Extension's privacy, performance, and installation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl bg-slate-50/50 overflow-hidden transition-colors hover:border-blue-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-100/60 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 pr-3 tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-white font-normal animate-fade-in-up">
                    {faq.answer}
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
