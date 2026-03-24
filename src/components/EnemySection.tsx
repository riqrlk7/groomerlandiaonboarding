import { ShieldAlert, AlertCircle, ArrowRight } from "lucide-react";

const EnemySection = () => (
  <section className="px-6 py-32 bg-brand-dark relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-authority/50 to-transparent" />
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="flex items-center gap-2 mb-6">
        <ShieldAlert className="w-5 h-5 text-brand-authority" />
        <span className="text-sm font-black tracking-widest uppercase text-brand-authority block">A Armadilha Superada</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter italic">
        O <span className="text-brand-authority NOT-italic">"Perfil Catálogo"</span> <br /> Ficou no Passado.
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-white/70 text-xl leading-relaxed font-medium">
            Até ontem, o mercado enxergava o seu negócio como apenas mais um serviço genérico. O Perfil Catálogo sugava sua energia, atraía clientes ruins e travava o seu lucro.
          </p>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-white font-bold italic">
              "Aqui, nós não aceitamos o básico. O seu perfil agora é uma ferramenta de autoridade e desejo."
            </p>
          </div>
        </div>

        <div className="bg-brand-authority/5 border border-brand-authority/20 rounded-[2.5rem] p-10 space-y-6">
          <h4 className="text-brand-authority font-black uppercase tracking-widest text-xs">O que estamos enterrando agora:</h4>
          <ul className="space-y-4">
            {[
              "Postagens vazias sem objetivo de venda",
              "O medo de cobrar o valor justo",
              "A dependência de indicações aleatórias",
              "A invisibilidade perante clientes de elite",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 text-white/50 text-sm font-bold">
                <ArrowRight className="w-4 h-4 text-brand-authority shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-12 border-t border-white/5 text-center">
        <p className="text-2xl md:text-3xl font-black text-white italic tracking-tight">
          Agora a única pergunta é: <br className="md:hidden" />
          você vai <span className="text-brand-authority underline underline-offset-8">aplicar</span> ou continuar do mesmo jeito?
        </p>
      </div>
    </div>
  </section>
);

export default EnemySection;
