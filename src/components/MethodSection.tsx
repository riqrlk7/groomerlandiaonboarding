import { Target, Flame, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Target,
    tag: "D1",
    title: "Diferenciação",
    color: "coral",
    problem: '"Sou só mais uma groomer"',
    solves: ["Posicionamento claro", "Diferencial percebido", "Preço ajustado"],
    result: "Cliente para de comparar por preço",
  },
  {
    icon: Flame,
    tag: "D2",
    title: "Desejo",
    color: "gold",
    problem: "Posta e ninguém chama",
    solves: ["Conteúdo que gera autoridade", "Conexão com cliente", "Fim do perfil catálogo"],
    result: "Cliente começa a chamar no direct",
  },
  {
    icon: DollarSign,
    tag: "D3",
    title: "Dinheiro",
    color: "emerald",
    problem: "Conversa não vira cliente",
    solves: ["Script de direct", "Fechamento simples", "Organização da agenda"],
    result: "Agenda cheia + previsibilidade",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  coral: { bg: "bg-coral/10", text: "text-coral", border: "border-coral/20", dot: "bg-coral" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/20", dot: "bg-gold" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald", border: "border-emerald/20", dot: "bg-emerald" },
};

const MethodSection = () => (
  <section className="px-6 py-20 max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-sm font-display tracking-wider uppercase text-coral mb-4 block">
        🧩 O Método Groomerlândia™
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">A Escada dos 3D's</h2>
      <p className="text-muted-foreground text-lg">
        Sem D1 → D2 não funciona. Sem D2 → D3 não acontece.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((step, i) => {
        const c = colorMap[step.color];
        return (
          <div key={step.tag} className={`gradient-dark-card rounded-2xl p-6 border ${c.border} flex flex-col`}>
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
                <step.icon className={`w-5 h-5 ${c.text}`} />
              </div>
              <div>
                <span className={`text-xs font-display font-bold ${c.text} tracking-wider`}>{step.tag}</span>
                <h3 className="text-lg font-display font-bold">{step.title}</h3>
              </div>
            </div>

            <div className={`${c.bg} rounded-lg px-4 py-2.5 mb-5`}>
              <p className={`text-sm font-medium ${c.text}`}>⚡ {step.problem}</p>
            </div>

            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-display">O que resolve:</p>
            <ul className="space-y-2 mb-5 flex-1">
              {step.solves.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
                  {s}
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-4">
              <p className="text-sm font-medium">
                👉 <span className={c.text}>{step.result}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default MethodSection;
