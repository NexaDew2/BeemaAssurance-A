import React from "react";
import healthinsurance from '../../assets/healthinsurance.png';
import logo from "../../assets/logo.png";
import insta from '../../assets/insta.png';
import phone from '../../assets/phone.png';

function Footer() {
    return (
        <footer role="contentinfo">
            <div>
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
                    <div>
                        <h2 className="text-xl text-center">© 2025 BeemaAssurance. All rights reserved.</h2>
                    </div>

                    <div className="flex justify-between items-center w-full px-4 py-2">
                        {/* Instagram */}
                        <div className="flex items-center gap-2">
                            <img src={insta} alt="Instagram" className="w-10 h-8" />
                            <p className="text-black">@beemaassurance</p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2 px-2 py-1 rounded">
                            <img src={phone} alt="Phone" className="w-6 h-6" />
                            <p className="text-black">+91 84537 39878</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;