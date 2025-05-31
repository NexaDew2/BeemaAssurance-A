import React from "react";
import Button from "../Button/Button";
import umberlaa from "../../assets/umberlaa.png";
import wapp from "../../assets/wapp.png";
import logo from "../../assets/logo.png"; 

function Homepage() {
    return (
        <div className="flex flex-col items-center  gap-16">
            
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-60">
               
                <div className="mb-6 md:mb-0 md:mr-12 flex items-center space-x-2">
                    <img
    src={wapp}
    alt="Whatsapp Icon"
    className="cursor-pointer h-12 w-12"
    onClick={() => window.open("https://wa.me/+918453739878", "_blank")}
  />
 <Button
  label="Whatsapp Us"
  bgColor="bg-green-900"
  textColor="text-white"
  width="w-50"
  height="h-16"
  borderRadius="rounded-full" 
  onClick={() => window.open("https://wa.me/+918453739878", "_blank")}
  style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
/>

  
</div>


                {/* Umbrella Image in the center/right */}
                <div className="flex justify-center flex-1">
                    <img
                        src={umberlaa}
                        alt="Family under Umbrella"
                        className="max-w-full h-auto md:w-[400px]"
                    />
                </div>
            </div>

            {/* Logo Banner Section */}
           <div>
  <img
    src={logo}
    alt="BeemaAssurance Logo"
    className="w-400 h-50 object-cover"
  />
</div>

        </div>
    );
}

export default Homepage;
