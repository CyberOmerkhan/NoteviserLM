import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import * as fs from "node:fs";

async function splitDocument(){
    const rawData = await fs.readFileSync("./podcasts.txt");
    const text = await rawData.toString();
    console.log(text)
}

splitDocument();