// Component data - Enhanced with full details!
// Matches the structure from Lofistack colleague's site

export interface ComponentProp {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface ComponentFile {
  name: string;
  language: string;
  content: string;
}

export interface Component {
  id: string;
  slug: string;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  createdDate: string;
  week: number;
  componentNumber: number;
  category: string;
  tags: string[];
  dependencies: string;
  techStack: string[];
  files: ComponentFile[];
  prompt: string;
  codeLink: string;
  liveLink?: string;
  accessibility: string;
  relatedProps: ComponentProp[];
  features: string[];
}

export const components: Component[] = [
  {
    id: "6",
    slug: "before-after-slider",
    name: "Before-After Slider",
    type: "slider",
    description: "Interactive image comparison slider with drag and touch support for before/after transformations",
    longDescription:
      "A professional-grade before-after image slider component that lets users compare two images by dragging a divider across. Perfect for portfolios, renovation companies, makeover services, or any transformation showcase. Features smooth drag interactions, responsive design, full mobile/touch support, and accessible labels. The component is lightweight, performant, and easy to customize with custom labels and aspect ratios.",
    thumbnail: "",
    createdDate: "2026-10-12",
    week: 2,
    componentNumber: 2,
    category: "Slider",
    tags: ["Interactive", "Comparison", "Image Slider", "Drag-Drop", "Mobile-Friendly", "Transformation"],
    dependencies: "React 18+",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Browser APIs"],
    files: [
      {
        name: "BeforeAfterSlider.tsx",
        language: "typescript",
        content: `"use client";

import { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: "square" | "16:9" | "4:3" | "auto";
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  aspectRatio = "16:9",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square":
        return "aspect-square";
      case "4:3":
        return "aspect-video";
      case "16:9":
        return "aspect-video";
      default:
        return "w-full";
    }
  };

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      setIsDragging(true);
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      updateSliderPosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateSliderPosition(e.touches[0].clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={\`relative overflow-hidden bg-gray-200 rounded-lg cursor-col-resize select-none \${getAspectRatioClass()}\`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-medium pointer-events-none">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: \`\${sliderPosition}%\` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-medium pointer-events-none">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: \`\${sliderPosition}%\`, transform: "translateX(-50%)" }}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing">
          {/* Arrow Icons */}
          <div className="flex items-center justify-center gap-1">
            <svg
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              className="w-5 h-5 text-gray-800"
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
          </div>
        </div>
      </div>
    </div>
  );
}`,
      },
      {
        name: "index.ts",
        language: "typescript",
        content: `export { BeforeAfterSlider } from './BeforeAfterSlider'`,
      },
    ],
    prompt: `Create a before-after image comparison slider component in React with these features:
    - Two images overlaid (before on left, after on right)
    - Draggable slider divider that users can drag with mouse or touch
    - Visual slider handle (white vertical line with circular handle in center)
    - Arrow icons on handle to indicate draggability (left and right arrows)
    - Mouse drag support (click and drag to compare images)
    - Full touch/swipe support for mobile devices
    - Before/After labels positioned on bottom-left and bottom-right of images
    - Labels have semi-transparent dark background for readability
    - Responsive design that scales to container width
    - Support for different aspect ratios (square, 16:9, 4:3, auto)
    - Cursor changes to col-resize to indicate the divider is draggable
    - Prevent default image dragging behavior
    - Smooth animations and transitions
    - TypeScript with full prop typing
    - Client Component for proper event handling`,
    codeLink: "https://github.com/mun7594/muntasir.lofistack.portfolio",
    liveLink: "https://muntasir-lofistack-portfolio.vercel.app/components/before-after-slider",
    accessibility:
      "Semantic HTML with proper alt text on images. Clear visual handle with 48px touch target (WCAG compliance). High contrast white handle on images. Labels visible with good color contrast (black text on semi-transparent background). No auto-playing animations that require user interaction to control.",
    relatedProps: [
      {
        name: "beforeImage",
        type: "string",
        default: "required",
        description: "URL of the before/original image",
      },
      {
        name: "afterImage",
        type: "string",
        default: "required",
        description: "URL of the after/transformed image",
      },
      {
        name: "beforeLabel",
        type: "string",
        default: '"Before"',
        description: "Text label displayed on the before image (bottom-left)",
      },
      {
        name: "afterLabel",
        type: "string",
        default: '"After"',
        description: "Text label displayed on the after image (bottom-right)",
      },
      {
        name: "aspectRatio",
        type: '"square" | "16:9" | "4:3" | "auto"',
        default: '"16:9"',
        description: "Aspect ratio of the slider container (controls width:height ratio)",
      },
    ],
    features: [
      "Smooth drag interaction on mouse and touch devices",
      "Visual slider handle with directional arrow icons",
      "Before/After labels with semi-transparent backgrounds",
      "Flexible aspect ratio support (square, 16:9, 4:3, auto)",
      "Fully responsive (adapts to all screen sizes)",
      "WCAG compliant with high contrast colors",
      "48px circular handle (touch-friendly on mobile)",
      "Prevents image dragging while using the slider",
      "Visual feedback with col-resize cursor",
      "White divider line for clear separation",
      "Built with TypeScript for type safety",
      "Perfect for transformation showcases (renovations, makeovers, etc.)",
    ],
  },
  {
    id: "7",
    slug: "submit-form-button",
    name: "Submit Form Button",
    type: "button",
    description: "Interactive submit button with rotating arrow and flipping text animation",
    longDescription:
      "A sleek submit button component featuring smooth animations on hover. The arrow rotates a full 360 degrees while the text flips, creating a dynamic and engaging user experience. Perfect for form submissions with a modern, polished design using black background with white text and arrow.",
    thumbnail: "",
    createdDate: "2026-10-05",
    week: 2,
    componentNumber: 3,
    category: "Button",
    tags: ["Animation", "Interactive", "Form", "Hover Effect", "Arrow Icon"],
    dependencies: "None",
    techStack: ["React", "TypeScript", "CSS Animations", "Tailwind CSS"],
    files: [
      {
        name: "SubmitFormButton.tsx",
        language: "typescript",
        content: `"use client";

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
      <style>{\`
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
      \`}</style>

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
          className={\`w-5 h-5 text-white flex-shrink-0 \${
            isHovering ? "submit-button-arrow" : ""
          }\`}
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
}`,
      },
      {
        name: "index.ts",
        language: "typescript",
        content: `export { SubmitFormButton } from './SubmitFormButton'`,
      },
    ],
    prompt: `Create a submit form button component in React with these features:
    - Black background fill with white text and arrow
    - Button text: "Submit Form"
    - Arrow icon on the right side
    - Border radius: 50px (full rounded)
    - On hover:
      * Arrow rotates 360 degrees smoothly (0.6s animation)
      * Text flips vertically (scaleY animation)
    - Smooth shadow effect on hover
    - Responsive design
    - TypeScript with proper prop typing
    - Use CSS keyframe animations for smooth effects`,
    codeLink: "https://github.com/mun7594/muntasir.lofistack.portfolio",
    liveLink: "https://muntasir-lofistack-portfolio.vercel.app/components/submit-form-button",
    accessibility:
      "Semantic button element. Clear visual feedback on hover. Arrow icon uses SVG with proper stroke. High contrast (black background, white text). Can be triggered with keyboard (Enter/Space).",
    relatedProps: [
      {
        name: "text",
        type: "string",
        default: '"Submit Form"',
        description: "Text displayed on the button",
      },
      {
        name: "onClick",
        type: "() => void",
        default: "undefined",
        description: "Callback function triggered when button is clicked",
      },
    ],
    features: [
      "360-degree arrow rotation on hover",
      "Text flip animation on hover",
      "Black background with white text",
      "Smooth CSS animations (0.6s duration)",
      "Shadow effect on hover",
      "Responsive and mobile-friendly",
      "TypeScript support",
      "Easy to customize text and callback",
    ],
  },
];

// Helper to get latest components (for homepage)
export const getLatestComponents = (limit: number = 4): Component[] => {
  return [...components]
    .sort(
      (a, b) =>
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    )
    .slice(0, limit);
};

// Helper to get component by slug
export const getComponentBySlug = (slug: string): Component | undefined => {
  return components.find((c) => c.slug === slug);
};
