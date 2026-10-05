import AgentCard from "@/lib/components/AgentCard";
import { agents } from "@/lib/data/agents";
import Link from "next/link";

export const metadata = {
  title: "AI Agents | Muntasir Hasan",
  description: "All AI agents built during the 90-day challenge.",
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
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

          <h1 className="text-4xl font-bold text-gray-900 mb-3">AI Agents</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            {agents.length} intelligent automation solutions. Each agent is
            designed to solve real problems and demonstrate AI-driven workflows.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </main>
  );
}
