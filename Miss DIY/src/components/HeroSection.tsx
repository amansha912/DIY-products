import { motion } from "framer-motion";
import heroImage from "@/assets/pink-lily-bouquet.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    const el = document.getElementById("crochet");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful handmade crochet flowers and crafts by MS DIY"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-white font-medium">
              ✨ Handmade with Love
            </span>
          </motion.div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 font-bold">
            Beautiful
            <br />
            <span className="bg-gradient-to-r from-pink-200 via-purple-200 to-green-200 bg-clip-text text-transparent">
              Handcrafted
            </span>
            <br />
            Creations
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-8 max-w-md"
          >
            Discover unique crochet flowers, fuzzywire crafts, bracelets, phone
            charms, and Lippan art — each piece lovingly handmade to brighten
            your world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <button onClick={scrollToProducts} className="craft-btn bg-white text-foreground hover:bg-primary hover:text-white">
              Explore Collection
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.1 }}
            className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
