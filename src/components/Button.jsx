import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600 dark:bg-blue-500",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button 
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 ${bgColor} ${textColor} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
}