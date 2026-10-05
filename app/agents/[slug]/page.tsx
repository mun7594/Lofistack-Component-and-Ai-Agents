import { getAgentBySlug, agents } from "@/lib/data/agents";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyPromptButton } from "@/lib/components/CopyButton";

export function generateStaticParams() {
  return agents.map((agent) => ({
    slug: agent.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) {
    return {
      title: "Agent Not Found",
    };
  }
  return {
    title: `${agent.name} | Muntasir Hasan`,
    description: agent.description,
  };
}

export default async function AgentDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

  const formattedDate = new Date(agent.createdDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/agents"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
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
          Back to Agents
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{agent.name}</h1>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              {agent.category}
            </span>
          </div>
          <p className="text-gray-500 text-sm">Created on {formattedDate}</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {agent.longDescription}
              </p>
            </div>

            {/* Task */}
            <div className="mb-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Task</h3>
              <p className="text-gray-700">{agent.task}</p>
            </div>

            {/* Prompt */}
            <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Prompt/Workflow
              </h3>
              <p className="text-gray-700 leading-relaxed font-mono text-sm">
                {agent.prompt}
              </p>
            </div>

            {/* Result */}
            <div className="mb-8 bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Result</h3>
              <p className="text-gray-700">{agent.result}</p>
            </div>

            {/* Links */}
            {agent.codeLink && (
              <a
                href={agent.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                View Code on GitHub
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Thumbnail */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 h-64 flex items-center justify-center mb-6 border border-blue-200">
              <svg
                className="w-20 h-20 text-blue-400"
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

            {/* Details */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Agent Info</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Category</dt>
                  <dd className="text-sm text-gray-900 capitalize">
                    {agent.category}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Created
                  </dt>
                  <dd className="text-sm text-gray-900">{formattedDate}</dd>
                </div>
              </dl>
            </div>

            {/* Tools Used */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {agent.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
