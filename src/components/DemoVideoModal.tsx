import React from 'react';
import { videoDemosData } from '../data/companyData';
import { X, Play, ShieldCheck, Sparkles } from 'lucide-react';

interface DemoVideoModalProps {
  demoId: string | null;
  onClose: () => void;
}

export const DemoVideoModal: React.FC<DemoVideoModalProps> = ({ demoId, onClose }) => {
  if (!demoId) return null;

  const demo = videoDemosData.find(d => d.id === demoId) || videoDemosData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 font-mono font-bold text-xs uppercase border border-indigo-100">
              {demo.category.toUpperCase()} VIDEO
            </span>
            <h3 className="text-base font-bold text-slate-900 truncate">{demo.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            src={demo.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>

        {/* Footer info */}
        <div className="p-6 bg-slate-50 space-y-2 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900">{demo.title}</h4>
            <span className="text-xs font-mono text-slate-500">Duration: {demo.duration}</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">{demo.description}</p>
        </div>

      </div>
    </div>
  );
};
