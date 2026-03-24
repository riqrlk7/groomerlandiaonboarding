import { CheckCircle2, PlayCircle, FileText, Users } from "lucide-react";

const steps = [
  { 
    num: "01", 
    label: "Assista agora (leva 5 min)", 
    desc: "A aula de boas-vindas é o mapa da engrenagem. Não pule.",
    action: "Assista ao Módulo 0 (Introdução)",
    icon: PlayCircle 
  },
  { 
    num: "02", 
    label: "Acesse o portal de alunos", 
    desc: "E comece suas tarefas a partir de agora.",
    action: "Faça o login na plataforma",
    icon: FileText 
  },
  { 
    num: "03", 
    label: "Entre agora na Comunidade", 
    desc: "Seu crescimento depende de estar no ambiente certo agora.",
    action: "Clique no link do WhatsApp no Módulo 0",
    icon: Users 
  },
];

const OnboardingSection = () => (
  <section className="px-6 py-28 bg-brand-light" id="primeiros-passos">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">Checklist de Início Imediato</h2>
        <p className="text-brand-dark/60 text-lg font-medium">Siga estes 3 passos simples para não travar na largada.</p>
      </div>

      <div className="grid gap-8">
        {steps.map((s, i) => (
          <div key={s.num} className="bg-white rounded-3xl p-8 md:p-10 border border-brand-dark/5 flex flex-col md:flex-row items-start md:items-center gap-8 shadow-premium group">
            <div className="w-16 h-16 rounded-2xl bg-brand-authority/5 flex items-center justify-center shrink-0 group-hover:bg-brand-authority/10 group-hover:scale-110 border border-transparent group-hover:border-brand-authority/20 transition-all duration-300">
              <s.icon className="w-8 h-8 text-brand-authority" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-black text-brand-authority uppercase tracking-widest">Passo {s.num}</span>
                <div className="h-px bg-brand-dark/10 flex-1" />
              </div>
              <h4 className="text-2xl font-bold text-brand-dark tracking-tight mb-2">{s.label}</h4>
              <p className="text-brand-dark/60 font-medium mb-4">{s.desc}</p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-authority/5 border border-brand-authority/10 text-brand-authority font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Ação: {s.action}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OnboardingSection;
