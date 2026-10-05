// AI Agent data - Easy to update each week!
// Just add a new object to this array with your agent info

export interface Agent {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  createdDate: string;
  task: string;
  prompt: string;
  result: string;
  toolsUsed: string[];
  codeLink?: string;
}

export const agents: Agent[] = [
  {
    id: "1",
    slug: "content-summarizer",
    name: "Content Summarizer",
    category: "automation",
    description: "AI agent that summarizes long-form content into key points",
    longDescription:
      "An intelligent agent that takes any long-form text and generates concise summaries using Claude API. Perfect for processing articles, emails, and documentation.",
    thumbnail: "/thumbnails/content-summarizer.png",
    createdDate: "2024-10-06",
    task: "Summarize weekly blog posts into concise bullet points for team newsletters",
    prompt:
      "You are a content summarization expert. Take the provided text and extract the 5 most important points. Format as bullet points.",
    result:
      "Successfully reduced 3000+ word articles to 150-word summaries with 95% information retention",
    toolsUsed: ["Claude API", "Node.js"],
    codeLink: "https://github.com/mun7594/ai-agents",
  },
  {
    id: "2",
    slug: "code-reviewer",
    name: "Code Reviewer Agent",
    category: "development",
    description: "Automated code review agent that identifies bugs and improvements",
    longDescription:
      "An AI-powered code review assistant that analyzes code for bugs, performance issues, and best practices. Provides detailed feedback with suggestions.",
    thumbnail: "/thumbnails/code-reviewer.png",
    createdDate: "2024-10-09",
    task: "Review pull requests and suggest improvements before human review",
    prompt:
      "Review the following code for bugs, security issues, and best practices. Provide specific suggestions with explanations.",
    result:
      "Caught 8 potential bugs and 12 optimization opportunities in weekly PR reviews",
    toolsUsed: ["Claude API", "GitHub API", "Python"],
    codeLink: "https://github.com/mun7594/ai-agents",
  },
  {
    id: "3",
    slug: "data-analyzer",
    name: "Data Analysis Agent",
    category: "data",
    description: "Agent that analyzes datasets and generates insights and visualizations",
    longDescription:
      "A data analysis agent that processes CSV/JSON files and generates meaningful insights, trends, and recommendations with visualizations.",
    thumbnail: "/thumbnails/data-analyzer.png",
    createdDate: "2024-10-12",
    task: "Analyze monthly sales data and generate insights for stakeholders",
    prompt:
      "Analyze the provided sales data and identify top trends, outliers, and growth opportunities. Include percentage changes.",
    result:
      "Generated 15-slide report with actionable insights leading to 12% revenue improvement forecast",
    toolsUsed: ["Claude API", "Python", "Pandas"],
    codeLink: "https://github.com/mun7594/ai-agents",
  },
  {
    id: "4",
    slug: "email-classifier",
    name: "Email Classifier Agent",
    category: "automation",
    description: "Smart email classification and priority sorting agent",
    longDescription:
      "An intelligent agent that automatically categorizes incoming emails by priority, type, and action required. Helps manage inbox efficiently.",
    thumbnail: "/thumbnails/email-classifier.png",
    createdDate: "2024-10-15",
    task: "Automatically categorize and prioritize 200+ weekly emails",
    prompt:
      "Classify this email into categories: Urgent, Important, Follow-up, or FYI. Explain your reasoning.",
    result: "Achieved 94% accuracy in email classification, saving 5 hours/week on email management",
    toolsUsed: ["Claude API", "Gmail API"],
    codeLink: "https://github.com/mun7594/ai-agents",
  },
  {
    id: "5",
    slug: "documentation-generator",
    name: "Documentation Generator",
    category: "development",
    description: "Auto-generates technical documentation from code comments",
    longDescription:
      "An agent that reads source code and generates comprehensive API documentation, README files, and usage guides automatically.",
    thumbnail: "/thumbnails/documentation-generator.png",
    createdDate: "2024-10-18",
    task: "Generate documentation for new React component library",
    prompt:
      "Based on the provided code and comments, generate comprehensive documentation including: overview, props, examples, and use cases.",
    result:
      "Created 50-page documentation in 10 minutes vs 4 hours manual work. 100% accuracy with code examples.",
    toolsUsed: ["Claude API", "TypeScript", "Markdown"],
    codeLink: "https://github.com/mun7594/ai-agents",
  },
];

// Helper to get latest agents (for homepage)
export const getLatestAgents = (limit: number = 4): Agent[] => {
  return [...agents]
    .sort(
      (a, b) =>
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    )
    .slice(0, limit);
};

// Helper to get agent by slug
export const getAgentBySlug = (slug: string): Agent | undefined => {
  return agents.find((a) => a.slug === slug);
};
