import { TrendingUp, BadgeDollarSign, ChevronRight } from "lucide-react";

const SalesLogicSection = () => (
  <section className="px-6 py-24 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-brand-authority" />
        <span className="text-sm font-display tracking-widest uppercase text-brand-authority font-bold block">
          A Lucratividade Real
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-12 tracking-tight">
        "Você não precisa trabalhar mais.<br />
        <span className="text-brand-authority italic">Você precisa cobrar o valor justo."</span>
      </h2>

      <div className="bg-brand-dark rounded-[2.5rem] p-12 border border-white/10 shadow-2xl relative overflow-hidden inline-block w-full max-w-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-authority to-transparent opacity-30" />
        <div className="grid md:grid-cols-3 items-center gap-8 md:gap-4 mb-10">
          <div className="text-center">
            <span className="text-5xl font-black text-white block mb-2">+R$25</span>
            <p className="text-xs text-white/50 uppercase tracking-widest font-bold">por atendimento</p>
          </div>
          <div className="flex justify-center">
            <span className="text-3xl text-white/20 font-light">×</span>
          </div>
          <div className="text-center">
            <span className="text-5xl font-black text-white block mb-2">4</span>
            <p className="text-xs text-white/50 uppercase tracking-widest font-bold">clientes por dia</p>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex items-center justify-center gap-4 group cursor-default">
          <BadgeDollarSign className="w-6 h-6 text-brand-authority" />
          <p className="text-lg text-white font-medium">
            Seu investimento se paga em menos de <span className="text-brand-authority font-black underline underline-offset-4">15 dias</span>.
            <ChevronRight className="inline-block ml-2 w-4 h-4 text-brand-authority group-hover:translate-x-1 transition-transform" />
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SalesLogicSection;
