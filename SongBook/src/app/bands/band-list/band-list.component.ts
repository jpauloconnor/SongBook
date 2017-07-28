import { Component, OnInit } from '@angular/core';
import { Band } from '../band.model';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  bands: Band[] = [
    new Band("Pink Floyd", "Greatest band ever.", "www.pinkfloyd.com") 
  ];

  constructor() { }

  ngOnInit() {
  }

}
