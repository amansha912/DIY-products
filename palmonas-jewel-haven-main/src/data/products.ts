export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  subcategory?: string;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  material: string;
}

// ─── Crochet Products ───────────────────────────────

export const crochetProducts: Product[] = [
  {
    id: "c1",
    name: "Red Bow Crochet Keychain",
    price: 299,
    originalPrice: 449,
    image: "bow-keychain",
    category: "Crochet Products",
    subcategory: "Keychains",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    description:
      "A charming handmade crochet bow keychain in vibrant red. Perfect as a gift or personal accessory.",
    material: "100% Cotton Yarn, Gold-tone Hardware",
  },
  {
    id: "c2",
    name: "Jellyfish Keychain Duo",
    price: 499,
    originalPrice: 699,
    image: "jellyfish-keychains",
    category: "Crochet Products",
    subcategory: "Keychains",
    rating: 4.6,
    reviews: 45,
    badge: "New",
    description:
      "Adorable pair of amigurumi jellyfish keychains in baby blue and soft pink. Cute and collectible.",
    material: "Cotton Yarn, Ball Chain Hardware",
  },
  {
    id: "c3",
    name: "Pastel Tulip Crochet Flowers",
    price: 799,
    image: "pastel-tulips",
    category: "Crochet Products",
    subcategory: "Flowers",
    rating: 4.9,
    reviews: 89,
    badge: "Best Seller",
    description:
      "A beautiful set of 3 pastel crochet tulips in yellow, pink, and blue. Everlasting flowers that never wilt.",
    material: "Soft Acrylic Yarn, Floral Wire Stems",
  },
  {
    id: "c4",
    name: "Crochet Tulip Trio",
    price: 649,
    image: "crochet-tulips",
    category: "Crochet Products",
    subcategory: "Flowers",
    rating: 4.5,
    reviews: 34,
    badge: "New",
    description:
      "Classic crochet tulips in red and pink shades with realistic green leaves and stems.",
    material: "100% Cotton Yarn, Floral Wire",
  },
  {
    id: "c5",
    name: "Wrapped Crochet Flower Bouquet",
    price: 1499,
    image: "lily-bouquet-wrapped",
    category: "Crochet Products",
    subcategory: "Flower Bouquet",
    rating: 4.7,
    reviews: 78,
    badge: "New",
    description:
      "A beautifully wrapped gift bouquet featuring handcrafted crochet flowers with pink tissue paper and ribbon.",
    material: "Cotton Yarn, Gift Wrap, Ribbon",
  },
  {
    id: "c6",
    name: "Pink Crochet Bouquet",
    price: 1199,
    image: "pink-lily-bouquet",
    category: "Crochet Products",
    subcategory: "Flower Bouquet",
    rating: 4.9,
    reviews: 201,
    description:
      "A lush all-pink crochet flower bouquet. Gorgeous home décor that lasts forever.",
    material: "Cotton Yarn, Floral Wire",
  },
  {
    id: "c7",
    name: "Lily of the Valley Car Hanging",
    price: 599,
    image: "lily-valley-hanging",
    category: "Crochet Products",
    subcategory: "Car Hangings",
    rating: 4.7,
    reviews: 67,
    description:
      "Delicate crocheted lily of the valley flowers on a braided hanging cord. A beautiful car mirror accessory.",
    material: "Cotton Yarn, Beaded Accent",
  },
  {
    id: "c8",
    name: "Sunflower Car Hanging",
    price: 549,
    image: "lily-valley-hanging",
    category: "Crochet Products",
    subcategory: "Car Hangings",
    rating: 4.6,
    reviews: 12,
    badge: "New",
    description: "A cheerful sunflower car hanging with braided cord. Brightens up any car mirror.",
    material: "Cotton Yarn, Beaded Accent",
  },
];

// ─── Fuzzywire Products ─────────────────────────────

