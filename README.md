## AI Code Reviewer

A fullstack AI-powered code review tool that automatically analyzes PR diffs or code snippets and provides structured feedback on bugs, performance, security, and code quality.

Powered by a local LLM (Mistral via Ollama) — fully offline and free.

## Features

🔍 Automated code reviews for PR diffs or snippets

🐞 Detects bugs and logical issues

⚡ Highlights performance improvements

🔒 Points out security concerns

✨ Suggests code quality improvements

🎨 React frontend for instant AI feedback

💰 Free & offline — no paid APIs needed

## Tech Stack

Frontend: React + Vite

Backend: Node.js + Express.js

LLM: Ollama Mistral model

Fetch API: For backend → LLM communication

## Installation & Setup
1️⃣ Install Ollama & Pull Model

```bash

# Install Ollama
https://ollama.com

# Verify installation
ollama --version

# Pull Mistral model
ollama pull mistral

```

2️⃣ Run Ollama Server
```bash

ollama run mistral
```

Keep this terminal open — it runs your local LLM server

3️⃣ Backend Setup
```bash

cd backend
npm install
node index.js
```

4️⃣ Frontend Setup
```bash

cd frontend
npm install
npm run dev

```
📝 Usage

Open React frontend.

Paste your PR diff or code snippet in the input field.

Click “Review Code”.

Receive structured AI feedback instantly.
