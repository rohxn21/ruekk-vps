import ServerCard from "./ServerCard";

const servers = [
  {
    cpu: "AMD Ryzen 5 3600",
    ram: "64 GB DDR4",
    drives: "2 × 2.0 TB Enterprise HDD",
    nic: "1 Gbit — Intel I210",
    location: "Helsinki, Finland",
  },
  {
    cpu: "Intel Core i7-6700",
    ram: "32 GB DDR4",
    drives: "2 × 4.0 TB Enterprise HDD",
    nic: "1 Gbit — Intel I219-LM",
    location: "Finland",
  },
];

const ServerCatalog = () => {
  return (
    <section id="servers" className="py-24 relative">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Available <span className="text-gradient">Servers</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Dedicated hardware, enterprise-grade components. More configurations coming soon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {servers.map((server, i) => (
            <ServerCard key={i} server={server} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerCatalog;
