import { ShieldCheck, ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden bg-white border-b border-brand-dark/5">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--brand-light),_transparent)] opacity-40" />
    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-authority/5 border border-brand-authority/10 text-brand-authority text-sm font-bold tracking-tight uppercase mb-8">
        <ShieldCheck className="w-4 h-4" />
        Boas-vindas à Groomerlândia™
      </div>
      <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 text-brand-dark tracking-tighter">
        Se você chegou até aqui, <br />
        o seu <span className="text-brand-authority italic">"perfil catálogo"</span> acabou.
      </h1>
      <p className="text-xl md:text-2xl text-brand-dark/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
        Este é o marco final da falta de valorização para se tornar a escolha inevitável do mercado. <br className="hidden md:block" />
        <span className="text-brand-authority font-bold">Prepare-se: seu jogo mudou.</span>
      </p>
      
      <div className="flex flex-col items-center gap-4 animate-bounce mt-8">
        <span className="text-xs font-black text-brand-dark/30 uppercase tracking-[0.3em]">Role para baixo e comece</span>
        <ArrowDown className="w-5 h-5 text-brand-authority" />
      </div>
    </div>
  </section>
);

export default HeroSection;
