import { Component, OnInit } from '@angular/core';
import { Band } from '../band.model';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  bands: Band[] = [
    new Band("Led Zeppelin", "Greatest band ever.", "https://commons.wikimedia.org/wiki/File:Grave_JohnBonham_sept07.JPG#/media/File:Grave_JohnBonham_sept07.JPG"),
    new Band("Pink Floyd", "Greatest band ever.", "http://cdn.wallpapersafari.com/34/36/a2lSYG.jpg"),
    new Band("Pink Floyd", "Greatest band ever.", "http://cdn.wallpapersafari.com/34/36/a2lSYG.jpg"),
    new Band("Pink Floyd", "Greatest band ever.", "http://cdn.wallpapersafari.com/34/36/a2lSYG.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
