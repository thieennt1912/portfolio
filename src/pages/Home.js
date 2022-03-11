import '../App.css';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ContactBanner from '../components/ContactBanner';

const Home = () => {
    return (
        <div className="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactBanner />
        </div>
    )
}

export default Home;