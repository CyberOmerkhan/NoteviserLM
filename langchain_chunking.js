import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import * as fs from "node:fs";

async function splitDocument(){
    const rawData = await fs.readFileSync("./podcasts.txt");
    const text = await rawData.toString();

    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 150,
        chunkOverlap: 15,
    });

    const texts = await textSplitter.createDocuments([text]);
    console.log(texts.length);
}

splitDocument();