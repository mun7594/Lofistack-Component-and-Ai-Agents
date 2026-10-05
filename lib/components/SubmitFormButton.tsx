"use client";

import React, { useState } from "react";

interface SubmitFormButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export function SubmitFormButton({
  text = "Submit Form",
  onClick,
  disabled = false,
  isLoading = false,
}: SubmitFormButtonProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <style>{`
        @keyframes rotateArrow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes flipText {
          0% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(-1);
          }
        }
        .submit-button-arrow {
          animation: rotateArrow 0.6s ease-in-out;
        }
        .submit-button-text {
          animation: flipText 0.6s ease-in-out;
        }
      `}</style>

      <button
        onMouseEnter={() => !disabled && setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={onClick}
        disabled={disabled || isLoading}
        className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
          ${
            disabled || isLoading
              ? "bg-gray-400 text-gray-600 cursor-not-allowed opacity-60"
              : "bg-black text-white hover:shadow-lg hover:shadow-black/50 active:scale-95 focus:ring-offset-white"
          }
        `}
      >
        <span
          className={isHovering && !disabled ? "submit-button-text" : ""}
        >
          {isLoading ? "Loading..." : text}
        </span>
        {!isLoading && (
          <svg
            className={`w-5 h-5 text-white flex-shrink-0 ${
              isHovering && !disabled ? "submit-button-arrow" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
        {isLoading && (
          <svg
            className="w-5 h-5 text-gray-600 flex-shrink-0 animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M12 2a10 10 0 0110 10"
            />
          </svg>
        )}
      </button>
    </>
  );
}
