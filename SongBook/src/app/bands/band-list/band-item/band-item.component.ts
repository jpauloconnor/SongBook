import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../../band.model';
@Component({
  selector: 'app-band-item',
  templateUrl: './band-item.component.html',
  styleUrls: ['./band-item.component.css']
})
export class BandItemComponent implements OnInit {
  @Input() band: Band;
  constructor() { }

  ngOnInit() {
  }

}
