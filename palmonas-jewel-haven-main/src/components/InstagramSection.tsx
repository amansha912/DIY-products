import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import bowKeychain from "@/assets/bow-keychain.jpg";
import pastelTulips from "@/assets/pastel-tulips.jpg";
import lilyValleyHanging from "@/assets/lily-valley-hanging.jpg";
import jellyfishKeychains from "@/assets/jellyfish-keychains.jpg";
import fuzzywireBouquet from "@/assets/fuzzywire-bouquet.png";
import lippanArt from "@/assets/lippan-art.png";

const INSTAGRAM_URL =
  "https://www.instagram.com/diy_by_nandini?igsh=MWwzeGtvemMxbWVldA==";

const images = [
  { src: bowKeychain, alt: "Handmade crochet keychain" },
  { src: pastelTulips, alt: "Pastel crochet tulips" },
  { src: fuzzywireBouquet, alt: "Fuzzywire flower bouquet" },
  { src: lilyValleyHanging, alt: "Car hanging decoration" },
  { src: lippanArt, alt: "Lippan art piece" },
  { src: jellyfishKeychains, alt: "Jellyfish keychains" },
];

const InstagramSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/10 to-transparent">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white px-5 py-2 rounded-full mb-4">
            <Instagram size={16} strokeWidth={2} />
            <span className="text-xs tracking-wider uppercase font-semibold">
              @diy_by_nandini
            </span>
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Follow us on Instagram
          </h2>
          <p className="text-muted-foreground text-sm font-light max-w-md mx-auto">
            See our latest creations, behind-the-scenes, and customer showcases!
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 max-w-4xl mx-auto mb-8">
          {images.map((img, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group aspect-square overflow-hidden relative rounded-2xl shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center rounded-2xl">
                <Instagram
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  strokeWidth={1.5}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white px-8 py-3 rounded-full font-medium text-sm tracking-wider uppercase shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <Instagram size={18} />
            Follow on Instagram
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
