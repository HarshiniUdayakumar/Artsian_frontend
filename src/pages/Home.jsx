import Navbar from "./public/Navbar";
import HeroSection from "./public/HeroSection";
import CategoryPreviewSection from "./public/CategoryPreviewSection";
import FeaturedProductsSection from "./public/FeaturedProductsSection";
import Contact from "./public/Contact";

const Home = () => {
    return (
        <>
        <Navbar />
        <HeroSection />
        <CategoryPreviewSection />
        <FeaturedProductsSection />
        <Contact />
        </>
    );
};

export default Home;