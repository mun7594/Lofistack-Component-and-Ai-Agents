// Component data - Easy to update each week!
// Just add a new object to this array with your component info

export interface Component {
  id: string;
  slug: string;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  createdDate: string;
  prompt: string;
  codeLink: string;
  liveLink?: string;
}

export const components: Component[] = [
  {
    id: "1",
    slug: "glass-button",
    name: "Glass Button",
    type: "button",
    description: "A modern glass-morphism button with smooth hover animations",
    longDescription:
      "A beautiful glass-morphism button component that combines frosted glass effect with modern design principles. Features smooth transitions and accessible keyboard navigation.",
    thumbnail: "/thumbnails/glass-button.png",
    createdDate: "2024-10-05",
    prompt:
      "Create a button component with glass-morphism effect using Tailwind CSS. Include hover animations and responsive design.",
    codeLink: "https://github.com/mun7594/muntasir-portfolio",
    liveLink: "https://muntasir-portfolio.vercel.app/components/glass-button",
  },
  {
    id: "2",
    slug: "animated-card",
    name: "Animated Card",
    type: "card",
    description: "Interactive card component with floating animation effect",
    longDescription:
      "An eye-catching card component with animated entrance and hover effects. Perfect for showcasing content with visual appeal.",
    thumbnail: "/thumbnails/animated-card.png",
    createdDate: "2024-10-08",
    prompt:
      "Design an animated card component with entrance animation and hover effects. Use Tailwind CSS and React.",
    codeLink: "https://github.com/mun7594/muntasir-portfolio",
    liveLink: "https://muntasir-portfolio.vercel.app/components/animated-card",
  },
  {
    id: "3",
    slug: "gradient-input",
    name: "Gradient Input",
    type: "input",
    description: "Stylish input field with animated gradient border",
    longDescription:
      "A text input component with animated gradient border that activates on focus. Includes form validation styles and smooth transitions.",
    thumbnail: "/thumbnails/gradient-input.png",
    createdDate: "2024-10-11",
    prompt:
      "Create an input component with animated gradient border on focus. Include error states and accessibility features.",
    codeLink: "https://github.com/mun7594/muntasir-portfolio",
    liveLink: "https://muntasir-portfolio.vercel.app/components/gradient-input",
  },
  {
    id: "4",
    slug: "toggle-switch",
    name: "Toggle Switch",
    type: "input",
    description: "Smooth animated toggle switch with custom styling",
    longDescription:
      "A beautifully animated toggle switch component that supports multiple states and colors. Fully accessible with keyboard support.",
    thumbnail: "/thumbnails/toggle-switch.png",
    createdDate: "2024-10-14",
    prompt:
      "Build a toggle switch component with smooth animations. Make it accessible and support multiple color themes.",
    codeLink: "https://github.com/mun7594/muntasir-portfolio",
    liveLink: "https://muntasir-portfolio.vercel.app/components/toggle-switch",
  },
  {
    id: "5",
    slug: "loading-spinner",
    name: "Loading Spinner",
    type: "loader",
    description: "Elegant animated loading spinner with multiple variants",
    longDescription:
      "A collection of loading spinner animations with different styles and sizes. Uses pure CSS animations for optimal performance.",
    thumbnail: "/thumbnails/loading-spinner.png",
    createdDate: "2024-10-17",
    prompt:
      "Create multiple loading spinner variants using Tailwind CSS animations. Include different sizes and speeds.",
    codeLink: "https://github.com/mun7594/muntasir-portfolio",
    liveLink: "https://muntasir-portfolio.vercel.app/components/loading-spinner",
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
