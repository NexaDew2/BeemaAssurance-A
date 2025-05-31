import React from "react";
import Navlinks from "../Navlinks/Navlinks";
import Button from "../Button/Button";
import logo from '../../assets/logo.png';

function Navbar({ onLogoClick, onClaimsClick, onHealthClick, onKnowledgeClick }) {
    return (
        <nav className="flex items-center justify-between bg-white pr-10">
            {/* Logo */}
            <div className="cursor-pointer" onClick={onLogoClick}>
                <img src={logo} alt="Logo" className="h-20 w-80" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
                <Navlinks
                    onClaimsClick={onClaimsClick}
                    onHealthClick={onHealthClick}
                    onKnowledgeClick={onKnowledgeClick}
                />
            </div>

            {/* Buy Policy Button */}
            <Button
                label="Buy Policy"
                bgColor="bg-green-900"
                textColor="text-white"
                width="w-36"
                height="h-10"
                borderRadius="rounded-full"
                onClick={() => alert("Policy purchase flow")}
            />
        </nav>
    );
}

export default Navbar;
