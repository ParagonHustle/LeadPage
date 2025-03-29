import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        
        
        
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-foreground hover:text-primary transition py-2">
              Home
            </Link>
            <a href="#" className="text-foreground hover:text-primary transition py-2">
              The Game
            </a>
            <a href="#" className="text-foreground hover:text-primary transition py-2">
              Partnerships
            </a>
            <a href="#" className="text-foreground hover:text-primary transition py-2">
              Events & Rewards
            </a>
            <a href="#" className="text-foreground hover:text-primary transition py-2">
              Roadmap & Development
            </a>
            <Button className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-medium w-full">
              Connect
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
