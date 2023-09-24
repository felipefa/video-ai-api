import "dotenv/config";

import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";

import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";

const app = fastify();

app.register(fastifyCors, {
  origin: process.env.FRONTEND_URL,
});

app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);
app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server is running on port 3333");
});
