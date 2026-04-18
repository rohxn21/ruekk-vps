import { motion } from "framer-motion";

const features = [
  {
    icon: "🛡️",
    title: "DDoS Protection",
    desc: "Enterprise-level DDoS mitigation included with every server.",
  },
  {
    icon: "⚡",
    title: "Instant Setup",
    desc: "Your server is provisioned and ready within minutes of payment.",
  },
  {
    icon: "🔒",
    title: "Full Root Access",
    desc: "Complete administrative control over your dedicated environment.",
  },
  {
    icon: "🌍",
    title: "EU Data Centers",
    desc: "All servers located in GDPR-compliant European data centers.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 border-t border-border/50">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why <span className="text-gradient">Ruekk</span>?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
