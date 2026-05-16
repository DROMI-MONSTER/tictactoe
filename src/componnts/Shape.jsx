import React from 'react';

/**
 * Cross 'X' Component
 * Default styling: 3rem x 3rem (w-12 h-12), red color.
 */
export const Cross = ({ className = "" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-12 h-12 text-red-500 ${className}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
};

/**
 * Circle 'O' Component
 * Default styling: 3rem x 3rem (w-12 h-12), blue color.
 */
export const Circle = ({ className = "" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-12 h-12 text-blue-500 ${className}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
        </svg>
    );
};