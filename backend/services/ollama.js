import fetch from "node-fetch";
import { buildPrompt } from "../prompts/codeReviewPrompt.js";

const OLLAMA_URL = "http://localhost:11434/api/generate";

export async function reviewCode(diff, language = "JavaScript") {
  const prompt = buildPrompt(diff, language);

  const response = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt,
      stream: false,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Ollama error: ${text}`);
  }

  const data = await response.json();
  return data.response;
}
