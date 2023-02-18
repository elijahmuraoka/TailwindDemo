import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/features/FeaturesSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import CtaSection from './components/cta/CtaSection';
import Footer from './components/Footer';

function App() {
    return (
        <div id="App">
            <NavBar />
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CtaSection />
            <Footer />
        </div>
    );
}

export default App;
