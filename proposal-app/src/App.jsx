import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const scrollStoryData = [
  { img: "1.png", text: "Hi. I am Samukeliso Mayabane but over the years I've accumulated a lot of names and personas, mostly I identify as nerd which I am and honestly love however that's not the case according to the public opinion, I behave like a gangster they say which I see why I am misconceptualised like that, I prefer the term hustleprenuer it sounds more socially acceptable." },
  { img: "2.png", text: "Just a brief history about myself I started hustling at grade 3, never stopped since." },
  { img: "3.png", text: "I gave up on the formal education system at age 17, I had gotten into finance, economics, world history and geopolitics ,it changed my perspective and I saw that the person I want to be cannot be accommodated by the current education system so I aligned myself as a capitalist and planned to start my first company by 21 and by the grace of God I did however it hasn't been going as planned to be honest there's still so much to learn on the field, I'm not in a hurry so I will be learning as much as a can and I will be practicing as I learn, can't shake the feeling that I am close to a win I just need to keep calm and continue this scary walk in the pitch black tunnel I am in. The company's name is Al VANGUARD, Vanguard is Latin for leading the way or frontlining, I am planning to change it at some point to Vanguard Technologies." },
  { img: "4.png", text: "About 2 years ago I had a feeling maybe a calling to liberate the African youth, to start a mission to decolonise the brain of the youth spent a year trying to figure out how till it dawned on me that we grow up with the illusion that doing school and finishing will liberate one not being told the other side that it takes more than that, it needs interpersonal skills, a clear plan and a lot of intrinsic motivation, discipline and determination, finally a whole lot of adaptability so I started SkillsBridge Africa as an initiative to empower the youth with these skills." },
  { img: "5.png", text: "So now I have 2 companies to grow simultaneously honestly it excites me 10% of the time the rest of the time I am just worried if I am equipped to handle this responsibility. I have a past, not a particularly clean one, I've spent most my late teenage hood and early adulthood living in the grey I will explain that in person it's a long story, at the moment all you have to know is that I have made a lot of mistakes some unavoidable as they were part of the learning process most were avoidable just allowed myself under the influence of being young. The important thing is that I have learnt and grown from them." },
  { img: "6.png", text: "One mistake I regret from this year is my inability to take the opportunity to express clearly how I feel about you when the chance was handed to me. Well dwelling on that isn't helping me at all, I had to spend a deal of time alone figuring out what happened I used to be good at reading people." },
  { img: "7.png", text: "Anyways that's just a snapshot of me I will answer any questions if you any." },
  { img: "8.png", text: "There's no word that fits you more than the one your IG handle, it is a true embodiment of who you are, the Old French took it from Latin originally dux which translates to leader or sometimes military commander, the English then took it from old French referring to a noble woman which also accurately describes you, so Dutchess is a very powerful name which was the first thing that drew my interest." },
  { img: "9.png", text: "I knew that I wanted to be with you from the first conversation we had the first day we met however I tackled myself because I doubted myself if I'd be able to fit in the role, it was the way you articulated yourself with a smile that both excited and crippled me, I had never met a person as driven, focused and beautiful all coupled in a woman Cleopatra would be jealous of." },
  { img: "10.png", text: "A sense of humour that relaxes and a voice that calms it was nothing short of breathtaking yet again crippling. After my big fumble and a whole lot of sense being spoken by you I had to reset and I still appreciate that you didn't permanently shut the door." },
  { img: "11.png", text: "It took me a minute to understand what I had to do to be able to show you that I am not planning on being just casual with you but to show you that I want to build with you, I want you by my side and me by your side as we journey this life thing, I hope I got it right this time. It is certainty, assurance that I am not all fun and games who is here for a good time not a long time and I do understand that you are not at the same place as you where when we began talking so I will dedicate my time to showing you that I don't care that they may be better packages out there (your words not mine) because that's not what is driving me to spend this much time writing and coding, what's driving me is something I cannot logically explain leaving me to conclude with absolute certainty that for the first time in a long time I am, hopelessly and stupidly in love with you" },
  { img: "12.png", text: "and with each passing day knowing that you aren't with me hurts more I really wish I can finish this coding project quicker so I can give you this message just that the perfectionist in me won't give you anything mediocre I want to give you the best I can because you deserve nothing less. AA I know I could have done this Zulu love letter style but that ain't me I wanted to do it this way because I am passionate about my craft and I wanted to use it to express how I feel to someone whom I share a greater sentiment towards." },
  { img: "13.png", text: "In a nutshell, this me officially asking you to be my girlfriend and letting you know that I will spend every waking day of my life showing you how special you are to me, how you important you are to me and make it my mission to enable myself to be in a position where I am able to give you the best life possible one filled with joy, peace and happiness. I really hope you say yes." }
];

