import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="flex items-start relative overflow-hidden pt-20 bg-[#F2F0E9] mb-[-20vh]">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-0 items-start">
        
        {/* Photo Section - Reverted to previous size logic (5800%) but keeping the shorter container for closer spacing */}
        <div className="md:col-span-5 relative h-[85vh] md:h-[100vh] w-full flex justify-center items-start opacity-0 animate-fade-in-up mt-1 ml-[0.2in]" style={{ animationDelay: '0.2s' }}>
          {/* Mask container with 150px cut from bottom */}
          <div className="relative w-[5800%] h-[calc(100%-150px)] overflow-hidden flex items-start justify-center">
             <div className="relative w-full h-[150%]">
               <Image 
                  src="/portrait_cutout.png" 
                  alt="Subriti Pradhan" 
                  fill 
                  className="object-contain object-top grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                  priority
                  quality={100}
                  unoptimized
                />
             </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:col-span-7 flex flex-col justify-start px-8 md:pr-16 md:pl-0 z-10 opacity-0 animate-fade-in-up self-start mt-20 md:mt-32 pb-[80px]" style={{ animationDelay: '0.6s' }}>
          
          <div className="w-full">
            <h1 className="font-sans font-bold text-4xl md:text-[80px] leading-tight text-[#1A1A1A] tracking-normal mb-10 whitespace-nowrap ml-[-0.5in] scale-y-110 origin-left border-b-[2px] border-[#1A1A1A]/30 pb-2">
              Hi! I&apos;m Subriti Pradhan.
            </h1>
            
            <div className="w-full">
              <p className="font-lora italic text-[28px] font-normal text-[#4A4A4A] leading-[1.9]">
                Welcome to my digital garden where I showcase my work, share my logic with resources, and tell my story. I&apos;m interested in building digital experiences that balance both <span className="text-[#0D7A70] font-semibold">technical precision</span> as well as <span className="text-[#0D7A70] font-semibold">creative soul</span>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;