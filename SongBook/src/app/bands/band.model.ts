//No decorator. Just vanilla TS.
//Blueprint for objects that we create.

export class Band{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}