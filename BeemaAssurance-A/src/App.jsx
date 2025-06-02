import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Claims from "./Components/Claims/Claims";
import HealthInsurance from "./Components/HealthInsurance/HealthInsurance";
import Knowledge from "./Components/Knowledge/Knowledge";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const homeRef = useRef(null);
  const claimsRef = useRef(null);
  const healthRef = useRef(null);
  const knowledgeRef = useRef(null);
  const contactRef = useRef(null);  // <-- Add this

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        onLogoClick={() => scrollToSection(homeRef)}
        onClaimsClick={() => scrollToSection(claimsRef)}
        onHealthClick={() => scrollToSection(healthRef)}
        onKnowledgeClick={() => scrollToSection(knowledgeRef)}
        onBuyPolicyClick={() => scrollToSection(contactRef)}  // <-- Add this
      />

      <div ref={homeRef}>
        <Homepage />
      </div>
      
      <div ref={healthRef}>
          <HealthInsurance />
        </div>

      <div ref={claimsRef}>
        <Claims onReachOutClick={() => scrollToSection(contactRef)} />
        
      </div>

      

        <div ref={knowledgeRef}>
          <Knowledge />
        </div>

      <div ref={contactRef}> 
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