export const fuzzywireProducts: Product[] = [
  {
    id: "f1",
    name: "Fuzzywire Rose Stems",
    price: 449,
    image: "fuzzywire-flowers",
    category: "Fuzzywire Products",
    subcategory: "Flowers",
    rating: 4.8,
    reviews: 56,
    badge: "Best Seller",
    description:
      "Delicate pipe cleaner roses in pink and lilac. Each stem is hand-twisted with love.",
    material: "Pipe Cleaner, Velvet Yarn",
  },
  {
    id: "f2",
    name: "Mixed Fuzzywire Flowers",
    price: 599,
    image: "fuzzywire-flowers",
    category: "Fuzzywire Products",
    subcategory: "Flowers",
    rating: 4.7,
    reviews: 42,
    description:
      "A colorful mix of handmade pipe cleaner flowers — tulips, roses, and daisies in pastel shades.",
    material: "Pipe Cleaner, Craft Wire",
  },
  {
    id: "f3",
    name: "Lily Fuzzywire Bouquet",
    price: 899,
    image: "fuzzywire-bouquet",
    category: "Fuzzywire Products",
    subcategory: "Flower Bouquet",
    rating: 4.8,
    reviews: 156,
    badge: "Best Seller",
    description:
      "A stunning mixed bouquet of handcrafted fuzzywire lily flowers in pink and lavender.",
    material: "Pipe Cleaner, Velvet Yarn",
  },
  {
    id: "f4",
    name: "Pastel Fuzzywire Gift Bouquet",
    price: 1299,
    image: "fuzzywire-bouquet",
    category: "Fuzzywire Products",
    subcategory: "Flower Bouquet",
    rating: 4.9,
    reviews: 98,
    badge: "New",
    description:
      "A premium gift bouquet with fuzzywire flowers in kraft paper wrapping. Perfect for special occasions.",
    material: "Pipe Cleaner, Kraft Paper, Ribbon",
  },
  {
    id: "f5",
    name: "Mini Rose Flower Pot",
    price: 699,
    image: "fuzzywire-flowerpot",
    category: "Fuzzywire Products",
    subcategory: "Flower Pots",
    rating: 4.6,
    reviews: 34,
    description:
      "A cute ceramic pot filled with handmade pipe cleaner mini roses. Perfect desk décor.",
    material: "Pipe Cleaner, Ceramic Pot",
  },
  {
    id: "f6",
    name: "Daisy Garden Flower Pot",
    price: 849,
    image: "fuzzywire-flowerpot",
    category: "Fuzzywire Products",
    subcategory: "Flower Pots",
    rating: 4.7,
    reviews: 28,
    badge: "New",
    description:
      "Cheerful daisies in a hand-painted ceramic pot. Brings color to any room without watering!",
    material: "Pipe Cleaner, Hand-painted Ceramic Pot",
  },
];

// ─── Other Categories ───────────────────────────────

export const braceletProducts: Product[] = [
  {
    id: "b1",
    name: "Pastel Bead Bracelet",
    price: 249,
    image: "handmade-bracelets",
    category: "Bracelets",
    rating: 4.7,
    reviews: 89,
    badge: "Best Seller",
    description:
      "A delicate handmade bracelet with pastel glass beads and a dainty charm. Perfect everyday accessory.",
    material: "Glass Beads, Elastic Cord, Metal Charm",
  },
  {
    id: "b2",
    name: "Friendship Bracelet Set",
    price: 399,
    originalPrice: 549,
    image: "handmade-bracelets",
    category: "Bracelets",
    rating: 4.8,
    reviews: 134,
    description:
      "Set of 3 matching friendship bracelets in coordinating pastel colors. Share with your besties!",
    material: "Glass Beads, Nylon Thread",
  },
  {
    id: "b3",
    name: "Crystal Charm Bracelet",
    price: 349,
    image: "handmade-bracelets",
    category: "Bracelets",
    rating: 4.5,
    reviews: 56,
    badge: "New",
    description:
      "Elegant bracelet featuring tiny crystal charms on a gold-tone chain. Handmade with precision.",
    material: "Crystal Beads, Gold-tone Chain",
  },
];

