import { OpenAI } from "openai";

const client = new OpenAI({
    apiKey:process.env.OpenAI_API_KEY
});

export async function reviewCode(prompt) {
    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a senior software engineer that reviews code." },
            { role: "user", content: prompt }
        ],
       // max_tokens: 1500,
        temperature: 0.2,
    });
    return response.choices[0].message.content;
}

