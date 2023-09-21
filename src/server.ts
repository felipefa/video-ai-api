import { fastify } from "fastify";

import { createTranscriptionRoute } from "./routes/create-transcription";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";

const app = fastify();

app.register(createTranscriptionRoute);
app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server is running on port 3333")
});
