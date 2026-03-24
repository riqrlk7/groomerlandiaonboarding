import { Target, Flame, DollarSign, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Target,
    tag: "D1",
    title: "Diferenciação",
    goal: "Construir sua autoridade única no mercado.",
    deliverables: ["Novo Posicionamento Estratégico", "Checklist de Perfil de Elite", "Sua Nova Tabela de Preços"],
  },
  {
    icon: Flame,
    tag: "D2",
    title: "Desejo",
    goal: "Fazer o cliente ideal desejar o seu trabalho.",
    deliverables: ["Funil de Conteúdo de Autoridade", "Roteiro de Narrativas Inevitáveis", "Estratégia de Conexão Diária"],
  },
  {
    icon: DollarSign,
    tag: "D3",
    title: "Dinheiro",
    goal: "Transformar directs e conversas em lucro real.",
    deliverables: ["Script de Fechamento Irresistível", "Gestão de Agenda Blindada", "Estratégia de Fidelização 5 Estrelas"],
  },
];

const MethodSection = () => (
  <section className="px-6 py-28 bg-white border-y border-brand-dark/5">
    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">O Mapa da sua Jornada</h2>
        <p className="text-brand-dark/60 text-lg font-medium mb-4">Cada etapa foi desenhada para eliminar um gargalo do seu negócio.</p>
        <p className="inline-block px-4 py-2 bg-brand-authority/5 border border-brand-authority/10 rounded-lg text-brand-authority font-black text-sm uppercase tracking-tight">
          "Se você travar em qualquer etapa, sua agenda trava junto."
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.tag} className="flex flex-col p-8 rounded-[2rem] bg-brand-light/20 border border-brand-dark/5 hover:border-brand-authority/20 transition-all group">
            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-brand-authority flex items-center justify-center text-white shadow-lg shadow-brand-authority/20">
                <step.icon className="w-7 h-7" />
              </div>
              <span className="text-4xl font-black text-brand-dark/5">{step.tag}</span>
            </div>

            <h3 className="text-2xl font-bold text-brand-dark mb-4">{step.title}</h3>
            <p className="text-brand-dark/70 font-semibold mb-8 leading-relaxed">{step.goal}</p>

            <div className="mt-auto">
              <h4 className="text-[10px] font-black text-brand-authority uppercase tracking-[0.2em] mb-5">O que você vai construir:</h4>
              <ul className="space-y-4">
                {step.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm font-bold text-brand-dark/80">
                    <CheckCircle2 className="w-4 h-4 text-brand-authority mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MethodSection;
