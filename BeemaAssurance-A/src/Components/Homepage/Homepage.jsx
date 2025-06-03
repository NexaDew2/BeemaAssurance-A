import React from "react";
import Button from "../Button/Button";
import umberlaa from "../../assets/umberlaa.png";
import wapp from "../../assets/wapp.png";
import logo from "../../assets/logo.png"; 

function Homepage() {
    return (

        <div className="flex flex-col items-center gap-10  "> 

  
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-12 md:gap-60">
    
    {/* WhatsApp Icon + Button */}
    <div className="mb-6 md:mb-0 md:mr-12 flex flex-row items-center space-x-2 pt-30">
  <img
    src={wapp}
    alt="Whatsapp Icon"
    className="cursor-pointer h-12 w-12"
    onClick={() => window.open("https://wa.me/+919823065504", "_blank")}
  />
  <Button
    label="Whatsapp Us"
    bgColor="bg-green-900"
    textColor="text-white"
    width="w-48 md:w-50"
    height="h-12 md:h-16"
    borderRadius="rounded-full"
    onClick={() => window.open("https://wa.me/+919823065504", "_blank")}
    style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
  />
</div>
    
    {/* Umbrella Image */}
    <div className="flex justify-center flex-1 pt-20">
      <img
        src={umberlaa}
        alt="Family under Umbrella"
        className="max-w-full h-auto w-64 md:w-[400px]"
      />
    </div>
  </div>

            {/* Logo Banner Section */}
          <div>
  <img
    src={logo}
    alt="BeemaAssurance Logo"
    className="w-60 h-12 object-cover lg:w-[1560px] lg:h-[200px]"
  />
</div>


        </div>
    );
}

export default Homepage;
