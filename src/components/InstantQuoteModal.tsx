import React, { useState } from 'react';
import { servicesData, companyDetails } from '../data/companyData';
import { X, Calculator, Check, MessageSquare, Sparkles, Send } from 'lucide-react';

interface InstantQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const InstantQuoteModal: React.FC<InstantQuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    initialServiceId ? [initialServiceId] : ['dynamic-website', 'seo-package']
  );

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setSelectedIds((prev) => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedServices = servicesData.filter(s => selectedIds.includes(s.id));
  const totalCost = selectedServices.reduce((sum, s) => sum + s.numericPrice, 0);

  const handleSendQuote = () => {
    const serviceTitles = selectedServices.map(s => `${s.title} (${s.price})`).join(', ');
    const text = encodeURIComponent(
      `Hi Everto Marketing!\nI calculated a package on your website:\n\nServices Selected:\n- ${serviceTitles}\n\nTotal Estimated Price: ₹${totalCost.toLocaleString('en-IN')}\n\nPlease contact me with a formal proposal!`
    );
    window.open(`https://wa.me/919835120266?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-100">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Instant Service Cost Calculator (₹ INR)</h3>
              <p className="text-xs text-slate-500">Select services to generate instant estimated total</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Services Selection Grid */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {servicesData.map((service) => {
              const isSelected = selectedIds.includes(service.id);
              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-indigo-50/70 border-indigo-500 text-slate-900 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-xs font-bold font-mono text-indigo-600">{service.price}</div>
                    <div className="text-sm font-semibold text-slate-900">{service.title}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-1">{service.description}</div>
                  </div>

                  <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300 bg-slate-50'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer with Live Summary */}
        <div className="px-6 py-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500 block font-mono">Estimated Total ({selectedServices.length} Services):</span>
            <div className="text-3xl font-extrabold text-indigo-600 font-mono">
              ₹{totalCost.toLocaleString('en-IN')}
            </div>
          </div>

          <button
            onClick={handleSendQuote}
            disabled={selectedServices.length === 0}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Estimate via WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
