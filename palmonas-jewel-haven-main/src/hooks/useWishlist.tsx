import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface WishlistContextValue {
  items: string[];
  toggleItem: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ms-diy-wishlist");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("ms-diy-wishlist", JSON.stringify(items));
  }, [items]);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isWishlisted = (id: string) => items.includes(id);

  return (
    <WishlistContext.Provider
      value={{ items, toggleItem, isWishlisted, totalItems: items.length }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist(): WishlistContextValue {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
