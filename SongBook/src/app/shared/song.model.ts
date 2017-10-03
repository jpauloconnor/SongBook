//No decorator. Just vanilla TS.
//Blueprint for objects that we create.

//amount in this case is number of times practiced.

//We can get rid of the properties and create the constructor with public tags. This is a shortcut.
export class Song {
    constructor(public name: string, public amount:number){ }
}