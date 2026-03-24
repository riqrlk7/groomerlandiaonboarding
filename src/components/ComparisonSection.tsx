import { X, Check } from "lucide-react";

const ComparisonSection = () => (
  <section className="px-6 py-20 max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <span className="text-sm font-display tracking-wider uppercase text-coral mb-4 block">📦 Na Prática</span>
      <h2 className="text-3xl md:text-4xl font-bold">Como isso se conecta</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="gradient-dark-card rounded-2xl p-6 border border-accent/20">
        <div className="flex items-center gap-2 mb-5">
          <X className="w-5 h-5 text-accent" />
          <h3 className="font-display font-bold text-accent">Sem Método</h3>
        </div>
        <ul className="space-y-3">
          {["Conteúdo solto", "Aula aleatória", "Sem resultado"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="gradient-dark-card rounded-2xl p-6 border border-emerald/20">
        <div className="flex items-center gap-2 mb-5">
          <Check className="w-5 h-5 text-emerald" />
          <h3 className="font-display font-bold text-emerald">Com Método</h3>
        </div>
        <ul className="space-y-3">
          {["Clareza do que fazer", "Execução guiada", "Evolução visível"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
