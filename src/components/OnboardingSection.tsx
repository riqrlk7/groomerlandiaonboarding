const steps = [
  { num: "01", label: "Ajustar posicionamento", tag: "D1" },
  { num: "02", label: "Postar 3 conteúdos estratégicos", tag: "D2" },
  { num: "03", label: "Aplicar direct e fechar clientes", tag: "D3" },
];

const OnboardingSection = () => (
  <section className="px-6 py-20 max-w-3xl mx-auto">
    <div className="text-center mb-12">
      <span className="text-sm font-display tracking-wider uppercase text-gold mb-4 block">🚪 Onboarding</span>
      <h2 className="text-3xl md:text-4xl font-bold">Passos Iniciais</h2>
    </div>

    <div className="space-y-4">
      {steps.map((s, i) => (
        <div key={s.num} className="gradient-dark-card rounded-xl p-5 border border-border flex items-center gap-5">
          <span className="text-3xl font-display font-bold text-gradient-coral">{s.num}</span>
          <div className="flex-1">
            <p className="font-medium">{s.label}</p>
          </div>
          <span className="text-xs font-display font-bold text-muted-foreground bg-muted px-2.5 py-1 rounded-md">{s.tag}</span>
        </div>
      ))}
    </div>
  </section>
);

export default OnboardingSection;
