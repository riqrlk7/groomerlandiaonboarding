import { Quote } from "lucide-react";

const phrases = [
  "Perfil catálogo não sustenta autoridade. Posicionamento sim.",
  "O seu preço é o filtro dos seus problemas.",
  "Quem é visto como 'só mais um', sempre será o mais barato.",
  "O lucro do seu negócio mora na coragem de ser diferente.",
  "Não poste para ganhar likes. Poste para gerar desejo e venda.",
];

const PhrasesSection = () => (
  <section className="px-6 py-32 bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Quote className="w-6 h-6 text-brand-authority" />
          <span className="text-sm font-black tracking-[0.3em] uppercase text-brand-authority block">Mantras da Jornada</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tighter">Grave na sua Mente</h2>
      </div>

      <div className="grid gap-6">
        {phrases.map((phrase, i) => (
          <div key={i} className="bg-brand-light/30 rounded-3xl p-8 border-l-8 border-brand-authority group hover:bg-brand-authority/5 transition-all">
            <p className="text-xl md:text-2xl font-bold text-brand-dark italic leading-tight tracking-tight">
              "{phrase}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PhrasesSection;
