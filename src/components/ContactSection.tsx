import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Ready to order or have questions? Reach out via Telegram or email.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Telegram */}
          <motion.a
            href="https://t.me/Ruekkvps"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-300"
          >
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-1">Telegram</div>
              <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">@Ruekkvps</div>
            </div>
            <span className="text-xs text-muted-foreground">Chat with us instantly →</span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:info@ruekk.shop"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-300"
          >
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-1">Email</div>
              <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">info@ruekk.shop</div>
            </div>
            <span className="text-xs text-muted-foreground">We reply within 24 hours →</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
