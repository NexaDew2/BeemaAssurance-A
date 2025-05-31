import React from "react";

function Navlinks({ onClaimsClick, onHealthClick, onKnowledgeClick }) {
    return (
        <ul className="flex gap-12 text-lg font-medium text-gray-700">
            <li>
                <button
                    onClick={onClaimsClick}
                    className="hover:text-blue-600 transition"
                >
                    Claims
                </button>
            </li>
            <li>
                <button
                    onClick={onHealthClick}
                    className="hover:text-blue-600 transition"
                >
                    Health Insurance
                </button>
            </li>
            <li>
                <button
                    onClick={onKnowledgeClick}
                    className="hover:text-blue-600 transition"
                >
                    Knowledge
                </button>
            </li>
        </ul>
    );
}

export default Navlinks;
