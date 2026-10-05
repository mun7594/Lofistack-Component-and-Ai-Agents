"use client";

import { SubmitFormButton } from "./SubmitFormButton";

export function SubmitFormButtonDemo() {
  return (
    <div className="flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
      <SubmitFormButton onClick={() => alert("Form Submitted!")} />
    </div>
  );
}
