const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
    <div className="absolute inset-0 gradient-coral opacity-10" />
    <div className="relative z-10 max-w-3xl mx-auto">
      <span className="inline-block px-4 py-1.5 rounded-full border border-coral/30 text-coral text-sm font-display tracking-wider uppercase mb-8">
        🎯 Posicionamento
      </span>
      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
        O Método{" "}
        <span className="text-gradient-coral">Groomerlândia</span>™
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        "Você não precisa de mais clientes…<br />
        <span className="text-foreground font-medium">Você precisa ser percebida como a escolha certa."</span>
      </p>
    </div>
  </section>
);

export default HeroSection;
