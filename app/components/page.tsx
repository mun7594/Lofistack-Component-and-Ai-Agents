import ComponentCard from "@/lib/components/ComponentCard";
import { components } from "@/lib/data/components";
import Link from "next/link";

export const metadata = {
  title: "Components | Muntasir Hasan",
  description: "All UI components built during the 90-day challenge.",
};

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 12H5m7 7l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            All Components
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            {components.length} components built with React, TypeScript, and
            Tailwind CSS. All responsive, accessible, and production-ready.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>
      </div>
    </main>
  );
}
