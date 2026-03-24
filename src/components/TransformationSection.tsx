import { CheckCircle2, Target } from "lucide-react";

const TransformationSection = () => (
  <section className="px-6 py-28 bg-white" id="nosso-alvo">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Target className="w-5 h-5 text-brand-authority" />
          <span className="text-sm font-black tracking-widest uppercase text-brand-authority block">O Nosso Alvo</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-4 tracking-tighter italic">O Seu Novo Padrão</h2>
        <p className="text-brand-dark/60 text-xl max-w-2xl mx-auto font-medium">A mentoria não é sobre fazer o básico. É sobre assumir o topo do mercado.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-brand-light/30 rounded-[2.5rem] p-10 md:p-12 border border-brand-dark/5">
          <h3 className="text-2xl font-bold text-brand-dark/40 mb-8 uppercase tracking-widest">O Plano de Fuga</h3>
          <ul className="space-y-6">
            {[
              "Agenda vazia e desespero constante",
              "Clientes ruins que reclamam de cada real",
              "Invisibilidade total perante o mercado",
              "Refém de descontos para não perder o dia",
              "Falta de lucro real no final do mês",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 text-brand-dark/40 font-bold line-through decoration-brand-authority/30">
                <div className="w-2 h-2 rounded-full bg-brand-dark/10 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-brand-authority rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl shadow-brand-authority/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl opacity-50" />
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-white/50 relative z-10">O Novo Padrão de Elite</h3>
          <ul className="space-y-6 relative z-10">
            {[
              "Agenda disputada com lista de espera",
              "Clientes que aceitam seu preço sem questionar",
              "Autoridade máxima reconhecida na região",
              "Domínio tático de todas as etapas de venda",
              "Fundo de reserva e lucro previsível todo mês",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 text-white font-black text-lg md:text-xl">
                <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default TransformationSection;
