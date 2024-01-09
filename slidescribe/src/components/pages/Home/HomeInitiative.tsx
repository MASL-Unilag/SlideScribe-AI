import Microsoft from "../../../assets/Microsoft.svg";
import ADC from "../../../assets/ADC.svg";

export default function HomeInitiative() {
    return (
        <section className="py-h bg-neutral-0 m-auto flex flex-col justify-center items-center">
            <h2 className="text-heading2 font-semibold text-center mb-[1.13rem]">An initiative of</h2>
            <div className="flex gap-6">
                <Company name="Microsoft" logo={Microsoft}/>
                <Company name="Microsoft ADC" logo={ADC}/>
            </div>
        </section>
    )
}

function Company({name, logo}: { logo: string, name: string }) {
    return (
        <div className="flex justify-center items-center gap-2">
            <img src={logo} alt={name}/>
            {name}
        </div>
    )
}