import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Claims from "./Components/Claims/Claims";
//import HealthInsurance from "./Components/HealthInsurance/HealthInsurance";
//import Knowledge from "./Components/Knowledge/Knowledge";

function App() {
    const homeRef = useRef(null);
    const claimsRef = useRef(null);
    //const healthRef = useRef(null);
    //const knowledgeRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Navbar
                onLogoClick={() => scrollToSection(homeRef)}
                onClaimsClick={() => scrollToSection(claimsRef)}
                //onHealthClick={() => scrollToSection(healthRef)}
                //onKnowledgeClick={() => scrollToSection(knowledgeRef)}
            />

            <div ref={homeRef}>
                <Homepage />
            </div>

            <div ref={claimsRef}>
                <Claims />
            </div>

           {/* <div ref={healthRef}>
                <HealthInsurance />
            </div>

            <div ref={knowledgeRef}>
                <Knowledge />
            </div>*/}
        </>
    );
}

export default App;
