import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, BookOpen, Shield, Users, Eye, FileText, AlertTriangle } from 'lucide-react';
import { ANALYSIS_TERMS } from '../data/content';
import { AnalysisTerm } from '../types';

interface AnalysisPanelProps {
  termId: string | null;
  onClose: () => void;
}

const getIcon = (id: string) => {
  switch (id) {
    case 'folk-devil': return <AlertTriangle className="w-5 h-5" />;
    case 'social-infrastructure': return <Users className="w-5 h-5" />;
    case 'consensus-technology': return <BookOpen className="w-5 h-5" />;
    case 'negative-solidarity': return <Shield className="w-5 h-5" />;
    case 'atmospheric-intelligence': return <Eye className="w-5 h-5" />;
    case 'alt-text': return <FileText className="w-5 h-5" />;
    default: return <Info className="w-5 h-5" />;
  }
};

export const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ termId, onClose }) => {
  const term = termId ? ANALYSIS_TERMS[termId] : null;

  return (
    <AnimatePresence>
      {term && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 w-full md:w-[450px] h-full bg-[#0D0D0D] text-[#E4E3E0] z-50 shadow-2xl border-l border-[#1A1A1A] overflow-y-auto"
        >
          <div className="p-0">
            {/* Header Section */}
            <div className="p-8 border-b border-[#1A1A1A] bg-[#111]">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3 text-[#F27D26]">
                  {getIcon(term.id)}
                  <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold">Forensic Data Point</span>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <h2 className="text-4xl font-serif italic mb-6 leading-tight">
                {term.title}
              </h2>
              <div className="flex gap-4">
                <div className={`px-2 py-1 border rounded text-[9px] font-mono uppercase tracking-wider ${
                  term.operationalRisk === 'Critical' ? 'bg-red-500/10 border-red-500/30 text-red-500' :
                  term.operationalRisk === 'High' ? 'bg-orange-500/10 border-orange-500/30 text-orange-500' :
                  'bg-blue-500/10 border-blue-500/30 text-blue-500'
                }`}>
                  Risk: {term.operationalRisk}
                </div>
                <div className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-white/40 uppercase tracking-wider">
                  ID: {term.id}
                </div>
              </div>
            </div>

            {/* Data Grid Section */}
            <div className="grid grid-cols-1 border-b border-[#1A1A1A]">
              <div className="p-8 border-b border-[#1A1A1A]">
                <h3 className="text-[10px] uppercase tracking-widest text-white/30 mb-3 font-mono">Abstract Definition</h3>
                <p className="text-lg leading-relaxed text-white/90">
                  {term.definition}
                </p>
              </div>
              
              <div className="grid grid-cols-2 bg-[#080808]">
                <div className="p-6 border-r border-[#1A1A1A]">
                  <h3 className="text-[10px] uppercase tracking-widest text-[#F27D26]/50 mb-3 font-mono">Structural Function</h3>
                  <p className="text-xs leading-relaxed text-white/80 font-mono uppercase tracking-tight">
                    {term.structuralFunction}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-[10px] uppercase tracking-widest text-[#F27D26]/50 mb-3 font-mono">Forensic Signature</h3>
                  <p className="text-xs leading-relaxed text-white/80 font-mono">
                    {term.forensicSignature}
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Components Section */}
            <div className="p-8 bg-[#0A0A0A]">
              <h3 className="text-[10px] uppercase tracking-widest text-white/30 mb-6 font-mono">Granular Components</h3>
              <div className="space-y-6">
                {term.details.map((detail, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="text-[10px] font-mono text-[#F27D26] opacity-40 group-hover:opacity-100 transition-opacity">
                      0{idx + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-white/70 border-l border-white/5 pl-4 group-hover:border-[#F27D26]/30 transition-colors">
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {term.source && (
              <div className="p-8 border-t border-[#1A1A1A] bg-[#111]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3 h-3 text-white/20" />
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                    Reference: {term.source}
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
