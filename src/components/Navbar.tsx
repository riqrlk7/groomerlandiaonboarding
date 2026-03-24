import { Button } from "./ui/button";
import { LogIn, Gamepad2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-[#1A1A1A] rounded-full p-2.5 flex items-center justify-center shadow-lg">
            <Gamepad2 className="w-5 h-5 text-[#C82323]" />
          </div>
          <span className="font-display font-bold text-sm tracking-[0.3em] text-brand-dark uppercase">
            GROOMERLÂNDIA PORTAL
          </span>
        </div>
        
        <div className="flex items-center">
          <Button 
            className="bg-[#C82323] hover:bg-[#A81D1D] text-white font-black text-xs uppercase tracking-widest px-8 h-11 rounded-xl flex items-center gap-2 shadow-lg shadow-red-900/20 transition-all duration-300"
            onClick={() => window.open('https://alunosgroomerlandia.netlify.app/', '_blank')}
          >
            <LogIn className="w-4 h-4" />
            ACESSAR PORTAL DE ALUNOS
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
