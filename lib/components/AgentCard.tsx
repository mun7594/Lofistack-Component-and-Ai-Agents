import Link from "next/link";
import { Agent } from "@/lib/data/agents";

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  const formattedDate = new Date(agent.createdDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <Link href={`/agents/${agent.slug}`}>
      <div className="group cursor-pointer h-full">
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:border-gray-400 hover:shadow-lg hover:scale-105 h-full flex flex-col">
          {/* Thumbnail */}
          <div className="relative w-full h-48 bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              className="absolute inset-0 w-full h-full text-blue-300 p-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                {agent.name}
              </h3>
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                {agent.category}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4 flex-1">
              {agent.description}
            </p>

            <div className="text-xs text-gray-400 pt-3 border-t border-gray-100">
              {formattedDate}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
