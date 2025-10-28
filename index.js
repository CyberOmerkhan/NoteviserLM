<<<<<<< HEAD
import express from "express";
import ollama from "ollama";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const question = req.query.question;
  if (!question) {
    res.status(200).send("Ask something via the `?question=` parameter");
    return;
  }
  try {
    const response = await ollama.chat({
      model: "mistral",
      messages: [{ role: "user", content: question }],
    });
    res.status(200).send(response.message.content);
  } catch (err) {
    console.error(err);
    res.status(500).send("Ollama error. Is the daemon running and the model pulled?");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
=======
import { openai, supabase } from './config.js';
import podcasts from './content.js';

async function main(input) {
  await Promise.all(
    input.map( async (textChunk) => {
        const embeddingResponse = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: textChunk
        });
        const data = { 
          content: textChunk, 
          embedding: embeddingResponse.data[0].embedding 
        }
        console.log(data);  
    })    
  );
  console.log('Embedding complete!');
}
>>>>>>> local-backup
