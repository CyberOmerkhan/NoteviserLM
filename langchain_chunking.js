import { CharacterTextSplitter } from "@langchain/textsplitters";
import * as fs from "node:fs";

async function splitDocument(){
    const rawData = await fs.readFileSync("./podcasts.txt");
    const text = await rawData.toString();

    const textSplitter = new CharacterTextSplitter({
        separator: " ",
        chunkSize: 1000,
        chunkOverlap: 200,
    });

    const texts = await textSplitter.createDocuments([text]);

    console.log(texts);
}

splitDocument();