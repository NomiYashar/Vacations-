import path from "path";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

async function saveFile(file){
    const ext = path.extname(file.name);
    const fileName = uuidv4() + ext;   
    await file.mv("./1-assets/" + fileName);
    return fileName;
}

function deleteFile(fileName){
    if(fs.existsSync("./src/1-assets" + fileName)){
       fs.unlinkSync("./src/1-assets" + fileName);
    }
}

function fileExists(fileName){
    if(fs.existsSync("./src/1-assets" + fileName)){
        return true;
    }
    return false;
}

export default {
    saveFile,
    deleteFile,
    fileExists
}