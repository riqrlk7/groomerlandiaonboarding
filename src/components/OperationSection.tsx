import { Calendar, MessageSquare, Zap, PlayCircle, Clock } from "lucide-react";

const OperationSection = () => (
  <section className="px-6 py-28 bg-brand-dark text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-authority/5 -skew-x-12 translate-x-1/2" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="mb-20">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight italic">Sua Rotina de Execução</h2>
        <p className="text-white/60 text-lg font-medium mb-6">A mentoria não é um curso. É um processo de acompanhamento semanal.</p>
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-brand-authority border border-white/10 text-white font-black text-sm uppercase tracking-widest animate-pulse">
           Regra: Se você não aplicar entre uma call e outra, você não evolui.
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <div className="flex gap-6 group">
            <div className="w-16 h-16 rounded-2xl bg-brand-authority/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-authority/10 transition-all duration-300">
              <Calendar className="w-8 h-8 text-brand-authority" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Terças: Aula de Direção</h3>
              <p className="text-white/60 text-lg mb-4">Entrega de novas estratégias e alinhamento do que deve ser feito na semana.</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-widest">
                <Clock className="w-3 h-3" /> 20:00 - Ao vivo via Meet
              </div>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 group-hover:bg-brand-authority/10 transition-all duration-300">
              <Zap className="w-8 h-8 group-hover:text-brand-authority transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Quintas: Hotseat de Execução</h3>
              <p className="text-white/60 text-lg mb-4">Análise de perfis e correção de rota para quem está aplicando o conteúdo.</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-widest">
                <Clock className="w-3 h-3" /> 20:00 - Ao vivo via Meet
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-authority/10 border border-brand-authority/20 rounded-[2.5rem] p-10 md:p-12">
          <MessageSquare className="w-10 h-10 text-brand-authority mb-6" />
          <h4 className="text-2xl font-bold mb-4 italic">Dúvidas? Use a Comunidade.</h4>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            O suporte técnico e estratégico acontece diariamente dentro da nossa comunidade exclusiva. <br />
            <span className="text-white font-black">Não guarde dúvida. Poste e receba feedback em até 24h.</span>
          </p>
          <div className="h-px bg-white/10 w-full mb-8" />
          <p className="text-sm font-bold opacity-50 uppercase tracking-widest">Acesso vitalício aos replays na plataforma</p>
        </div>
      </div>
    </div>
  </section>
);

export default OperationSection;
