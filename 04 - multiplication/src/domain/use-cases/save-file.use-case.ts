import fs from 'fs'

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent : string;
    destination?: string;
    name?   : string;
    
}

export class SaveFile implements SaveFileUseCase {
    constructor(    
        /**
        * Storage Rep
        */){}
    execute ({fileContent, destination = 'outputs', name = 'table'}: SaveFileOptions): boolean {
        
        try{
            fs.mkdirSync(destination,{recursive: true});
            fs.writeFileSync(`${name}/${name}.txt`, fileContent, 'utf8');
            return true;
        }catch(error){
            return false;
        }
    };
    
}