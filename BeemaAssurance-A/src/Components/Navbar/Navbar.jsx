
import React, { useState } from "react";
import Navlinks from "../Navlinks/Navlinks";
import Button from "../Button/Button";
import logo from "../../assets/logo.png";

function Navbar({
  onLogoClick,
  onClaimsClick,
  onHealthClick,
  onKnowledgeClick,
  onBuyPolicyClick,  // Added this prop
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Claims", onClick: onClaimsClick },
    { label: "Health", onClick: onHealthClick },
    { label: "Knowledge", onClick: onKnowledgeClick },
  ];

  return (
    <nav className="bg-white pr-10">
      <div className="flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="cursor-pointer" onClick={onLogoClick}>
          <img src={logo} alt="Logo" className="h-20 w-auto lg:w-90" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Navlinks
            onClaimsClick={onClaimsClick}
            onHealthClick={onHealthClick}
            onKnowledgeClick={onKnowledgeClick}
          />
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            label="Buy Policy"
            bgColor="bg-green-900"
            textColor="text-white"
            width="w-36"
            height="h-10"
            borderRadius="rounded-full"
            onClick={onBuyPolicyClick}  // Use the passed callback
          />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl focus:outline-none"
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 px-4 flex flex-col animate-fade-in">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => {
                item.onClick();
                setIsMobileMenuOpen(false);
              }}
              className={`text-left text-black font-semibold transform transition-all duration-300 ease-out opacity-0 translate-y-[-10px] animate-slide-in`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              {item.label}
            </button>
          ))}

          <Button
            label="Buy Policy"
            bgColor="bg-green-900"
            textColor="text-white"
            width="w-full"
            height="h-10"
            borderRadius="rounded-full"
            onClick={() => {
              onBuyPolicyClick();
              setIsMobileMenuOpen(false);
            }}
            className="animate-slide-in"
            style={{
              animationDelay: `${menuItems.length * 0.1}s`,
              animationFillMode: "forwards",
            }}
          />
        </div>
      )}

      {/* Custom Animations */}
      <style>
        {`
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slide-in {
            animation: slideIn 0.3s ease-out forwards;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;

