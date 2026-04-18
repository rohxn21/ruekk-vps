const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/50 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center">
              <span className="font-heading font-bold text-primary-foreground text-xs">R</span>
            </div>
            <span className="font-heading font-semibold text-foreground">
              Ruekk <span className="text-primary">VPS</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ruekk VPS. High-quality dedicated servers across Europe.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
