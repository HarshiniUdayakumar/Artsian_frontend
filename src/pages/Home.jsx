import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoryPreviewSection from "./components/CategoryPreviewSection";
import FeaturedProductsSection from "./components/FeaturedProductsSection";
import Contact from "./components/Contact";

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