import React, { useState } from "react";

export default function SelectInput({
    value,
    className = "",
    children,
    options = [],
    ...props
}) {
  

    return (
        <div>
            <select
                {...props}
                className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ${className}`}
                value={value}
                
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
