import React, { useState } from "react";
import Navlinks from "../Navlinks/Navlinks";
import Button from "../Button/Button";
import logo from "../../assets/logo.png";

function Navbar({
  onLogoClick,
  onClaimsClick,
  onHealthClick,
  onKnowledgeClick,
  onBuyPolicyClick,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Claims", onClick: onClaimsClick },
    { label: "Health", onClick: onHealthClick },
    { label: "Knowledge", onClick: onKnowledgeClick },
  ];

  return (
    <nav className="bg-white pr-10 fixed top-0 left-0 w-full z-50 ">
      <div className="flex items-center justify-between mx-auto ">
        {/* Logo */}
        <div className="cursor-pointer" onClick={onLogoClick}>
          <img src={logo} alt="Logo" className="h-20 w-auto lg:w-90" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Navlinks
            onClaimsClick={onClaimsClick}
            onHealthClick={onHealthClick}
            onKnowledgeClick={onKnowledgeClick}
          />
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button
            label="Buy Policy"
            bgColor="bg-green-900"
            textColor="text-white"
            width="w-36"
            height="h-10"
            borderRadius="rounded-full"
            onClick={onBuyPolicyClick}
          />
        </div>

        {/* Mobile/Tablet Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-3 px-4 flex flex-col animate-fade-in">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => {
                item.onClick();
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-black font-semibold transform transition-all duration-300 opacity-0 translate-y-[-10px] animate-slide-in"
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

      {/* Animations */}
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
