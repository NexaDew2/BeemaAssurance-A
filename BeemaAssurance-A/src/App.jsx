import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Claims from "./Components/Claims/Claims";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const homeRef = useRef(null);
  const claimsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        onLogoClick={() => scrollToSection(homeRef)}
        onClaimsClick={() => scrollToSection(claimsRef)}
        onBuyPolicyClick={() => scrollToSection(contactRef)}
      />

      <div ref={homeRef}>
        <Homepage />
      </div>

      <div ref={claimsRef}>
        <Claims onReachOutClick={() => scrollToSection(contactRef)} />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;


