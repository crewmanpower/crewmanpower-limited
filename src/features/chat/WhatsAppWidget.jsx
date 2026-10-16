import React, { useState } from 'react';
import { X, Send, Phone, MessageCircle } from 'lucide-react';

export function WhatsAppIcon({ className = 'w-7 h-7' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const contacts = [
    // {
    //   id: 'director',
    //   title: 'Director Desk',
    //   name: 'Abu Khan',
    //   phone: '917310050047',
    //   displayPhone: '7310050047',
    //   role: 'Corporate Inquiries & Major Contracts',
    //   defaultMsg: 'Hello Abu Khan, I would like to inquire about workforce management and staffing for our project.',
    // },
    {
      id: 'hr',
      title: 'HR & Recruitment Desk',
      name: 'HR Mansi',
      phone: '919194150047',
      displayPhone: '+91 9194150047',
      role: 'Staffing, Placements & Candidate Sourcing',
      defaultMsg: 'Hello Mansi, I am looking for skilled manpower requirements for our organization.',
    },
    // {
    //   id: 'operations',
    //   title: 'Operations Desk',
    //   name: 'Abid Khan',
    //   phone: '919194050047',
    //   displayPhone: '9194050047',
    //   role: 'Field Deployment & Site Operations',
    //   defaultMsg: 'Hello Abid Khan, I need support regarding on-site workforce deployment.',
    // },
  ];

  const handleStartChat = (phone, prefilled) => {
    const message = customMsg.trim() || prefilled;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up WhatsApp Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chat with CrewManpower on WhatsApp"
          className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-[90vw] max-w-sm sm:w-96 flex flex-col mb-4 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
        >
          {/* WhatsApp Brand Header */}
          <div className="bg-[#075E54] text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-inner">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">CrewManpower WhatsApp</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                  <span>Online</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Welcome Message Bubble */}
          <div className="p-4 bg-[#ECE5DD] border-b border-slate-200">
            <div className="bg-white rounded-2xl rounded-tl-none p-3.5 shadow-sm text-xs text-slate-800 leading-relaxed space-y-1">
              <p className="font-semibold text-[#075E54]">Hello! 👋</p>
              <p className="text-slate-600">
                Need skilled manpower, healthcare staff, or facility solutions? Connect with our leadership team directly on WhatsApp:
              </p>
            </div>
          </div>

          {/* Contact Direct Options */}
          <div className="p-3.5 space-y-2 bg-[#F7F9FA] max-h-64 overflow-y-auto">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                type="button"
                onClick={() => handleStartChat(contact.phone, contact.defaultMsg)}
                className="w-full text-left bg-white p-3 rounded-xl border border-slate-200/80 hover:border-[#25D366] hover:shadow-md transition-all duration-200 flex items-center justify-between group"
              >
                <div className="min-w-0 pr-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#071B36] group-hover:text-[#075E54] transition-colors">
                      {contact.name}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                      {contact.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#25D366] font-semibold mt-0.5">
                    {contact.displayPhone}
                  </p>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">
                    {contact.role}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E8F8EE] text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <Send className="w-4 h-4 ml-0.5" />
                </div>
              </button>
            ))}
          </div>

          {/* Custom Message Quick Send to Director */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-slate-50 border border-slate-200 text-xs rounded-lg px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleStartChat('917310050047', customMsg);
                  }
                }}
              />
              <button
                type="button"
                onClick={() => handleStartChat('917310050047', customMsg || 'Hello, I would like to inquire about workforce solutions.')}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-2 rounded-lg transition-colors flex items-center justify-center shadow-sm"
                aria-label="Send via WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 text-center mt-2">
              Opens WhatsApp chat directly in Web or Mobile App
            </p>
          </div>
        </div>
      )}

      {/* Floating Action WhatsApp Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl hover:shadow-[0_8px_25px_rgba(37,211,102,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 active:scale-95 group relative"
        aria-label={isOpen ? 'Close WhatsApp options' : 'Chat with us on WhatsApp'}
      >
        {/* Subtle Online Pulse Ring */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></span>

        {isOpen ? (
          <X className="w-7 h-7 transition-transform group-hover:rotate-90 duration-200" />
        ) : (
          <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9" />
        )}
      </button>
    </div>
  );
}
