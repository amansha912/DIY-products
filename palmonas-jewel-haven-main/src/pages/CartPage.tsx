import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { getProductImage } from "@/components/ProductCard";

const CartPage = () => {
  const { items, removeItem, updateQty, totalPrice } = useCart();

  const shipping = totalPrice > 500 ? 0 : 49;
  const total = totalPrice + shipping;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-12 py-10">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-2">
            Shopping Bag
          </h1>
          <p className="text-sm text-muted-foreground font-light mb-8">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag
                  size={32}
                  className="text-muted-foreground"
                  strokeWidth={1.5}
                />
              </div>
              <p className="text-muted-foreground font-light mb-6 text-lg">
                Your bag is empty
              </p>
              <Link to="/" className="craft-btn">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-4 lg:gap-5 p-4 bg-card rounded-2xl shadow-sm border border-border/50"
                  >
                    <Link
                      to={`/product/${item.id}`}
                      className="w-24 h-24 lg:w-28 lg:h-28 flex-shrink-0 overflow-hidden bg-muted rounded-xl"
                    >
                      <img
                        src={getProductImage(item.image)}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <Link
                            to={`/product/${item.id}`}
                            className="text-sm font-medium hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors p-1"
                            aria-label="Remove"
                          >
                            <X size={16} strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 font-light">
                          {item.category}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border rounded-full overflow-hidden">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Minus size={12} strokeWidth={2} />
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center text-xs font-medium">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Plus size={12} strokeWidth={2} />
                          </button>
                        </div>
                        <span className="text-sm font-semibold">
                          ₹{(item.price * item.qty).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-2xl p-6 lg:p-8 sticky top-24 shadow-sm border border-border/50">
                  <h2 className="text-sm tracking-widest uppercase font-semibold mb-6">
                    Order Summary
                  </h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm font-light">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm font-light">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-accent font-medium">Free</span>
                        ) : (
                          `₹${shipping}`
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="text-xl font-bold">
                        ₹{total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <button className="craft-btn w-full justify-center mb-3">
                    Proceed to Checkout
                  </button>
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase mt-2"
                  >
                    <ArrowLeft size={14} />
                    Continue Shopping
                  </Link>

                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-[10px] text-muted-foreground text-center mb-2">
                      Secure Payment Options
                    </p>
                    <div className="flex justify-center gap-4 text-[10px] text-muted-foreground tracking-wider uppercase">
                      <span>UPI</span>
                      <span>Cards</span>
                      <span>Wallets</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
