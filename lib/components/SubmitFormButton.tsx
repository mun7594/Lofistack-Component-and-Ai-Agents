"use client";

import React, { useState } from "react";

interface SubmitFormButtonProps {
  text?: string;
  onClick?: () => void;
}

export function SubmitFormButton({
  text = "Submit Form",
  onClick,
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
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={onClick}
        className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-300 hover:shadow-black/50"
      >
        <span
          className={isHovering ? "submit-button-text" : ""}
        >
          {text}
        </span>
        <svg
          className={`w-5 h-5 text-white flex-shrink-0 ${
            isHovering ? "submit-button-arrow" : ""
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
      </button>
    </>
  );
}
