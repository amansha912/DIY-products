import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ReviewsSection from "@/components/ReviewsSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";
import {
  crochetProducts,
  fuzzywireProducts,
  braceletProducts,
  phoneCharmProducts,
  lippanArtProducts,
} from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />

        <CategorySection
          id="crochet"
          title="Crochet Products"
          subtitle="Handmade with yarn"
          products={crochetProducts}
          subcategories={["Keychains", "Flowers", "Flower Bouquet", "Car Hangings"]}
          accent="rose"
        />

        <CategorySection
          id="fuzzywire"
          title="Fuzzywire Products"
          subtitle="Pipe cleaner art"
          products={fuzzywireProducts}
          subcategories={["Flowers", "Flower Bouquet", "Flower Pots"]}
          accent="lavender"
        />

        <CategorySection
          id="bracelets"
          title="Bracelets"
          subtitle="Wrist candy"
          products={braceletProducts}
          accent="sage"
        />

        <CategorySection
          id="phone-charms"
          title="Phone Charms"
          subtitle="Accessorize your phone"
          products={phoneCharmProducts}
          accent="rose"
        />

        <CategorySection
          id="lippan-art"
          title="Lippan Art"
          subtitle="Traditional mirror work"
          products={lippanArtProducts}
          accent="lavender"
        />

        <ReviewsSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
