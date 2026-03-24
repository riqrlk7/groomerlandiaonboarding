const OperationSection = () => (
  <section className="px-6 py-20 max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <span className="text-sm font-display tracking-wider uppercase text-coral mb-4 block">⚙️ A Operação</span>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Dinâmica Semanal</h2>
      <p className="text-muted-foreground italic">"Aqui você não assiste. Aqui você aplica."</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-16">
      <div className="gradient-dark-card rounded-2xl p-6 border border-coral/20 text-center">
        <span className="text-xs font-display font-bold text-coral tracking-wider uppercase">📅 Terça</span>
        <h3 className="text-2xl font-display font-bold mt-2 mb-1">Direção</h3>
        <p className="text-muted-foreground text-sm">Ensino e estratégia</p>
      </div>
      <div className="gradient-dark-card rounded-2xl p-6 border border-gold/20 text-center">
        <span className="text-xs font-display font-bold text-gold tracking-wider uppercase">📅 Quinta</span>
        <h3 className="text-2xl font-display font-bold mt-2 mb-1">Execução</h3>
        <p className="text-muted-foreground text-sm">Cobrança e ação</p>
      </div>
    </div>

    <div className="text-center mb-12">
      <span className="text-sm font-display tracking-wider uppercase text-gold mb-4 block">🧲 Conteúdo</span>
      <h2 className="text-3xl md:text-4xl font-bold">Tipos de Comunicação</h2>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        { emoji: "🔥", title: "Confronto", quote: '"Você não cresce porque virou catálogo"', color: "text-accent" },
        { emoji: "🪞", title: "Identificação", quote: '"Eu já cobrei barato e me frustrei"', color: "text-gold" },
        { emoji: "👑", title: "Autoridade", quote: '"Hoje sou referência e escolho cliente"', color: "text-coral" },
      ].map((item) => (
        <div key={item.title} className="gradient-dark-card rounded-2xl p-6 border border-border text-center">
          <span className="text-3xl mb-3 block">{item.emoji}</span>
          <h4 className={`font-display font-bold text-lg mb-2 ${item.color}`}>{item.title}</h4>
          <p className="text-muted-foreground text-sm italic">{item.quote}</p>
        </div>
      ))}
    </div>
  </section>
);

export default OperationSection;
