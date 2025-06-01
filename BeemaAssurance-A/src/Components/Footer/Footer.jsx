import React from "react";

import healthinsurance from "../../assets/healthinsurance.png";
import logo from "../../assets/logo.png";
import Icontext from "../Icontext/Icontext";

function Footer() {
    return (
        <footer>
            <div >
                {/* Image section */}
                <div className="mb-6">
                    <img
                        src={healthinsurance}
                        alt="Health Insurance Illustration"
                        className="w-400 h-100 "
                    />
                </div>

                {/* Logo and Icon Context */}
                <div className=" bg-[rgb(92,185,254)] m-0">
                    <img
                        src={logo}
                        alt="Beema Assurance Logo"
                        className="w-200 h-40"
                    />
                     <Icontext />
                </div>
                   
                
            </div>
        </footer>
    );
}
export default Footer;
