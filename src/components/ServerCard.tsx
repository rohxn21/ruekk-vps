import { motion } from "framer-motion";

interface ServerSpec {
  cpu: string;
  ram: string;
  drives: string;
  nic: string;
  location: string;
}

interface ServerCardProps {
  server: ServerSpec;
  index: number;
}

const ServerCard = ({ server, index }: ServerCardProps) => {
  const specs = [
    { label: "CPU", value: server.cpu, icon: "⚡" },
    { label: "RAM", value: server.ram, icon: "🧠" },
    { label: "Storage", value: server.drives, icon: "💾" },
    { label: "Network", value: server.nic, icon: "🌐" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 hover:glow-border"
    >
      {/* Location badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1">
          <span className="text-sm">🇫🇮</span>
          <span className="text-xs font-mono text-secondary-foreground">{server.location}</span>
        </div>
        <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
      </div>

      {/* Specs */}
      <div className="space-y-4">
        {specs.map((spec) => (
          <div key={spec.label} className="flex items-start gap-3">
            <span className="text-base mt-0.5">{spec.icon}</span>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">{spec.label}</div>
              <div className="text-sm font-medium text-foreground">{spec.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 pt-4 border-t border-border">
        <a href="#contact" className="block w-full rounded-md bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-center">
          Configure & Order
        </a>
      </div>
    </motion.div>
  );
};

export default ServerCard;
