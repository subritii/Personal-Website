'use client';

import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { useState } from 'react';
import { projects, ProjectFolder } from '../data/projects';

const splitMetric = (metric: string) => {
  const match = metric.match(/\$?[\d.]+%?/);
  if (!match) return { value: metric, label: '' };
  return { value: match[0], label: metric.replace(match[0], '').trim() };
};

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

  const activeProject = activeFile
    ? (Object.keys(projects) as ProjectFolder[])
        .map((folder) => projects[folder][activeFile])
        .find((entry) => entry !== undefined)
    : null;

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
                <div
                  className="flex items-center gap-1 font-bold text-white mb-2 cursor-pointer hover:text-accent-teal"
                  onClick={() => setActiveFile(null)}
                >
                  <span>▼</span> <span>case studies</span>
                </div>
                
                {/* Sub-folders */}
                {(['AI_ML', 'Full_Stack', 'Devops', 'Azure_Cloud'] as ProjectFolder[]).map((folder) => {
                  const files = Object.keys(projects[folder]);
                  return (
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
                        <div className="pl-6 py-1">
                          {files.length === 0 ? (
                            <div className="text-xs text-gray-600 italic">(empty)</div>
                          ) : (
                            files.map((fileName) => (
                              <div
                                key={fileName}
                                onClick={() => setActiveFile(fileName)}
                                className={`flex items-center gap-2 py-1 cursor-pointer text-xs rounded ${
                                  activeFile === fileName ? 'text-white bg-[#37373D]' : 'text-gray-400 hover:text-white'
                                }`}
                              >
                                <span>📄</span> <span>{fileName}.md</span>
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Central Workspace: The Editor */}
            <div className="bg-[#1E1E1E] text-gray-300 flex flex-col">
              {activeProject && (
                <div className="flex items-center border-b border-[#333] bg-[#252526]">
                  <div className="flex items-center gap-2 pl-4 pr-2 py-2 text-xs bg-[#1E1E1E] border-r border-[#333]">
                    <span>📄</span>
                    <span>{activeFile}.md</span>
                    <button
                      onClick={() => setActiveFile(null)}
                      aria-label="Close file"
                      className="ml-1 w-4 h-4 flex items-center justify-center rounded text-gray-500 hover:text-white hover:bg-[#3C3C3C]"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
              {activeProject ? (
                <div className="w-full flex-1 p-6 overflow-y-auto text-xs leading-relaxed whitespace-pre-wrap">
                  <div className="text-green-400 text-base md:text-lg font-bold">/** {activeProject.title} */</div>

                  <div className="mt-12 md:mt-14 text-gray-500">// why this exists</div>
                  <div className="text-gray-300">{activeProject.whyItExists}</div>

                  {activeProject.architecture ? (
                    <>
                      <div className="mt-12 md:mt-14 text-gray-500">// architecture</div>
                      <div className="text-gray-300">{activeProject.architecture}</div>

                      <div className="mt-6 relative w-full pt-[56.25%] bg-black rounded-md overflow-hidden isolate">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src="https://www.youtube.com/embed/97RfQV_9cpY"
                          title={`${activeProject.title} demo`}
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>

                      {activeProject.agents && activeProject.agents.length > 0 && (
                        <>
                          <div className="mt-12 md:mt-14 text-gray-500">// agent breakdown</div>
                          <div className="mt-4 divide-y divide-white/10">
                            {activeProject.agents.map((agent, i) => (
                              <div key={i} className={`py-6 ${i === 0 ? 'pt-0' : ''}`}>
                                <div className="font-sans font-bold text-white text-sm">{agent.name}</div>
                                <div className="mt-1.5 inline-block font-mono text-[11px] text-gray-400 bg-[#2A2A2A] border border-[#3C3C3C] rounded px-2 py-0.5">
                                  Trigger: {agent.trigger}
                                </div>
                                <div className="text-gray-300 mt-2">{agent.description}</div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {activeProject.eventContract && activeProject.eventContract.length > 0 && (
                        <>
                          <div className="mt-12 md:mt-14 text-gray-500">// event contract</div>
                          <div className="mt-4 max-w-[560px] rounded-md overflow-hidden border border-[#333]">
                            {activeProject.eventContract.map((row, i) => (
                              <div
                                key={i}
                                className={`grid grid-cols-[minmax(220px,auto)_1fr] gap-x-6 px-3 py-2 border-b border-[#2E2E2E] last:border-b-0 ${
                                  i % 2 === 0 ? 'bg-[#242424]' : 'bg-[#1E1E1E]'
                                }`}
                              >
                                <span className="text-gray-300">{row.event}</span>
                                <span className="text-gray-400">{row.consumer}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {activeProject.decisionDeepDive && (
                        <>
                          <div className="mt-12 md:mt-14 text-gray-500">// one decision, in depth</div>
                          <div className="text-gray-300">{activeProject.decisionDeepDive}</div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="mt-6 relative w-full pt-[56.25%] bg-black rounded-md overflow-hidden isolate">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src="https://www.youtube.com/embed/97RfQV_9cpY"
                          title={`${activeProject.title} demo`}
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>

                      <div className="mt-12 md:mt-14 text-gray-500">// key engineering decisions</div>
                      {activeProject.decisions.map((decision, i) => (
                        <div key={i} className="text-gray-300">— {decision}</div>
                      ))}
                    </>
                  )}
                </div>
              ) : (
                <div className="w-full h-full p-6 md:p-8 overflow-y-auto">
                  <div className="font-mono text-[28px] md:text-[32px] font-bold text-accent-teal">
                    // case_studies
                  </div>

                  <div className="mt-8 md:mt-10 max-w-[700px] border-l-2 border-accent-teal pl-4 font-sans text-[16px] md:text-[17px] leading-relaxed text-gray-300">
                    Each project here started as a system I didn&apos;t fully understand. I studied the architecture first, took notes on the tradeoffs, then built it from that understanding. Not tutorials followed, not templates cloned.
                  </div>

                  <div className="mt-8 md:mt-10">
                    <div className="font-mono text-[11px] uppercase tracking-[1px] text-gray-500">
                      // how to read these
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-[#2A2A2A] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-accent-teal font-bold text-base">→</span>
                          <span className="font-sans font-semibold text-gray-100 text-sm">Editor (left)</span>
                        </div>
                        <div className="font-sans text-gray-400 text-sm leading-relaxed">
                          why it exists, what I learned, the decisions and why
                        </div>
                      </div>
                      <div className="bg-[#2A2A2A] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-accent-teal font-bold text-base">→</span>
                          <span className="font-sans font-semibold text-gray-100 text-sm">Properties (right)</span>
                        </div>
                        <div className="font-sans text-gray-400 text-sm leading-relaxed">
                          stack, status, and outcomes at a glance
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: The Inspector */}
            <div className="bg-[#252526] border-l border-[#333] p-6 text-gray-300 hidden lg:block">
              <div className="text-[10px] font-bold text-gray-500 mb-6 tracking-widest">PROPERTIES</div>
              {activeProject ? (
                <div className="text-xs space-y-4">
                  <div>
                    <div className="text-gray-500 mb-1">STATUS</div>
                    <div className="text-white flex items-center gap-2">
                      <span className={activeProject.status.toLowerCase().includes('actively maintained') ? 'text-green-500' : 'text-cyan-400'}>
                        {activeProject.status.toLowerCase().includes('actively maintained') ? '●' : '○'}
                      </span>
                      {activeProject.status}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">REPOSITORY</div>
                    <a
                      href={`https://${activeProject.repoUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4EC9B0] break-all hover:underline"
                    >
                      {activeProject.repoUrl} ↗
                    </a>
                  </div>
                  {activeProject.demoUrl && (
                    <div>
                      <div className="text-gray-500 mb-1">LIVE</div>
                      <a
                        href={`https://${activeProject.demoUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4EC9B0] break-all hover:underline"
                      >
                        {activeProject.demoUrl} ↗
                      </a>
                    </div>
                  )}
                  <div>
                    <div className="text-gray-500 mb-1">STACK</div>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-[#3C3C3C] text-gray-200 text-[11px] rounded-full border border-[#4A4A4A]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {activeProject.metrics.length > 0 && (
                    <div>
                      <div className="text-gray-500 mb-2">METRICS</div>
                      <div className="grid grid-cols-1 gap-3">
                        {activeProject.metrics.map((metric, i) => {
                          const { value, label } = splitMetric(metric);
                          return (
                            <div key={i} className="bg-[#2D2D2D] border border-[#3C3C3C] rounded-lg p-3">
                              <div className="text-2xl font-bold text-[#4EC9B0]">{value}</div>
                              {label && <div className="text-[11px] text-gray-400 mt-0.5">{label}</div>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="text-[11px] uppercase tracking-[1px] text-gray-500 mb-2">APPROACH</div>
                  <div className="font-sans text-[15px] md:text-[16px] font-semibold text-white leading-snug">
                    Architecture first, then build.
                  </div>
                  <div className="font-sans text-[15px] md:text-[16px] font-semibold text-white leading-snug mt-1">
                    Notes before code.
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
      
      <Contact />
    </main>
  );
};

export default TechnicalPortfolio;