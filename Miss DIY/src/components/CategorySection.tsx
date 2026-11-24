import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

interface CategorySectionProps {
  id: string;
  title: string;
  subtitle?: string;
  products: Product[];
  subcategories?: string[];
  accent?: "rose" | "sage" | "lavender";
}

const accentColors = {
  rose: "from-primary/10 to-transparent",
  sage: "from-accent/10 to-transparent",
  lavender: "from-secondary/10 to-transparent",
};

const accentBadge = {
  rose: "bg-primary/15 text-primary",
  sage: "bg-accent/15 text-accent-foreground",
  lavender: "bg-secondary/15 text-secondary-foreground",
};

const CategorySection = ({
  id,
  title,
  subtitle,
  products,
  subcategories,
  accent = "rose",
}: CategorySectionProps) => {
  // Group products by subcategory if subcategories are provided
  const hasSubcategories = subcategories && subcategories.length > 0;

  return (
    <section
      id={id}
      className={`py-16 lg:py-24 bg-gradient-to-b ${accentColors[accent]}`}
      style={{ scrollMarginTop: "5rem" }}
    >
      <div className="container mx-auto px-4 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          {subtitle && (
            <span
              className={`inline-block text-xs tracking-[0.3em] uppercase font-medium px-4 py-1.5 rounded-full mb-4 ${accentBadge[accent]}`}
            >
              {subtitle}
            </span>
          )}
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
            {title}
          </h2>
          <div className="craft-divider mt-4" />
        </motion.div>

        {hasSubcategories ? (
          // Render grouped by subcategory
          <div className="space-y-14">
            {subcategories.map((sub) => {
              const subProducts = products.filter(
                (p) => p.subcategory === sub
              );
              if (subProducts.length === 0) return null;
              return (
                <div key={sub}>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-heading text-xl lg:text-2xl font-semibold text-foreground mb-6 flex items-center gap-3"
                  >
                    <span className="w-8 h-0.5 bg-primary rounded-full" />
                    {sub}
                  </motion.h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                    {subProducts.map((product, i) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Flat grid
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
