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
    id: "1",
    slug: "glass-button",
    name: "Glass Button",
    type: "button",
    description: "A modern glass-morphism button with smooth hover animations",
    longDescription:
      "A beautiful glass-morphism button component that combines frosted glass effect with modern design principles. Features smooth transitions and accessible keyboard navigation.",
    thumbnail: "/thumbnails/glass-button.png",
    createdDate: "2024-10-05",
    week: 1,
    componentNumber: 1,
    category: "Button",
    tags: ["Animation", "Glassmorphism", "Responsive", "Accessible"],
    dependencies: "None",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    files: [
      {
        name: "GlassButton.tsx",
        language: "typescript",
        content: `import React from 'react'

interface GlassButtonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export const GlassButton = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false
}: GlassButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`px-6 py-3 rounded-lg backdrop-blur-md transition-all duration-300
        \${variant === 'primary'
          ? 'bg-white/20 hover:bg-white/30 border border-white/30'
          : 'bg-black/20 hover:bg-black/30 border border-black/30'
        }
        disabled:opacity-50 disabled:cursor-not-allowed
      \`}
    >
      {label}
    </button>
  )
}`,
      },
      {
        name: "index.ts",
        language: "typescript",
        content: `export { GlassButton } from './GlassButton'`,
      },
    ],
    prompt: `Create a glass-morphism button component using React and Tailwind CSS.
    Requirements:
    - Use backdrop-blur for frosted glass effect
    - Smooth hover animations (300ms transition)
    - Support primary and secondary variants
    - Fully accessible (keyboard navigation, disabled states)
    - Responsive design
    - TypeScript types for all props`,
    codeLink: "https://github.com/mun7594/muntasir-portfolio",
    liveLink: "https://muntasir-portfolio.vercel.app/components/glass-button",
    accessibility:
      "Full keyboard navigation support. Proper ARIA labels. Focus states visible. Disabled state properly marked. High contrast maintained.",
    relatedProps: [
      {
        name: "label",
        type: "string",
        default: "required",
        description: "Text displayed inside the button",
      },
      {
        name: "onClick",
        type: "() => void",
        default: "undefined",
        description: "Callback fired when button is clicked",
      },
      {
        name: "variant",
        type: "'primary' | 'secondary'",
        default: "'primary'",
        description: "Visual style variant of the button",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the button and prevent interaction",
      },
    ],
    features: [
      "Glass-morphism effect with backdrop blur",
      "Smooth 300ms hover transitions",
      "Two color variants (primary & secondary)",
      "Full accessibility support",
      "Disabled state styling",
      "Responsive design",
    ],
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
    week: 1,
    componentNumber: 2,
    category: "Card",
    tags: ["Animation", "Interactive", "Responsive", "Shadow Effects"],
    dependencies: "None",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    files: [
      {
        name: "AnimatedCard.tsx",
        language: "typescript",
        content: `import React from 'react'

interface AnimatedCardProps {
  title: string
  description: string
  image?: string
  delay?: number
}

export const AnimatedCard = ({
  title,
  description,
  image,
  delay = 0
}: AnimatedCardProps) => {
  return (
    <div
      className="animate-fadeIn"
      style={{ animationDelay: \`\${delay}ms\` }}
    >
      <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
        {image && (
          <div className="relative w-full h-48 overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}`,
      },
      {
        name: "index.ts",
        language: "typescript",
        content: `export { AnimatedCard } from './AnimatedCard'`,
      },
    ],
    prompt: `Create an animated card component with these features:
    - Entrance fade-in animation with customizable delay
    - Image section with zoom effect on hover
    - Floating lift effect on hover (translate-y)
    - Smooth shadow expansion
    - Responsive design (mobile to desktop)
    - TypeScript with full prop typing`,
    codeLink: "https://github.com/mun7594/muntasir-portfolio",
    liveLink: "https://muntasir-portfolio.vercel.app/components/animated-card",
    accessibility:
      "Semantic HTML structure. Image alt text. Keyboard accessible. Animation respects prefers-reduced-motion.",
    relatedProps: [
      {
        name: "title",
        type: "string",
        default: "required",
        description: "Card title/heading",
      },
      {
        name: "description",
        type: "string",
        default: "required",
        description: "Card description text",
      },
      {
        name: "image",
        type: "string",
        default: "undefined",
        description: "Optional image URL for card header",
      },
      {
        name: "delay",
        type: "number",
        default: "0",
        description: "Animation delay in milliseconds",
      },
    ],
    features: [
      "Fade-in entrance animation",
      "Hover lift effect (-translate-y)",
      "Image zoom on hover",
      "Shadow expansion",
      "Customizable animation delay",
      "Responsive grid support",
    ],
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
    week: 2,
    componentNumber: 1,
    category: "Form",
    tags: ["Input", "Gradient", "Animation", "Validation"],
    dependencies: "None",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    files: [
      {
        name: "GradientInput.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react'

interface GradientInputProps {
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  onChange?: (value: string) => void
}

export const GradientInput = ({
  placeholder = 'Enter text...',
  label,
  error,
  disabled = false,
  onChange
}: GradientInputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onChange?.(e.target.value)}
          className={\`w-full px-4 py-3 bg-white rounded-lg border-2 transition-all duration-300
            \${isFocused
              ? 'border-transparent bg-gradient-to-r from-blue-50 to-purple-50'
              : 'border-gray-200'
            }
            \${error ? 'border-red-500' : ''}
            disabled:bg-gray-100 disabled:cursor-not-allowed
          \`}
        />
        {isFocused && !error && (
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 -z-10 blur opacity-75 animate-pulse" />
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  )
}`,
      },
      {
        name: "index.ts",
        language: "typescript",
        content: `export { GradientInput } from './GradientInput'`,
      },
    ],
    prompt: `Create a gradient input component with these requirements:
    - Animated gradient border on focus
    - Optional label and error message
    - Smooth color transitions
    - Validation state styling (error state)
    - Disabled state support
    - TypeScript typing
    - Accessible form input`,
    codeLink: "https://github.com/mun7594/muntasir-portfolio",
    accessibility:
      "Associated label element. Proper error announcements. Disabled state accessible. Color contrast meets WCAG AA.",
    relatedProps: [
      {
        name: "placeholder",
        type: "string",
        default: "'Enter text...'",
        description: "Placeholder text",
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        description: "Associated label text",
      },
      {
        name: "error",
        type: "string",
        default: "undefined",
        description: "Error message to display",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the input",
      },
      {
        name: "onChange",
        type: "(value: string) => void",
        default: "undefined",
        description: "Callback on value change",
      },
    ],
    features: [
      "Animated gradient border on focus",
      "Gradient background on interaction",
      "Error state styling",
      "Disabled state",
      "Smooth transitions",
      "Optional label",
    ],
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
    week: 2,
    componentNumber: 2,
    category: "Toggle",
    tags: ["Switch", "Interactive", "Animation", "Accessible"],
    dependencies: "None",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    files: [
      {
        name: "ToggleSwitch.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react'

interface ToggleSwitchProps {
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  disabled?: boolean
}

export const ToggleSwitch = ({
  defaultChecked = false,
  onChange,
  label,
  disabled = false
}: ToggleSwitchProps) => {
  const [checked, setChecked] = useState(defaultChecked)

  const handleChange = () => {
    if (!disabled) {
      const newState = !checked
      setChecked(newState)
      onChange?.(newState)
    }
  }

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div
        className={\`relative inline-flex w-14 h-8 items-center rounded-full transition-colors
          \${checked ? 'bg-green-500' : 'bg-gray-300'}
          \${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        \`}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
        />
        <span
          className={\`inline-block w-6 h-6 transform rounded-full bg-white shadow-md transition-transform
            \${checked ? 'translate-x-7' : 'translate-x-1'}
          \`}
        />
      </div>
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  )
}`,
      },
      {
        name: "index.ts",
        language: "typescript",
        content: `export { ToggleSwitch } from './ToggleSwitch'`,
      },
    ],
    prompt: `Create a toggle switch component with these features:
    - Smooth animation between states
    - Color change based on state (gray/green)
    - Keyboard accessible (toggle with Space)
    - Optional label
    - Disabled state
    - Proper form input semantics
    - TypeScript types`,
    codeLink: "https://github.com/mun7594/muntasir-portfolio",
    accessibility:
      "Uses native checkbox input. Keyboard accessible with Space/Enter. Screen reader friendly. Clear focus states.",
    relatedProps: [
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Initial checked state",
      },
      {
        name: "onChange",
        type: "(checked: boolean) => void",
        default: "undefined",
        description: "Callback when toggle changes",
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        description: "Optional label text",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the toggle",
      },
    ],
    features: [
      "Smooth toggle animation",
      "Color state indication",
      "Keyboard accessible",
      "Optional label",
      "Disabled state",
      "Proper form semantics",
    ],
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
    week: 3,
    componentNumber: 1,
    category: "Loader",
    tags: ["Animation", "Loading", "Performance", "Variants"],
    dependencies: "None",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    files: [
      {
        name: "LoadingSpinner.tsx",
        language: "typescript",
        content: `import React from 'react'

type SpinnerVariant = 'dot' | 'ring' | 'pulse'
type SpinnerSize = 'sm' | 'md' | 'lg'

interface LoadingSpinnerProps {
  variant?: SpinnerVariant
  size?: SpinnerSize
  label?: string
}

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-16 h-16'
}

export const LoadingSpinner = ({
  variant = 'dot',
  size = 'md',
  label = 'Loading...'
}: LoadingSpinnerProps) => {
  const baseClass = sizeClasses[size]

  return (
    <div className="flex flex-col items-center gap-3">
      {variant === 'dot' && (
        <div className={\`\${baseClass} flex gap-1 justify-center items-center\`}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: \`\${i * 0.1}s\` }}
            />
          ))}
        </div>
      )}
      {variant === 'ring' && (
        <div className={baseClass}>
          <div className="w-full h-full border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
      {variant === 'pulse' && (
        <div className={baseClass}>
          <div className="w-full h-full bg-blue-500 rounded-full animate-pulse" />
        </div>
      )}
      {label && <p className="text-gray-600 text-sm">{label}</p>}
    </div>
  )
}`,
      },
      {
        name: "index.ts",
        language: "typescript",
        content: `export { LoadingSpinner } from './LoadingSpinner'`,
      },
    ],
    prompt: `Create a loading spinner component with multiple variants:
    - Dot variant: 3 bouncing dots with staggered animation
    - Ring variant: Spinning circular border
    - Pulse variant: Pulsing circle
    All variants should have small, medium, large sizes
    Optional loading label
    Pure CSS animations (no external libraries)
    TypeScript types for all props`,
    codeLink: "https://github.com/mun7594/muntasir-portfolio",
    accessibility:
      "ARIA busy state. Optional descriptive text. Respects prefers-reduced-motion. Clear visual indicator.",
    relatedProps: [
      {
        name: "variant",
        type: "'dot' | 'ring' | 'pulse'",
        default: "'dot'",
        description: "Style variant of the spinner",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Size of the spinner",
      },
      {
        name: "label",
        type: "string",
        default: "'Loading...'",
        description: "Optional loading text",
      },
    ],
    features: [
      "3 animation variants (dot, ring, pulse)",
      "3 size options",
      "Pure CSS animations",
      "Optional loading label",
      "Performance optimized",
      "Customizable colors",
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
