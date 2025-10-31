import { openai, supabase } from './config.js';
import podcasts from './content.js';

const query = "Jammin' in the Big Easy";

async function main(input) {
    // create an embedding representing the input text

    const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input,
    })
     
    const embedding = embeddingResponse.data[0].embedding;
    console.log(embedding);
}

main(podcasts)