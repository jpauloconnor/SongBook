import { Band } from "./band.model";

export class BandService {
    private bands: Band[] = [
    new Band("Led Zeppelin", "Greatest band ever.", "https://commons.wikimedia.org/wiki/File:Grave_JohnBonham_sept07.JPG#/media/File:Grave_JohnBonham_sept07.JPG"),
    new Band("Pink Floyd", "Greatest band ever.", "http://cdn.wallpapersafari.com/34/36/a2lSYG.jpg"),
    new Band("Pink Floyd", "Greatest band ever.", "http://cdn.wallpapersafari.com/34/36/a2lSYG.jpg"),
    new Band("Pink Floyd", "Greatest band ever.", "http://cdn.wallpapersafari.com/34/36/a2lSYG.jpg")
  ];

    getBands(){
        return this.bands.slice();
    }
}
