import { XCircle, CheckCircle2, Layers } from "lucide-react";

const ComparisonSection = () => (
  <section className="px-6 py-24 max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Layers className="w-5 h-5 text-brand-authority" />
        <span className="text-sm font-display tracking-widest uppercase text-brand-authority font-bold block">
          A Diferença Prática
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-brand-dark">O Método em Ação</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-brand-light/50 rounded-3xl p-10 border border-brand-dark/5">
        <div className="flex items-center gap-3 mb-8">
          <XCircle className="w-6 h-6 text-muted-foreground" />
          <h3 className="text-xl font-bold text-brand-dark tracking-tight">Sem Posicionamento</h3>
        </div>
        <ul className="space-y-4">
          {[
            "Conteúdo postado sem estratégia clara",
            "Seguidores que não compram nada",
            "Sensação de estar falando sozinha no deserto",
            "Insegurança total na hora de cobrar o valor justo",
            "Evolução lenta e frustrante",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mt-2 shrink-0" />
              <span className="text-base font-medium leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-3xl p-10 border-2 border-brand-authority/10 shadow-premium">
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle2 className="w-6 h-6 text-brand-authority" />
          <h3 className="text-xl font-black text-brand-authority tracking-tight uppercase italic">Com Groomerlândia™</h3>
        </div>
        <ul className="space-y-4">
          {[
            "Clareza absoluta do que postar e por que postar",
            "Audiência qualificada que deseja o seu serviço",
            "Conexão real que gera autoridade imediata",
            "Script de vendas validado para fechar no direct",
            "Crescimento acelerado e previsível do lucro",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-brand-dark">
              <CheckCircle2 className="w-5 h-5 text-brand-authority shrink-0 mt-0.5" />
              <span className="text-base font-bold leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
