import Navigation from "../../organisms/HomeNavBar";
import HomeGetSection from "./HomeGetSection.tsx";
import HomeInitiative from "./HomeInitiative.tsx";

export default function HomePage() {
    return (
        <div>
            <Navigation/>
            <HomeGetSection/>
            <HomeInitiative/>
        </div>
    );
}