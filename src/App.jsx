import React, { useState, useEffect } from 'react';
import { 
  Github, Twitter, Linkedin, Mail, MapPin, ArrowUpRight, Layers, Code, Figma, Cpu, Globe, Camera, Music
} from 'lucide-react';

const SocialLink = ({ icon, href }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all duration-200 border border-zinc-700"
  >
    {icon}
  </a>
);

const TechItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-default">
    <div className="text-zinc-400">{icon}</div>
    <span className="text-sm font-medium text-zinc-300">{text}</span>
  </div>
);

export default function App() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('th-TH', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Bangkok'
      });
      setCurrentTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8 font-sans selection:bg-indigo-500/30">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              ธนภัทร ดีไซน์
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-lg">
              Full Stack Developer & UI Enthusiast. <br/>
              สร้างสรรค์ประสบการณ์ดิจิทัลที่ลื่นไหลและสวยงาม
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-zinc-300 font-medium">Open for work</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* Profile Card */}
          <div className="col-span-1 md:col-span-2 row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-between items-start z-10">
              <div className="w-20 h-20 rounded-full bg-zinc-800 overflow-hidden border-2 border-zinc-700">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <div className="z-10 mt-4">
              <h2 className="text-2xl font-bold mb-2">สวัสดีครับ 👋</h2>
              <p className="text-zinc-400 leading-relaxed">
                ผมชื่อ <span className="text-indigo-400 font-semibold">ท็อป</span> เชี่ยวชาญในการสร้างเว็บแอปพลิเคชันด้วย React และ Next.js ผมหลงใหลใน Minimal Design และการเขียนโค้ดที่สะอาด
              </p>
            </div>
          </div>

          {/* Map/Location */}
          <div className="col-span-1 md:col-span-1 row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden group hover:border-zinc-700 transition-all duration-300 flex flex-col items-center justify-center">
            <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 20 L100 20 M20 0 L20 100 M50 0 L50 100 M80 0 L80 100 M0 50 L100 50 M0 80 L100 80" stroke="currentColor" strokeWidth="0.5" className="text-zinc-500" />
              </svg>
            </div>
            <div className="z-10 flex flex-col items-center gap-2">
              <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-full backdrop-blur-sm">
                <MapPin size={24} />
              </div>
              <div className="text-center">
                <h3 className="font-semibold">Bangkok</h3>
                <p className="text-xs text-zinc-500">{currentTime} ICT</p>
              </div>
            </div>
          </div>

          {/* Connect / Social */}
          <div className="col-span-1 md:col-span-1 row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center gap-4 hover:border-zinc-700 transition-all duration-300">
            <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Connect</h3>
            <div className="flex gap-4">
              <SocialLink icon={<Github size={20} />} href="#" />
              <SocialLink icon={<Twitter size={20} />} href="#" />
              <SocialLink icon={<Linkedin size={20} />} href="#" />
            </div>
          </div>

          {/* Tech Stack */}
          <div className="col-span-1 md:col-span-1 row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col hover:border-zinc-700 transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Layers size={18} className="text-indigo-400"/> Tech Stack
            </h3>
            <div className="flex flex-col gap-3 flex-grow justify-center">
              <TechItem icon={<Code size={16} />} text="React / Next.js" />
              <TechItem icon={<Cpu size={16} />} text="TypeScript" />
              <TechItem icon={<Globe size={16} />} text="Tailwind CSS" />
              <TechItem icon={<Figma size={16} />} text="Figma" />
              <TechItem icon={<Camera size={16} />} text="Three.js" />
            </div>
          </div>

        {/* 5. Project Showcase (Large Image - 2x2) */}
          <div className="col-span-1 md:col-span-2 row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl relative group overflow-hidden cursor-pointer">
             <img 
               src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
               alt="Project Dashboard" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
             
             <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">E-Commerce Analytics</h3>
                    <p className="text-zinc-400 text-sm">Dashboard for tracking sales with real-time data.</p>
                  </div>
                  <div className="p-3 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
             </div>
          </div>

          {/* 6. Current Focus / Music (1x1) */}
          <div className="col-span-1 md:col-span-1 row-span-1 bg-gradient-to-br from-green-900/40 to-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300">
             <div className="flex justify-between items-start">
                <Music size={24} className="text-green-500" />
                <div className="w-4 h-4 rounded-full border-2 border-green-500/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" />
                </div>
             </div>
             <div>
                <p className="text-xs text-zinc-500 uppercase font-semibold mb-1">On Repeat</p>
                <p className="font-medium truncate">Lofi Coding Beats</p>
             </div>
          </div>

           {/* 7. Services / What I do (1x1) */}
           <div className="col-span-1 md:col-span-1 row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center hover:border-zinc-700 transition-all duration-300">
             <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Consultation
                </li>
             </ul>
          </div>
          
           {/* 8. Another Project (Wide - 2x1) */}
           <div className="col-span-1 md:col-span-2 row-span-1 bg-zinc-100 text-zinc-900 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-indigo-100/50 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1">Mobile Banking App</h3>
                <p className="text-zinc-600 text-sm mb-4">Redesigning the future of finance.</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all">
                  View Case Study <ArrowUpRight size={16} />
                </span>
              </div>
           </div>

           {/* 9. Experience / Stats (1x1) */}
           <div className="col-span-1 md:col-span-1 row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col items-center justify-center hover:border-zinc-700 transition-all duration-300">
              <span className="text-4xl font-bold text-white">3+</span>
              <span className="text-sm text-zinc-500 mt-1">Years Experience</span>
           </div>

           {/* 10. Contact CTA (1x1) */}
           <div className="col-span-1 md:col-span-1 row-span-1 bg-indigo-600 text-white rounded-3xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-indigo-700 transition-colors">
              <h3 className="font-bold text-lg mb-2">ร่วมงานกัน?</h3>
              <p className="text-xs text-indigo-200">พร้อมเริ่มโปรเจกต์ใหม่</p>
           </div>

          {/* Footer */}
          <footer className="mt-12 text-center text-zinc-500 text-sm pb-8 col-span-full">
            <p>© 2024 Thanapat Design. All rights reserved.</p>
            <p className="text-xs mt-1 opacity-50">Inspired by Bento Grids & Apple Design.</p>
          </footer>

        </div>
      </div>
    </div>
  )
}