export const phoneCharmProducts: Product[] = [
  {
    id: "p1",
    name: "Floral Phone Charm",
    price: 199,
    image: "phone-charms",
    category: "Phone Charms",
    rating: 4.6,
    reviews: 67,
    badge: "Best Seller",
    description:
      "A sweet beaded phone charm with tiny flower beads and a lobster clasp. Brighten up your phone!",
    material: "Glass Beads, Nylon Cord, Metal Clasp",
  },
  {
    id: "p2",
    name: "Butterfly Phone Strap",
    price: 249,
    image: "phone-charms",
    category: "Phone Charms",
    rating: 4.8,
    reviews: 45,
    badge: "New",
    description:
      "Adorable butterfly-themed phone strap with pastel beads. Cute and functional.",
    material: "Acrylic Beads, Waxed Cord",
  },
  {
    id: "p3",
    name: "Rainbow Bead Phone Loop",
    price: 179,
    image: "phone-charms",
    category: "Phone Charms",
    rating: 4.5,
    reviews: 38,
    description:
      "A fun rainbow-colored bead loop that attaches to your phone case. Add a pop of color!",
    material: "Glass Beads, Elastic Loop",
  },
];

export const lippanArtProducts: Product[] = [
  {
    id: "l1",
    name: "Round Mirror Lippan Art",
    price: 1499,
    image: "lippan-art",
    category: "Lippan Art",
    rating: 4.9,
    reviews: 42,
    badge: "Best Seller",
    description:
      "A stunning circular Lippan art piece with intricate mirror work on white clay. Traditional Indian wall décor.",
    material: "Clay, Mirror Pieces, Acrylic Paint",
  },
  {
    id: "l2",
    name: "Mandala Lippan Art Frame",
    price: 1999,
    originalPrice: 2499,
    image: "lippan-art",
    category: "Lippan Art",
    rating: 4.8,
    reviews: 67,
    description:
      "A beautiful mandala-pattern Lippan art piece framed in wood. Statement wall art for your home.",
    material: "Clay, Mirror Pieces, Wooden Frame",
  },
  {
    id: "l3",
    name: "Mini Lippan Art Coasters (Set of 4)",
    price: 899,
    image: "lippan-art",
    category: "Lippan Art",
    rating: 4.7,
    reviews: 23,
    badge: "New",
    description:
      "Functional art — a set of 4 mini Lippan art coasters with mirror detailing. Great housewarming gift.",
    material: "Clay, Mirror Pieces, Cork Base",
  },
];

// ─── All products ───────────────────────────────────

export const products: Product[] = [
  ...crochetProducts,
  ...fuzzywireProducts,
  ...braceletProducts,
  ...phoneCharmProducts,
  ...lippanArtProducts,
];

// ─── Category helpers ───────────────────────────────

export const categories = [
  {
    name: "Crochet Products",
    id: "crochet",
    subcategories: ["Keychains", "Flowers", "Flower Bouquet", "Car Hangings"],
  },
  {
    name: "Fuzzywire Products",
    id: "fuzzywire",
    subcategories: ["Flowers", "Flower Bouquet", "Flower Pots"],
  },
  { name: "Bracelets", id: "bracelets", subcategories: [] },
  { name: "Phone Charms", id: "phone-charms", subcategories: [] },
  { name: "Lippan Art", id: "lippan-art", subcategories: [] },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsBySubcategory(
  category: string,
  subcategory: string
): Product[] {
  return products.filter(
    (p) => p.category === category && p.subcategory === subcategory
  );
}

export const reviews = [
  {
    id: 1,
    name: "Priya S.",
    rating: 5,
    text: "Absolutely adorable! The crochet flowers look even more beautiful in person. Will definitely be ordering more pieces.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Ananya M.",
    rating: 5,
    text: "The keychain quality is amazing — so cute and sturdy! Perfect gift for friends. The craftsmanship is lovely.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Riya K.",
    rating: 4,
    text: "Beautiful packaging and fast delivery. The bouquet is delicate and looks so real — perfect for gifting.",
    date: "3 weeks ago",
  },
];
