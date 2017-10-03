import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Band } from '../../band.model';
@Component({
  selector: 'app-band-item',
  templateUrl: './band-item.component.html',
  styleUrls: ['./band-item.component.css']
})
export class BandItemComponent implements OnInit {
  //Decorator that allows us to bind component prop from outside.
  @Input() band: Band;

  @Output() bandSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.bandSelected.emit();
  }

}
