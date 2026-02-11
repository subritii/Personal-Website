'use client';

import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { useState } from 'react';

const TechnicalPortfolio = () => {
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    'AI_ML': false,
    'Full_Stack': false,
    'Devops': false,
    'Azure_Cloud': false
  });

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev[folder]
    }));
  };

  // Ready for new inputs
  const projects: Record<string, any> = {};

  return (
    <main className="min-h-screen bg-[#F2F0E9] text-[#1A1A1A] font-sans relative overflow-x-hidden">
      <Navbar />

      <div className="w-full px-4 sm:px-8 lg:px-12 pt-32 pb-20 relative z-10">
        
        {/* Title */}
        <div className="relative mb-12 text-center">
          <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#D1D5DB] -z-10"></span>
          <h1 className="font-mono text-[10px] text-[#64748B] tracking-[0.3em] bg-[#F2F0E9] px-4 inline-block border border-[#D1D5DB]">
             [ 02 / TECHNICAL_PORTFOLIO ]
          </h1>
        </div>

        <div className="max-w-[1400px] mx-auto bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden font-mono text-sm">
          
          {/* Window Chrome */}
          <div className="bg-[#1E1E1E] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <div className="text-gray-400 text-xs">subriti@portfolio: ~/projects</div>
            <div className="w-16"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr_280px] min-h-[600px]">
            
            {/* Left Sidebar: The Explorer */}
            <div className="bg-[#252526] text-gray-300 border-r border-[#333] p-4 hidden md:block select-none">
              <div className="text-[10px] font-bold text-gray-500 mb-4 tracking-widest">EXPLORER</div>
              <div className="pl-2 space-y-1">
                <div className="flex items-center gap-1 font-bold text-white mb-2">
                  <span>▼</span> <span>projects</span>
                </div>
                
                {/* Sub-folders */}
                {['AI_ML', 'Full_Stack', 'Devops', 'Azure_Cloud'].map((folder) => (
                  <div key={folder} className="pl-2">
                    <div 
                      className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer py-1"
                      onClick={() => toggleFolder(folder)}
                    >
                      <span className="text-[10px] w-3">{expandedFolders[folder] ? '▼' : '▶'}</span>
                      <span>📁</span> 
                      <span>{folder}</span>
                    </div>
                    {/* Collapsible Content Area */}
                    {expandedFolders[folder] && (
                      <div className="pl-6 py-1 text-xs text-gray-600 italic">
                        (empty)
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Central Workspace: The Editor */}
            <div className="bg-[#1E1E1E] text-gray-300 flex flex-col items-center justify-center">
               <div className="text-center opacity-20">
                  <div className="text-6xl mb-4">⌨️</div>
                  <div className="text-xl">Select a file to view source code</div>
               </div>
            </div>

            {/* Right Sidebar: The Inspector */}
            <div className="bg-[#252526] border-l border-[#333] p-6 text-gray-300 hidden lg:block opacity-30 pointer-events-none">
              <div className="text-[10px] font-bold text-gray-500 mb-6 tracking-widest">PROPERTIES</div>
              <div className="text-xs italic">Waiting for input...</div>
            </div>

          </div>
        </div>

      </div>
      
      <Contact />
    </main>
  );
};

export default TechnicalPortfolio;