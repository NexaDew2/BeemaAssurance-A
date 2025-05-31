import React from "react";

function Input({ label, name, type = "text", value, onChange, rows }) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            {rows ? (
                <textarea
                    id={name}
                    name={name}
                    rows={rows}
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            )}
        </div>
    );
}

export default Input;
