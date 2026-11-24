import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  Star,
  Minus,
  Plus,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard, { getProductImage } from "@/components/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { toast } from "sonner";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const { toggleItem, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const img = getProductImage(product.image);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, qty);
    toast.success(`${product.name} added to cart!`, { duration: 2000 });
  };

  const handleToggleWishlist = () => {
    toggleItem(product.id);
    toast(wishlisted ? "Removed from wishlist" : "Added to wishlist ♥", {
      duration: 1500,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 lg:px-12 py-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link
              to="/"
              className="hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="hover:text-foreground transition-colors">
              {product.category}
            </span>
            <ChevronRight size={12} />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-12 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Product image — square */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square overflow-hidden bg-muted rounded-3xl group cursor-zoom-in shadow-sm"
            >
              <img
                src={img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={800}
                height={800}
              />
            </motion.div>

            {/* Product details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              {product.badge && (
                <span className="inline-block text-xs tracking-wider uppercase text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                  {product.badge}
                </span>
              )}
              <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-amber-400 fill-amber-400"
                          : "text-border"
                      }
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-foreground">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full font-medium">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="mb-5">
                <p className="text-xs tracking-wider uppercase font-semibold mb-1">
                  Material
                </p>
                <p className="text-sm text-muted-foreground font-light">
                  {product.material}
                </p>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-xs tracking-wider uppercase font-semibold mb-3">
                  Quantity
                </p>
                <div className="flex items-center border border-border rounded-full w-fit overflow-hidden">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus size={14} strokeWidth={2} />
                  </button>
                  <span className="w-12 h-10 flex items-center justify-center text-sm font-medium">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="craft-btn flex-1 flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={16} strokeWidth={1.5} />
                  Add to Cart
                </button>
                <button
                  onClick={handleToggleWishlist}
                  className={`w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                    wishlisted
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary hover:text-primary"
                  }`}
                  aria-label="Toggle wishlist"
                >
                  <Heart
                    size={18}
                    strokeWidth={1.5}
                    fill={wishlisted ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "Handmade", sub: "With Love" },
                  { label: "Free Shipping", sub: "Orders over ₹500" },
                  { label: "Easy Returns", sub: "7-day policy" },
                ].map((badge) => (
                  <div key={badge.label}>
                    <p className="text-xs font-semibold tracking-wide">
                      {badge.label}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {badge.sub}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="py-14 lg:py-18">
            <div className="container mx-auto px-4 lg:px-12">
              <h2 className="font-heading text-2xl lg:text-3xl text-center mb-8 font-bold">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
