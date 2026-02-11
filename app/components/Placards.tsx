import Link from 'next/link';
import { ReactNode } from 'react';

interface ExtendedSpec {
  company: string;
  project: string;
  desc: string;
}

interface PlacardItem {
  id: string;
  label: string;
  title: string;
  body: string | ReactNode;
  tech?: string[];
  isDensityMap?: boolean;
  isLink?: boolean;
  extendedSpecs?: ExtendedSpec[];
}

const Placards = () => {
  const placardData: PlacardItem[] = [
    {
      id: '01',
      label: 'TECHNICAL_PROFILE',
      title: 'FULL-STACK ENGINEER',
      body: (
        <div className="space-y-4">
          <div className="border-l-2 border-[#0D7A70]/20 pl-4">
            <span className="font-mono text-[10px] text-[#64748B] uppercase block">Education</span>
            <p className="font-lora italic text-[14px] text-[#4A4A4A]">CS Senior, Class of 2026 — USF Tampa</p>
          </div>
          <div className="border-l-2 border-[#0D7A70]/20 pl-4">
            <span className="font-mono text-[10px] text-[#64748B] uppercase block">Professional</span>
            <p className="font-lora italic text-[14px] text-[#4A4A4A]"><span className="text-[#0D7A70] font-bold">3+</span> Year Industry Trajectory</p>
          </div>
          <div className="border-l-2 border-[#0D7A70]/20 pl-4">
            <span className="font-mono text-[10px] text-[#64748B] uppercase block">Experience</span>
            <p className="font-lora italic text-[14px] text-[#4A4A4A]">Navy Federal Credit Union (Fintech)</p>
            <p className="font-lora italic text-[14px] text-[#4A4A4A]">Trinket for Education (Ed-tech)</p>
          </div>
          <div className="border-l-2 border-[#0D7A70]/20 pl-4">
            <span className="font-mono text-[10px] text-[#64748B] uppercase block">Focus</span>
            <p className="font-lora italic text-[14px] text-[#4A4A4A]">Scaling Full-Stack & Cloud Services</p>
          </div>
        </div>
      ),
      extendedSpecs: [
        {
          company: 'NAVY FEDERAL CREDIT UNION',
          project: 'Scalable Banking Infrastructure',
          desc: 'Focused on building secure, high-traffic financial interfaces and backend logic within a cloud-native environment.'
        },
        {
          company: 'TRINKET FOR EDUCATION',
          project: 'Interactive Learning Architecture',
          desc: 'Developed performance-optimized frontend tools and educational software modules during a focused engineering internship.'
        }
      ]
    },
    {
      id: '02',
      label: 'REPERTOIRE',
      title: '30+ DIGITAL BUILDS',
      body: 'A diverse ecosystem of projects ranging from Intelligent Agents to Distributed Systems.',
      tech: ['LLMs', 'Agentic AI', 'PyTorch', 'Kubernetes', 'Java', 'SpringBoot', 'Node.js', 'Azure', 'Microservices', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'Python']
    },
    {
      id: '03',
      label: 'THE ARCHIVE',
      title: 'LOGIC & LORE',
      body: 'The blueprints, resources, and personal narratives that fuel my creative process.',
      isLink: true,
      extendedSpecs: [
        {
          company: 'TECHNICAL BLOGS',
          project: 'Documentation & Guides',
          desc: 'Sharing insights on modern web development, architectural patterns, and engineering philosophy.'
        },
        {
          company: 'OPEN SOURCE',
          project: 'Community Templates',
          desc: 'Providing blueprints and boilerplates for developers to build scalable digital experiences.'
        }
      ]
    }
  ];

  return (
    <section className="pt-0 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F2F0E9] relative">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Structural Divider & Label */}
        <div className="mb-[10px] relative">
           <span className="font-mono text-[10px] text-[#64748B] tracking-widest uppercase block mb-2 opacity-60">
             SECTION_02 / INDEX
           </span>
           <div className="h-[1px] w-full bg-[#E5E7EB]"></div>
        </div>

        {/* Placards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placardData.map((item) => (
            <div key={item.id} className="placard-card group flex flex-col h-[400px] overflow-hidden">
              {/* Four Corner L-Brackets */}
              <span className="corner-tl"></span>
              <span className="corner-tr"></span>
              <span className="corner-bl"></span>
              <span className="corner-br"></span>

              {/* Default View */}
              <div className="flex flex-col h-full transition-transform duration-500 group-hover:-translate-y-full">
                <div className="p-0 flex flex-col h-full justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#64748B] tracking-widest uppercase block mb-4">
                      {item.id} / {item.label}
                    </span>
                    <h3 className="font-sans font-bold text-[20px] text-[#1A1A1A] mb-4">
                      {item.title}
                    </h3>
                    <div className="font-lora italic text-[#4A4A4A] leading-relaxed">
                      {item.body}
                    </div>
                  </div>
                  
                  {item.tech && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.tech.map((t) => (
                        <span key={t} className="px-2 py-1 bg-[#F2F0E9]/80 backdrop-blur-sm text-[#0D7A70] font-mono text-[10px] uppercase border border-[#0D7A70]/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.isDensityMap && (
                    <div className="grid grid-cols-6 gap-2 w-fit mt-auto group-hover:gap-2.5 transition-all duration-500">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-2 h-2 bg-gray-200 group-hover:bg-[#0D7A70] transition-colors duration-300"
                          style={{ transitionDelay: `${i * 10}ms` }}
                        ></div>
                      ))}
                    </div>
                  )}

                  {item.isLink && (
                    <div className="mt-auto">
                       <Link href="#resources" className="text-[#0D7A70] font-mono text-sm font-bold uppercase tracking-wider hover:underline decoration-[#0D7A70] underline-offset-4">
                         [ Explore The Garden → ]
                       </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Reveal View: EXTENDED_SPECS */}
              {item.extendedSpecs && (
                <div className="absolute inset-0 p-8 bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0 flex flex-col">
                  <span className="font-mono text-[10px] text-[#0D7A70] tracking-[0.3em] uppercase block mb-6">
                    [ EXTENDED_SPECS ]
                  </span>
                  
                  <div className="space-y-6 overflow-y-auto pr-2">
                    {item.extendedSpecs.map((spec, idx) => (
                      <div key={idx} className="border-l-2 border-[#0D7A70]/20 pl-4">
                        <h4 className="font-sans font-bold text-xs tracking-wider text-[#1A1A1A] uppercase">
                          {spec.company}
                        </h4>
                        <span className="font-mono text-[10px] text-[#64748B] block mb-2 uppercase">
                          Project: {spec.project}
                        </span>
                        <p className="font-lora italic text-xs text-[#4A4A4A] leading-relaxed">
                          {spec.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placards;