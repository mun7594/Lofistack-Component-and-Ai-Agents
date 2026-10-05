"use client";

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
      className="text-xs px-2 py-1 bg-gray-900 text-white rounded hover:bg-gray-800"
    >
      {label}
    </button>
  );
}

export function CopyPromptButton({ prompt }: { prompt: string }) {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(prompt);
      }}
      className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Copy Prompt
    </button>
  );
}
