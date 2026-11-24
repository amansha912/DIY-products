import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/products";

const ReviewsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium px-4 py-1.5 rounded-full mb-4 bg-amber-100 text-amber-700">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <div className="craft-divider mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50"
            >
              <Quote
                size={28}
                className="text-primary/40 mb-3"
                strokeWidth={1}
              />
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5">
                "{review.text}"
              </p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    className={
                      j < review.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-border"
                    }
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-foreground">
                {review.name}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                {review.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
