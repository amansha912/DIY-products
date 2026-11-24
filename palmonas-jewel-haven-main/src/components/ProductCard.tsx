import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { toast } from "sonner";

// ── Image imports ──────────────────────────────────
import bowKeychain from "@/assets/bow-keychain.jpg";
import pastelTulips from "@/assets/pastel-tulips.jpg";
import lilyValleyHanging from "@/assets/lily-valley-hanging.jpg";
import jellyfishKeychains from "@/assets/jellyfish-keychains.jpg";
import lilyFlowers from "@/assets/lily-flowers.jpg";
import crochetTulips from "@/assets/crochet-tulips.jpg";
import pinkLilyBouquet from "@/assets/pink-lily-bouquet.jpg";
import lilyBouquetWrapped from "@/assets/lily-bouquet-wrapped.jpg";
import fuzzywireFlowers from "@/assets/fuzzywire-flowers.png";
import fuzzywireBouquet from "@/assets/fuzzywire-bouquet.png";
import fuzzywireFlowerpot from "@/assets/fuzzywire-flowerpot.png";
import handmadeBracelets from "@/assets/handmade-bracelets.png";
import phoneCharms from "@/assets/phone-charms.png";
import lippanArt from "@/assets/lippan-art.png";

const imageMap: Record<string, string> = {
  "bow-keychain": bowKeychain,
  "pastel-tulips": pastelTulips,
  "lily-valley-hanging": lilyValleyHanging,
  "jellyfish-keychains": jellyfishKeychains,
  "lily-flowers": lilyFlowers,
  "crochet-tulips": crochetTulips,
  "pink-lily-bouquet": pinkLilyBouquet,
  "lily-bouquet-wrapped": lilyBouquetWrapped,
  "fuzzywire-flowers": fuzzywireFlowers,
  "fuzzywire-bouquet": fuzzywireBouquet,
  "fuzzywire-flowerpot": fuzzywireFlowerpot,
  "handmade-bracelets": handmadeBracelets,
  "phone-charms": phoneCharms,
  "lippan-art": lippanArt,
};

export const getProductImage = (imageKey: string): string => {
  return imageMap[imageKey] || bowKeychain;
};

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const { toggleItem, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const img = getProductImage(product.image);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} added to cart!`, {
      duration: 2000,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product.id);
    toast(wishlisted ? "Removed from wishlist" : "Added to wishlist ♥", {
      duration: 1500,
    });
  };

  return (
    <div className="product-card group" id={`product-${product.id}`}>
      <Link to={`/product/${product.id}`}>
        {/* 1:1 Square image */}
        <div className="product-card-image aspect-square relative">
          <img
            src={img}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={400}
            height={400}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-wider uppercase px-3 py-1 rounded-full font-medium shadow-sm">
              {product.badge}
            </span>
          )}

          {/* Hover overlay buttons */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
          <div className="absolute bottom-3 left-3 right-3 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={handleToggleWishlist}
              className="w-10 h-10 bg-card/95 backdrop-blur-sm flex items-center justify-center rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Toggle wishlist"
            >
              <Heart
                size={16}
                strokeWidth={1.5}
                fill={wishlisted ? "currentColor" : "none"}
                className={wishlisted ? "text-primary" : ""}
              />
            </button>
            <button
              onClick={handleAddToCart}
              className="w-10 h-10 bg-card/95 backdrop-blur-sm flex items-center justify-center rounded-full shadow-md hover:bg-accent hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="p-4 space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium tracking-wide hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={11}
              className={
                i < Math.floor(product.rating)
                  ? "text-amber-400 fill-amber-400"
                  : "text-border"
              }
            />
          ))}
          <span className="text-[10px] text-muted-foreground ml-1">
            ({product.reviews})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-foreground">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
