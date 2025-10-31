import { openai, supabase } from './config.js';
import podcasts from './content.js';

const query = "something about time";

main(query);

async function main(input) {
    // create an embedding representing the input text

    const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input,
    })
     
    const embedding = embeddingResponse.data[0].embedding;
    //console.log(embedding);

    // Query Supabase for nearest vector match:
    const {data} = await supabase.rpc('match_documents', {
        query_embedding: embedding,
        match_threshold: 0.5,
        match_count: 1, // how many top matches will show up
    });
    console.log(data)
}
