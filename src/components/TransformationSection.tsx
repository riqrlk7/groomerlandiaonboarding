import { X, Check } from "lucide-react";

const TransformationSection = () => (
  <section className="px-6 py-20 max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="gradient-dark-card rounded-2xl p-8 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <X className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-lg font-display font-bold text-accent">O que a groomer é hoje</h3>
        </div>
        <ul className="space-y-3">
          {["Perfil catálogo", "Agenda vazia ou instável", "Cliente que só pechincha", "Trabalha muito e ganha pouco"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <X className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="gradient-dark-card rounded-2xl p-8 border border-emerald/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-emerald/20 flex items-center justify-center">
            <Check className="w-5 h-5 text-emerald" />
          </div>
          <h3 className="text-lg font-display font-bold text-emerald">O que ela se torna</h3>
        </div>
        <p className="text-foreground text-lg leading-relaxed">
          Uma groomer <span className="text-emerald font-semibold">valorizada</span>, com agenda cheia, cobrando caro e sendo <span className="text-emerald font-semibold">referência na cidade</span>
        </p>
      </div>
    </div>
  </section>
);

export default TransformationSection;