const SakuraPetals = () => {
  const petals = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 fixed">
      {petals.map((_, i) => {
        const startX = Math.random() * 100;
        const delay = Math.random() * -15;
        const duration = 8 + Math.random() * 7;
        const scale = 0.5 + Math.random() * 0.8;
        return (
          <motion.div
            key={i}
            className="sakura-petal"
            style={{ left: `${startX}vw`, top: '-10%', width: '15px', height: '15px' }}
            animate={{ y: ['0vh', '110vh'], x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50], rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)], scale: [scale, scale * 1.2, scale] }}
            transition={{ duration, repeat: Infinity, delay, ease: 'linear' }}
          />
        );
      })}
    </div>
  );
};

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 fixed">
      {hearts.map((_, i) => {
        const startX = Math.random() * 100;
        const delay = Math.random() * -10;
        const duration = 12 + Math.random() * 10;
        const scale = 0.3 + Math.random() * 0.5;
        return (
          <motion.div
            key={i}
            className="absolute text-rose-300/30"
            style={{ left: `${startX}vw`, bottom: '-10%' }}
            animate={{ y: ['0vh', '-110vh'], x: [0, Math.random() * 60 - 30, 0], rotate: [-20, 20, -20], scale: [scale, scale * 1.2, scale] }}
            transition={{ duration, repeat: Infinity, delay, ease: 'easeInOut' }}
          >
            <Heart fill="currentColor" size={40} />
          </motion.div>
        );
      })}
    </div>
  );
};

