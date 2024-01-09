import Navigation from "../../organisms/HomeNavBar";
import HomeGetSection from "./HomeGetSection.tsx";
import HomeInitiative from "./HomeInitiative.tsx";
import HomeWhySection from "./HomeWhySection.tsx";
import HomeWhatSection from "./HomeWhatSection.tsx";
import HomeWhatNextSection from "./HomeWhatNextSection.tsx";
import Footer from "../../organisms/Footer.tsx";

export default function HomePage() {
    return (
        <div>
            <Navigation currentScreen="Home"/>
            <HomeGetSection/>
            <HomeInitiative/>
            <HomeWhySection/>
            <HomeWhatSection/>
            <HomeWhatNextSection/>
            <Footer/>
        </div>
    );
}