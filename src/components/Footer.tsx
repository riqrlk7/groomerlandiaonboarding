import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fcfcfc] border-t border-brand-dark/5 py-12 px-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center gap-4">
          <div className="bg-[#1A1A1A] rounded-full p-2.5 flex items-center justify-center shadow-lg transition-transform hover:scale-110">
            <Gamepad2 className="w-5 h-5 text-[#C82323]" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-2">
            <span className="font-display font-black text-xl tracking-tight text-brand-dark uppercase">
              GROOMERLÂNDIA
            </span>
            <span className="font-display font-black italic text-lg text-[#C82323] uppercase tracking-tight">
              SISTEMA DE MENTORIA
            </span>
          </div>
        </div>
        
        <div className="flex items-center">
          <span className="text-[10px] font-black text-brand-dark/15 uppercase tracking-[0.6em] text-center md:text-right">
            A ELITE NÃO PEDE LICENÇA
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