const Envelope = ({ onOpen }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 1.5, opacity: 0, filter: 'blur(15px)', rotate: 5 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col items-center justify-center cursor-pointer group w-full h-full absolute inset-0 z-10"
    onClick={onOpen}
    style={{ perspective: 1000 }}
  >
    <motion.div 
      animate={{ y: [-15, 15, -15], rotateZ: [-1, 1, -1] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="relative z-10 flex items-center justify-center"
    >
      {/* Expanding glow rings */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute w-[350px] h-[250px] bg-rose-300 rounded-[3rem] blur-2xl -z-20"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
        className="absolute w-[350px] h-[250px] bg-pink-300 rounded-[3rem] blur-xl -z-10"
      />

      <motion.div 
        whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10, boxShadow: "0 25px 50px -12px rgba(225,29,72,0.5)" }}
        whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
        className="relative bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl border-2 border-rose-100 flex flex-col items-center justify-center min-w-[320px] md:min-w-[420px] h-[260px] transform-gpu transition-all duration-300"
      >
        <motion.div 
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="absolute -top-8 bg-gradient-to-tr from-rose-500 to-pink-500 rounded-full p-5 shadow-[0_10px_20px_-5px_rgba(225,29,72,0.6)] group-hover:shadow-[0_15px_30px_-5px_rgba(225,29,72,0.8)]"
        >
          <Heart className="w-8 h-8 text-white fill-current" />
        </motion.div>
        
        <div className="mt-8 text-center overflow-hidden">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-400 uppercase tracking-[0.3em] text-sm font-bold mb-3"
          >
            For
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-rose-800 to-gray-900 bg-clip-text text-transparent font-['Outfit'] pb-2"
          >
            Zinhle Mndzebele
          </motion.h1>
        </div>
        
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-6 text-rose-500 flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity font-bold"
        >
          <Mail className="w-5 h-5" />
          <span className="text-sm tracking-widest uppercase">Click to open</span>
        </motion.div>
      </motion.div>
    </motion.div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-rose-200/40 rounded-full blur-[120px] -z-20 pointer-events-none" />
  </motion.div>
);

const Page1 = ({ onNext }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50, filter: 'blur(5px)' }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 h-screen absolute inset-0 z-10"
  >
    <div className="relative flex-1 flex justify-center items-center w-full">
      <motion.img 
        initial={{ y: 15 }}
        animate={{ y: -5 }}
        transition={{ repeat: Infinity, duration: 3, repeatType: "reverse", ease: "easeInOut" }}
        src="/Fides waving.png" alt="Waving" 
        className="w-full max-w-[320px] md:max-w-md character-image drop-shadow-2xl relative z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
        className="absolute top-[5%] md:top-[15%] right-[0%] md:-right-[10%] z-20"
      >
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="bg-white px-6 py-5 rounded-3xl rounded-bl-none shadow-xl border border-gray-100 max-w-[280px]"
        >
          <p className="text-gray-800 font-medium text-lg md:text-xl leading-relaxed">
            "Hi Dutchess. The first time I tried this you said I was scripted"
          </p>
        </motion.div>
      </motion.div>
    </div>
    <div className="flex-1 flex justify-center md:justify-start mt-8 md:mt-0">
      <motion.button
        whileHover={{ scale: 1.05, x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="bg-gray-900 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-[0_8px_15px_-3px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_25px_-5px_rgba(0,0,0,0.3)] transition-all flex items-center gap-2"
      >
        Next Page <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </motion.button>
    </div>
  </motion.div>
);

const Page2 = ({ onNext }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50, filter: 'blur(5px)' }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 h-screen absolute inset-0 z-10"
  >
    <div className="relative flex-1 flex justify-center items-center w-full">
      <motion.img src="/Page 2 Image 1.png" alt="Smirk" className="w-full max-w-[320px] md:max-w-md character-image drop-shadow-2xl relative z-10" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
        className="absolute top-[10%] md:top-[15%] right-0 md:-right-[10%] z-20"
      >
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="bg-white px-6 py-5 rounded-3xl rounded-bl-none shadow-xl border border-gray-100 max-w-[280px]"
        >
          <p className="text-gray-800 font-medium text-lg md:text-xl leading-relaxed">
            "....well this time type I certainly am"
          </p>
        </motion.div>
      </motion.div>
    </div>
    <div className="flex-1 flex justify-center md:justify-start mt-8 md:mt-0">
      <motion.button
        whileHover={{ scale: 1.05, x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="bg-gray-900 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-[0_8px_15px_-3px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_25px_-5px_rgba(0,0,0,0.3)] transition-all flex items-center gap-2"
      >
        Next <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </motion.button>
    </div>
  </motion.div>
);

const Page3 = ({ onAction }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 h-screen absolute inset-0 z-10"
  >
    <div className="relative flex-1 flex justify-center md:justify-end w-full">
      <motion.img 
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        src="/Let's Go.png" alt="Pointing" 
        className="w-full max-w-[320px] md:max-w-md character-image drop-shadow-2xl relative z-10 md:translate-x-12"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", bounce: 0.5 }}
        className="absolute bottom-[5%] left-[5%] md:left-[10%] z-20"
      >
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          className="bg-rose-50 px-5 py-3 rounded-2xl rounded-tr-none shadow-lg border border-rose-100 rotate-[-8deg]"
        >
          <p className="text-rose-600 font-semibold text-sm md:text-base">"You look great BTW" ✨</p>
        </motion.div>
      </motion.div>
    </div>
    <div className="flex-1 flex justify-center md:justify-start items-center relative z-20 mt-[-2rem] md:mt-0">
      <motion.div initial={{ opacity: 0, scale: 0.8, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.8, type: "spring", bounce: 0.6 }}>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAction}
          className="group relative bg-gradient-to-r from-rose-500 to-pink-500 text-white px-14 py-6 rounded-full font-bold text-2xl md:text-3xl shadow-[0_15px_35px_-10px_rgba(225,29,72,0.6)] transition-all overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10 flex items-center gap-3">Let's Go <Heart className="w-6 h-6 fill-white" /></span>
        </motion.button>
      </motion.div>
    </div>
  </motion.div>
);

const ScrollStory = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
      className="w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth absolute inset-0 z-30"
    >
      <div className="max-w-6xl mx-auto py-32 px-6 flex flex-col gap-40 md:gap-64 pb-64">
        {scrollStoryData.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}
            >
              {i === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, 15, 0] }}
                  transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
                  className="absolute -bottom-20 md:-bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center text-rose-500 z-10 pointer-events-none"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-80">Scroll</span>
                  <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </motion.div>
              )}
              <div className="flex-1 flex justify-center relative w-full">
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={`/${item.img}`} 
                  alt={`Character ${i+1}`}
                  className="w-full max-w-[300px] md:max-w-[450px] drop-shadow-2xl object-contain character-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (!e.target.dataset.failed) {
                      e.target.dataset.failed = true;
                      const div = document.createElement('div');
                      div.className = "w-64 h-64 bg-rose-50 rounded-3xl flex items-center justify-center text-rose-300 font-bold border-2 border-dashed border-rose-200 shadow-inner";
                      div.innerText = `Missing: ${item.img}`;
                      e.target.parentElement.appendChild(div);
                    }
                  }}
                />
              </div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex-1 w-full"
              >
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + (i % 2), ease: "easeInOut", delay: i * 0.2 }}
                  className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-rose-50 text-gray-800 text-lg md:text-xl leading-relaxed relative"
                >
                  <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-rose-50 rotate-45 ${isEven ? '-left-3 border-r-0 border-t-0 hidden md:block' : '-right-3 border-l-0 border-b-0 hidden md:block'}`}></div>
                  <p className="font-medium whitespace-pre-wrap">{item.text}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={onNext}
            className="bg-gray-900 text-white px-14 py-6 rounded-full font-bold text-xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-2 hover:shadow-[0_25px_40px_-15px_rgba(0,0,0,0.5)] flex items-center gap-3"
          >
            Continue to Note <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SideNote = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="w-full h-screen absolute inset-0 z-40 bg-transparent flex items-center justify-center p-6 overflow-y-auto"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 bg-white/90 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full blur-[100px] opacity-40 -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200 to-rose-100 rounded-full blur-[80px] opacity-40 -z-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="flex-1 flex justify-center z-10 w-full relative">
          <motion.img 
            initial={{ y: 10 }}
            animate={{ y: -10 }}
            transition={{ repeat: Infinity, duration: 3, repeatType: "reverse", ease: "easeInOut" }}
            src="/14.png"
            alt="Supportive"
            className="w-full max-w-[320px] md:max-w-md drop-shadow-2xl character-image"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        
        <div className="flex-1 flex flex-col items-start gap-8 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-500 font-['Outfit'] tracking-tight">Side note...</h2>
          <p className="text-gray-700 text-xl leading-relaxed font-medium">
            The reason why I bought the domain is that I genuinely believe in you not just as a hustler but a powerhouse of a businesswoman. So regardless of what you say, we will transform this domain into a website that will be your step 0 into you building your business. Whatever you choose it to be, I will build it and help you direct traffic to it and making sure that it converts.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="mt-6 bg-rose-500 text-white px-10 py-5 rounded-full font-bold text-xl shadow-[0_10px_20px_-5px_rgba(244,63,94,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(244,63,94,0.5)] transition-all flex items-center gap-2"
          >
            Read Final Message <Mail className="w-5 h-5 ml-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const FinalDecision = () => {
  const [celebrated, setCelebrated] = useState(false);

  const handleChoice = () => {
    setCelebrated(true);
    const duration = 4000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({ particleCount: 7, angle: 60, spread: 80, origin: { x: 0 }, colors: ['#e11d48', '#fb7185', '#fda4af', '#f43f5e', '#ffffff'] });
      confetti({ particleCount: 7, angle: 120, spread: 80, origin: { x: 1 }, colors: ['#e11d48', '#fb7185', '#fda4af', '#f43f5e', '#ffffff'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full absolute inset-0 z-50 bg-transparent overflow-y-auto overflow-x-hidden"
    >
      
      <div className="min-h-full w-full flex flex-col items-center justify-center py-12 px-6">
        <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8 md:gap-10 relative z-10">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
            src="/9.png"
            alt="Joyful"
            className="w-48 md:w-80 h-auto drop-shadow-2xl character-image"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-[2rem] border border-rose-100 shadow-xl w-full"
          >
            <p className="text-xl md:text-3xl text-gray-800 font-medium leading-relaxed whitespace-pre-wrap">
              Looking forward to your response{"\n\n"}
              Kind regards,{"\n"}
              <span className="font-bold text-rose-500">A dumb idiot that loves you</span>
            </p>
          </motion.div>
          
          <AnimatePresence mode="wait">
            {!celebrated ? (
              <motion.div 
                key="choices"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 w-full sm:w-auto"
              >
                <button onClick={handleChoice} className="w-full sm:w-auto bg-gray-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                  YES!
                </button>
                <button onClick={handleChoice} className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-[0_10px_20px_-5px_rgba(225,29,72,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(225,29,72,0.6)] hover:-translate-y-1 transition-all hover:ring-4 ring-rose-200">
                  ABSOLUTELY YES!
                </button>
              </motion.div>
            ) : (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
              className="mt-4 bg-rose-50 px-8 py-5 rounded-full border border-rose-200 shadow-xl inline-block"
            >
              <p className="text-2xl md:text-3xl font-bold text-rose-600 flex items-center justify-center gap-3">
                Best choice ever. <Heart className="fill-current text-rose-500 w-8 h-8" /> See you soon, Dutchess.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    window.scrollTo(0, 0);
    setStep(s => s + 1);
  };

  const startJourney = () => {
    // Just a quick burst of confetti before advancing
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.8 }, colors: ['#e11d48'] });
    setStep(4);
  };

  return (
    <div className="h-screen w-full relative bg-white overflow-hidden flex items-center justify-center font-['Inter']">
      {/* Background Anime Romance Elements - Active globally */}
      <>
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/40 to-white/90 pointer-events-none z-0"></div>
        <SakuraPetals />
        <FloatingHearts />
        <div className="absolute top-[15%] left-[10%] animate-pulse text-rose-300/50 z-0"><Sparkles size={56} /></div>
        <div className="absolute bottom-[20%] right-[10%] animate-pulse text-rose-300/50 z-0 delay-700"><Sparkles size={72} /></div>
      </>

      <AnimatePresence mode="wait">
        {step === 0 && <Envelope key="envelope" onOpen={handleNext} />}
        {step === 1 && <Page1 key="page1" onNext={handleNext} />}
        {step === 2 && <Page2 key="page2" onNext={handleNext} />}
        {step === 3 && <Page3 key="page3" onAction={startJourney} />}
        {step === 4 && <ScrollStory key="scrollStory" onNext={handleNext} />}
        {step === 5 && <SideNote key="sideNote" onNext={handleNext} />}
        {step === 6 && <FinalDecision key="final" />}
      </AnimatePresence>
    </div>
  );
}
