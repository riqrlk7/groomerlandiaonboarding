const phrases = [
  "Perfil catálogo não enche agenda.",
  "Cliente não compra banho e tosa. Compra confiança.",
  "Quem cobra barato, vive cheio… de problema.",
  "Agenda cheia não é sorte. É posicionamento.",
];

const PhrasesSection = () => (
  <section className="px-6 py-20 max-w-3xl mx-auto">
    <div className="text-center mb-12">
      <span className="text-sm font-display tracking-wider uppercase text-coral mb-4 block">💥 Frases que viram marca</span>
      <h2 className="text-3xl md:text-4xl font-bold">Repita até o mercado decorar</h2>
    </div>

    <div className="space-y-4">
      {phrases.map((phrase, i) => (
        <div key={i} className="gradient-dark-card rounded-xl p-6 border border-coral/10 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 gradient-coral" />
          <p className="text-lg font-medium pl-4 italic text-foreground">"{phrase}"</p>
        </div>
      ))}
    </div>
  </section>
);

export default PhrasesSection;
