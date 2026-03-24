const EnemySection = () => (
  <section className="px-6 py-20 relative">
    <div className="max-w-3xl mx-auto text-center">
      <span className="text-sm font-display tracking-wider uppercase text-accent mb-4 block">👊 O Grande Inimigo</span>
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        O <span className="text-accent">"Perfil Catálogo"</span>
      </h2>
      <div className="gradient-dark-card rounded-2xl p-8 border border-accent/20 max-w-lg mx-auto">
        <p className="text-muted-foreground mb-4 font-medium">A groomer que:</p>
        <ul className="space-y-3 text-left">
          {[
            "Só posta antes e depois",
            "Não gera desejo",
            "Não cria conexão",
            "Vive refém de preço",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default EnemySection;
