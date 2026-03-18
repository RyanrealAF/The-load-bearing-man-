import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { folkDevil, unseenWar, carriedWeight } from '../data/content';

interface StoryViewProps {
  onTermClick: (id: string) => void;
}

const KEYWORD_MAP: { [key: string]: string } = {
    "load-bearing man": "load-bearing-individual",
    "villain": "folk-devil",
    "not random": "asymmetry-of-intent",
    "reorganized around his presence": "humint-network",
    "micro-adjustment at the farmers market": "c2-by-insinuation",
    "testimony": "breadcrumb-web",
    "story they're selling themselves": "narrative-sovereignty"
};

const CHAPTER_COLORS = [
  '#0a0a0a',
  '#1a1a1a',
  '#2a2a2a',
  '#3a3a3a',
  '#4a4a4a',
];

export const StoryView: React.FC<StoryViewProps> = ({ onTermClick }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = storyRef.current?.querySelectorAll('section');
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const chapterIndex = parseInt(entry.target.getAttribute('data-chapter-index') || '0');
            setActiveChapter(chapterIndex);
          }
        });
      },
      { threshold: 0.5 } 
    );

    sections.forEach((section, index) => {
      section.setAttribute('data-chapter-index', index.toString());
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const generateHyperlinks = (text: string) => {
    let processedText = text;
    Object.entries(KEYWORD_MAP).forEach(([keyword, nodeId]) => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      processedText = processedText.replace(regex, (match) => {
        return `<span class="node-trigger text-[#D4AF37] border-b border-dashed border-[#D4AF37] cursor-help" data-node-id="${nodeId}">${match}</span>`;
      });
    });
    return processedText;
  };

  const renderDocIndex = () => {
    return (
      <section id="document-index" aria-label="Referenced Documents">
        <h2 className="text-2xl font-serif italic text-[#D4AF37] mb-4">Referenced Documents</h2>
        <ol className="space-y-4">
          {unseenWar.map((doc) => {
            return (
              <li id={doc.section} key={doc.section} className="border-t border-white/10 pt-4">
                <strong className="font-mono text-white/80">{doc.section}</strong>
                <p className="text-sm text-white/60 mt-1">{doc.content}</p>
              </li>
            );
          })}
        </ol>
      </section>
    );
  };

  const storyText = carriedWeight.map(p => p.content).join('\n\n');

  return (
    <div 
      className="max-w-3xl mx-auto py-20 px-6 transition-colors duration-1000"
      style={{ backgroundColor: CHAPTER_COLORS[activeChapter] }}
    >
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono mb-4 block">Narrative Process Analysis</span>
        <h1 className="text-5xl md:text-7xl font-serif italic mb-6 leading-[0.9]">
          The Load-Bearing Man
        </h1>
        <p className="text-white/50 font-mono text-xs uppercase tracking-widest">A Story of Social Infrastructure</p>
      </motion.header>

      <div
        ref={storyRef}
        className="space-y-12 text-xl md:text-2xl leading-relaxed text-white/80 font-serif prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: generateHyperlinks(storyText) }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.classList.contains('node-trigger')) {
            const nodeId = target.getAttribute('data-node-id');
            if (nodeId) {
              onTermClick(nodeId);
            }
          }
        }}
      />

      <footer className="mt-32 pt-12 border-t border-white/10">
        {renderDocIndex()}
        <p className="text-white/30 font-mono text-[10px] uppercase tracking-widest mt-12">
          End of Narrative • Click highlighted terms for forensic breakdown
        </p>
      </footer>
    </div>
  );
};
