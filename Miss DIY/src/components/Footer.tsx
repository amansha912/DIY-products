import { Link } from "react-router-dom";
import { Instagram, Heart } from "lucide-react";
import { categories } from "@/data/products";

const INSTAGRAM_URL =
  "https://www.instagram.com/diy_by_nandini?igsh=MWwzeGtvemMxbWVldA==";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-foreground text-white/90">
      <div className="container mx-auto px-4 lg:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-wide bg-gradient-to-r from-pink-300 via-purple-300 to-green-300 bg-clip-text text-transparent mb-3">
              MS DIY
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Beautiful handmade crafts — crochet flowers, fuzzywire art,
              bracelets, phone charms, and Lippan art. Made with love by
              Nandini.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop categories */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-semibold text-white/70">
              Shop
            </h4>
            <div className="space-y-2.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="block text-sm text-white/50 hover:text-primary transition-colors font-light"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-semibold text-white/70">
              Help
            </h4>
            <div className="space-y-2.5">
              {[
                "Shipping & Returns",
                "Care Instructions",
                "Custom Orders",
                "FAQ",
                "Contact Us",
              ].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="block text-sm text-white/50 hover:text-primary transition-colors font-light"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-semibold text-white/70">
              Follow Us
            </h4>
            <p className="text-sm text-white/50 font-light leading-relaxed mb-4">
              Check out our latest creations on Instagram!
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-pink-300 transition-colors font-medium"
            >
              <Instagram size={16} />
              @diy_by_nandini
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30 font-light flex items-center gap-1">
            © 2026 MS DIY. Made with <Heart size={12} className="text-primary fill-primary" /> by Nandini
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                to="#"
                className="text-xs text-white/30 hover:text-primary transition-colors font-light"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
