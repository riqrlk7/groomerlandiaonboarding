const SalesLogicSection = () => (
  <section className="px-6 py-20">
    <div className="max-w-2xl mx-auto text-center">
      <span className="text-sm font-display tracking-wider uppercase text-emerald mb-4 block">💰 Lógica da Venda</span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        "Você não precisa trabalhar mais.<br />
        <span className="text-gradient-gold">Você precisa cobrar melhor."</span>
      </h2>

      <div className="gradient-dark-card rounded-2xl p-8 border border-emerald/20 inline-block">
        <div className="flex items-center justify-center gap-8 text-center">
          <div>
            <span className="text-4xl font-display font-bold text-emerald">+R$10</span>
            <p className="text-xs text-muted-foreground mt-1">por atendimento</p>
          </div>
          <span className="text-2xl text-muted-foreground">×</span>
          <div>
            <span className="text-4xl font-display font-bold text-emerald">3</span>
            <p className="text-xs text-muted-foreground mt-1">clientes/dia</p>
          </div>
        </div>
        <p className="text-sm text-emerald font-medium mt-5">👉 Mentoria se paga sozinha</p>
      </div>
    </div>
  </section>
);

export default SalesLogicSection;
