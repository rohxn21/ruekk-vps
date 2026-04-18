import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-sm">R</span>
          </div>
          <span className="font-heading font-bold text-lg text-foreground">
            Ruekk <span className="text-primary">VPS</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#servers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Servers</a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>

        <a
          href="#servers"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Get Started
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
