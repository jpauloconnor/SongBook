import { Component, OnInit } from '@angular/core';
import { Band } from "./band.model";

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {

  selectedBand: Band;

  constructor() { }

  ngOnInit() {
  }

}
