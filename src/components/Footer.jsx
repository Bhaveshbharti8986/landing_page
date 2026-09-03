import React from 'react';
import { ShieldCheck, FolderArchive } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-10 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Logo & Full Form */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-2xs">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 leading-tight">
                WISE <span className="text-blue-600 font-semibold text-xs">AI</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Web Intelligence Security Extension</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <span className="text-slate-300">•</span>
            <a href="#what-is-webshield" className="hover:text-blue-600 transition-colors">Features</a>
            <span className="text-slate-300">•</span>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
            <span className="text-slate-300">•</span>
            <a href="#installation" className="hover:text-blue-600 transition-colors">Installation</a>
            <span className="text-slate-300">•</span>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </div>

          {/* ZIP Download Button & GitHub Link */}
          <div className="flex items-center gap-3 text-slate-500">
            <a
              href="/wise-extension.zip"
              download="wise-extension.zip"
              className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold shadow-2xs"
              aria-label="Download WISE Zip"
            >
              <FolderArchive className="w-4 h-4 text-blue-600" />
              <span>Download WISE Zip (21MB)</span>
            </a>

            <a
              href="https://github.com/Bhaveshbharti8986/yolo_ui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
              aria-label="GitHub Repository"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-normal">
          <p>© 2026 WISE Extension (Web Intelligence Security Extension). All rights reserved.</p>
          <p>On-Device Visual Perception & PII Redaction Browser Agent</p>
        </div>

      </div>
    </footer>
  );
}
