'use client';

import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AboutMe = () => {
  const [scrollLocation, setScrollLocation] = useState('ORIGIN_POINT: NEPAL');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 300) setScrollLocation('ORIGIN_POINT: NEPAL');
      else if (scrollY < 600) setScrollLocation('LOCATION: TAMPA');
      else if (scrollY < 900) setScrollLocation('DEPLOYMENT: CAREER');
      else if (scrollY < 1200) setScrollLocation('STATUS: CURRENT_TRAJECTORY');
      else setScrollLocation('MODULE: MY_HOBBIES');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#F2F0E9] text-[#1A1A1A] font-sans relative overflow-x-hidden">
      <Navbar />

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#1A1A1A] text-[#F2F0E9] py-1 px-4 z-50 font-mono text-[9px] flex justify-between items-center border-t border-[#0D7A70]">
        <span>STATUS_LOG</span>
        <span className="font-bold text-[#0D7A70] tracking-widest">{scrollLocation}</span>
        <span>© 2026</span>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 pt-24 pb-20 relative z-10">
        
        {/* Title */}
        <div className="relative mb-12 text-center">
          <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#D1D5DB] -z-10"></span>
          <h1 className="font-mono text-[10px] text-[#64748B] tracking-[0.3em] bg-[#F2F0E9] px-4 inline-block border border-[#D1D5DB]">
             [ 03 / THE_JOURNEY ]
          </h1>
        </div>

        <div className="relative max-w-[1400px] mx-auto mb-10">
          {/* 1. The Timeline Axis (The Spine) */}
          <div className="absolute top-0 left-1/2 w-[2px] h-full bg-[#E5E7EB] transform -translate-x-1/2 z-0 hidden md:block">
             <div className="absolute -top-1.5 left-1/2 w-3 h-3 border-2 border-[#0D7A70] bg-[#F2F0E9] rounded-full transform -translate-x-1/2 z-10"></div>
          </div>

          <div className="space-y-0 relative z-10">

            {/* 2022 AUG - Left Aligned Row */}
            <div className="flex flex-col md:flex-row w-full items-start group relative z-10">
              <div className="md:w-1/2 flex justify-end pr-8 relative">
                <div className="flex gap-6 max-w-3xl items-start text-right">
                  <div className="flex-1 pt-2">
                    <div className="flex items-center justify-end gap-3 mb-1">
                      <h2 className="font-sans font-black text-2xl text-[#1A1A1A] uppercase tracking-tighter">
                        A New Chapter <span className="text-[#0D7A70]">in Tampa</span>
                      </h2>
                      <span className="font-mono text-[10px] text-[#0D7A70] font-bold bg-[#0D7A70]/10 px-1.5 py-0.5 rounded">2022</span>
                    </div>
                    <p className="font-lora text-[15px] leading-snug text-[#4A4A4A]">
                      I moved from Nepal to the United States to begin my undergraduate studies at USF. This defining moment required adapting to a new culture while pursuing ambitions in engineering and technology.
                    </p>
                  </div>
                  {/* Photo */}
                  <div className="w-[280px] h-[190px] bg-white p-2 shadow-md border border-gray-200 shrink-0 rotate-[-2deg] transition-transform duration-500 hover:rotate-0 hover:scale-105">
                     <div className="w-full h-full relative overflow-hidden">
                       <Image 
                          src="/tampa.jpg" 
                          alt="Tampa Skyline" 
                          fill 
                          className="object-cover transition-all duration-500"
                       />
                     </div>
                  </div>
                </div>
                <div className="absolute top-4 right-0 w-8 h-[1px] bg-[#D1D5DB] hidden md:block"></div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* 2024 MAY - Right Aligned Row (Overlapping) */}
            <div className="flex flex-col md:flex-row w-full items-start group -mt-16 relative z-20">
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="md:w-1/2 flex justify-start pl-8 relative">
                <div className="absolute top-4 left-0 w-8 h-[1px] bg-[#D1D5DB] hidden md:block"></div>
                <div className="flex gap-6 max-w-3xl items-start text-left flex-row-reverse md:flex-row">
                  {/* Photo */}
                  <div className="w-[280px] h-[190px] bg-white p-2 shadow-xl border border-gray-200 shrink-0 relative rotate-[2deg] transition-transform duration-500 hover:rotate-0 hover:scale-105">
                     <div className="w-full h-full relative overflow-hidden">
                       <Image 
                          src="/trinket.jpg" 
                          alt="Trinket Work" 
                          fill 
                          className="object-cover transition-all duration-500"
                       />
                     </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center justify-start gap-3 mb-1">
                      <span className="font-mono text-[10px] text-[#0D7A70] font-bold bg-[#0D7A70]/10 px-1.5 py-0.5 rounded">2024</span>
                      <h2 className="font-sans font-black text-2xl text-[#1A1A1A] uppercase tracking-tighter">
                        Applied <span className="text-[#0D7A70]">Learning</span>
                      </h2>
                    </div>
                    <p className="font-lora text-[15px] leading-snug text-[#4A4A4A]">
                      Internship with Trinket for Education. Built interactive tools making education more accessible, applying classroom skills to high-impact engineering projects remotely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2025 MAY - Left Aligned Row (Overlapping) */}
            <div className="flex flex-col md:flex-row w-full items-start group -mt-16 relative z-30">
              <div className="md:w-1/2 flex justify-end pr-8 relative">
                <div className="flex gap-6 max-w-3xl items-start text-right">
                  <div className="flex-1 pt-2">
                    <div className="flex items-center justify-end gap-3 mb-1">
                      <h2 className="font-sans font-black text-2xl text-[#1A1A1A] uppercase tracking-tighter">
                        Professional <span className="text-[#0D7A70]">Milestone</span>
                      </h2>
                      <span className="font-mono text-[10px] text-[#0D7A70] font-bold bg-[#0D7A70]/10 px-1.5 py-0.5 rounded">2025</span>
                    </div>
                    <p className="font-lora text-[15px] leading-snug text-[#4A4A4A]">
                      Joined Navy Federal Credit Union through SHPE. Contributing to secure, high-traffic financial infrastructure within a collaborative corporate environment.
                    </p>
                  </div>
                  {/* Photo: NFCU */}
                  <div className="w-[280px] h-[190px] bg-white p-2 shadow-2xl border border-gray-200 shrink-0 relative rotate-[-3deg] transition-transform duration-500 hover:rotate-0 hover:scale-105">
                     <div className="w-full h-full relative overflow-hidden">
                       <Image 
                          src="/nfcu.jpg" 
                          alt="Navy Federal First Day" 
                          fill 
                          className="object-cover transition-all duration-500"
                       />
                     </div>
                  </div>
                </div>
                <div className="absolute top-4 right-0 w-8 h-[1px] bg-[#D1D5DB] hidden md:block"></div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* 2025 AUG - Right Aligned Row (Overlapping) */}
            <div className="flex flex-col md:flex-row w-full items-start group -mt-12 relative z-40">
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="md:w-1/2 flex justify-start pl-8 relative">
                <div className="absolute top-4 left-0 w-8 h-[1px] bg-[#D1D5DB] hidden md:block"></div>
                <div className="flex gap-6 max-w-3xl items-start text-left flex-row-reverse md:flex-row">
                  {/* Photo */}
                  <div className="w-[280px] h-[190px] bg-white p-2 shadow-2xl border border-gray-200 shrink-0 relative rotate-[-1deg] transition-transform duration-500 hover:rotate-0 hover:scale-105">
                     <div className="w-full h-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 font-mono border border-dashed border-gray-300">[ PRESIDENT ]</div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center justify-start gap-3 mb-1">
                      <span className="font-mono text-[10px] text-[#0D7A70] font-bold bg-[#0D7A70]/10 px-1.5 py-0.5 rounded">2025</span>
                      <h2 className="font-sans font-black text-2xl text-[#1A1A1A] uppercase tracking-tighter">
                        Community <span className="text-[#0D7A70]">Advocacy</span>
                      </h2>
                    </div>
                    <p className="font-lora text-[15px] leading-snug text-[#4A4A4A]">
                      Elected President of the Nepalese Association at USF. Leading initiatives to support students and foster a sense of belonging through cultural shared identity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Milestone - PREFERRED CENTER CARD */}
            <div className="flex justify-center w-full pt-4 pb-8 relative z-50">
              <div className="bg-white border border-[#0D7A70]/30 p-6 max-w-xl text-center shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#0D7A70]"></div>
                
                <span className="font-mono text-[9px] text-[#0D7A70] tracking-[0.3em] block mb-4 uppercase border border-[#0D7A70] inline-block px-3 py-0.5 rounded-full">
                  Current_Trajectory
                </span>
                
                <h2 className="font-sans font-black text-2xl md:text-3xl text-[#1A1A1A] uppercase tracking-tighter mb-4 leading-none">
                  NAVY FEDERAL <br/><span className="text-[#0D7A70]">CREDIT UNION</span>
                </h2>
                
                <p className="font-lora text-[15px] leading-relaxed text-[#4A4A4A] mb-6 max-w-md mx-auto">
                  I am currently working at Navy Federal Credit Union in a part-time capacity while completing my degree. This ongoing experience allows me to refine my professional skills and contribute to secure, high-impact projects in the financial industry.
                </p>
                
                <div className="flex justify-center items-center gap-2 border-t border-gray-50 pt-4">
                   <div className="relative">
                     <div className="w-2 h-2 bg-[#0D7A70] rounded-full"></div>
                     <div className="absolute inset-0 w-2 h-2 bg-[#0D7A70] rounded-full animate-ping opacity-50"></div>
                   </div>
                   <span className="font-mono text-[8px] text-[#1A1A1A] font-bold uppercase tracking-widest">
                     System Active
                   </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 03 / ORIGIN_STORY Section */}
        <section className="relative pt-10 pb-20 bg-[#EBD5B3]/30 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12">
          {/* Title */}
          <div className="relative mb-12 text-center">
            <h1 className="font-mono text-[10px] text-[#64748B] tracking-[0.3em] bg-[#F2F0E9] px-4 inline-block border border-[#D1D5DB] mb-6">
               [ 03 / ORIGIN_STORY ]
            </h1>
            <h2 className="font-sans font-black text-2xl md:text-4xl text-[#1A1A1A] uppercase tracking-tighter">
              How I developed <span className="text-[#0D7A70]">passion for tech</span>
            </h2>
          </div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[25%_50%_25%] gap-24 items-center px-4 md:px-12 group justify-center">
            {/* Left: First Project Image (30%) */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-[220px] h-[220px] shadow-sm overflow-hidden">
                <Image 
                  src="/first_project.jpg" 
                  alt="First Project" 
                  fill
                  className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
            </div>

            {/* Center: Narrative (40%) */}
            <div className="text-left px-2">
              <div className="relative border-l-2 border-[#0D7A70]/20 pl-6 space-y-4">
                <p className="font-lora text-[15px] leading-relaxed text-[#4A4A4A] text-justify">
                  My entry into technology was a survival tactic for a restless mind during the 2020 lockdowns. While the world outside stalled, I found a new sense of momentum in coding, starting with a simple calculator. I remember being floored by the automation of that first project; the realization that <span className="font-mono text-[13px] text-[#0D7A70] bg-[#0D7A70]/5 px-1 rounded">just 57 lines of code</span> lived inside my computer, waiting to spring into life the moment I opened the app, was a revelation. In that moment, I wasn't just a user anymore, I was the <span className="text-[#0D7A70] font-medium">architect of the logic</span>.
                </p>
                <p className="font-lora text-[15px] leading-relaxed text-[#4A4A4A] text-justify">
                  I eventually chose tech as my career path because of its sheer scale. It is a vast territory that rewards the deep dive, acting as the <span className="text-[#0D7A70] font-medium">invisible architecture</span> behind everything we do in the modern era. I wanted to be more than a witness to this impact; I wanted to be a builder of the systems the world relies on.
                </p>
              </div>
            </div>

            {/* Right: Spark Image (30%) */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-[220px] h-[220px] shadow-sm overflow-hidden">
                <Image 
                  src="/spark.jpg" 
                  alt="The Spark" 
                  fill
                  className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ objectPosition: '52% center' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 04 / MY_HOBBIES Section - Reverted to Mosaic Grid */}
        <section className="relative pt-20 pb-20 bg-white -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 border-t border-[#D1D5DB]">
          <div className="relative mb-16 text-center">
            <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#D1D5DB] -z-10"></span>
            <h1 className="font-mono text-[10px] text-[#64748B] tracking-[0.3em] bg-white px-4 inline-block border border-[#D1D5DB]">
               [ 04 / MY_HOBBIES ]
            </h1>
          </div>

          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Travel */}
              <div className="group relative aspect-square overflow-hidden bg-[#F2F0E9] border border-gray-100">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/90 backdrop-blur-sm">
                  <span className="font-mono text-[10px] text-[#0D7A70] mb-2 uppercase tracking-widest">DESTINATION_LOG</span>
                  <h3 className="font-sans font-black text-xl text-[#1A1A1A] uppercase tracking-tighter">Travel</h3>
                  <p className="font-lora italic text-xs text-[#4A4A4A] mt-4">Exploring new landscapes, from the peaks of Nepal to the skylines of the US.</p>
                </div>
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-mono text-xs grayscale group-hover:grayscale-0 transition-all duration-700">
                  [ PHOTO: TRAVEL ]
                </div>
              </div>

              {/* Badminton */}
              <div className="group relative aspect-square overflow-hidden bg-[#F2F0E9] border border-gray-100">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/90 backdrop-blur-sm">
                  <span className="font-mono text-[10px] text-[#0D7A70] mb-2 uppercase tracking-widest">STAMINA_TEST</span>
                  <h3 className="font-sans font-black text-xl text-[#1A1A1A] uppercase tracking-tighter">Badminton</h3>
                  <p className="font-lora italic text-xs text-[#4A4A4A] mt-4">Precision, agility, and the thrill of the court. My primary sport for physical discipline.</p>
                </div>
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-mono text-xs grayscale group-hover:grayscale-0 transition-all duration-700">
                  [ PHOTO: BADMINTON ]
                </div>
              </div>

              {/* Swimming */}
              <div className="group relative aspect-square overflow-hidden bg-[#F2F0E9] border border-gray-100">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/90 backdrop-blur-sm">
                  <span className="font-mono text-[10px] text-[#0D7A70] mb-2 uppercase tracking-widest">FLUID_MOTION</span>
                  <h3 className="font-sans font-black text-xl text-[#1A1A1A] uppercase tracking-tighter">Swimming</h3>
                  <p className="font-lora italic text-xs text-[#4A4A4A] mt-4">Finding focus and tranquility in the water. A meditative exercise in rhythmic movement.</p>
                </div>
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-mono text-xs grayscale group-hover:grayscale-0 transition-all duration-700">
                  [ PHOTO: SWIMMING ]
                </div>
              </div>
            </div>

            {/* Learning Log */}
            <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <span className="font-mono text-[10px] text-[#64748B] uppercase tracking-[0.3em] block mb-4">INPUT_STREAM // LOG_CURRENT</span>
                <h4 className="font-lora italic text-xl text-[#1A1A1A]">Curating Logic & Interests</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4">
                {[
                  { label: 'Agentic AI', status: 'In_Progress' },
                  { label: 'Microservices', status: 'Deep_Dive' },
                  { label: 'System Design', status: 'Learning' },
                  { label: 'Photography', status: 'Exploring' },
                  { label: 'History', status: 'Reading' },
                  { label: 'Design', status: 'Refining' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0D7A70] rounded-full"></div>
                    <div>
                      <span className="font-sans font-bold text-xs text-[#1A1A1A] block">{item.label}</span>
                      <span className="font-mono text-[8px] text-[#64748B] uppercase">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
      
      <Contact />
    </main>
  );
};

export default AboutMe;