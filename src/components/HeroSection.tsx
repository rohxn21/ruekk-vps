import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-mono text-primary uppercase tracking-wider">EU Dedicated Servers</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6"
        >
          High-Performance
          <br />
          <span className="text-gradient">Dedicated VPS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Enterprise-grade dedicated VPS & RDP servers across Europe. 
          Blazing fast, fully managed, always online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#servers"
            className="rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-border hover:glow-border-strong"
          >
            Browse Servers
          </a>
          <a
            href="#features"
            className="rounded-lg border border-border px-8 py-3.5 font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-all"
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid grid-cols-3 max-w-lg mx-auto gap-8"
        >
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "EU", label: "Locations" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
