import Navigation from "../../organisms/HomeNavBar";
import HomeGetSection from "./HomeGetSection.tsx";
import HomeInitiative from "./HomeInitiative.tsx";
import HomeWhySection from "./HomeWhySection.tsx";
import HomeWhatSection from "./HomeWhatSection.tsx";

export default function HomePage() {
    return (
        <div>
            <Navigation/>
            <HomeGetSection/>
            <HomeInitiative/>
            <HomeWhySection/>
            <HomeWhatSection/>
        </div>
    );
}