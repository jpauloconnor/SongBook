import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Song } from "../../shared/song.model";

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() songAdded = new EventEmitter<Song>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const songName = this.nameInputRef.nativeElement.value;
    const songAmount = this.amountInputRef.nativeElement.value;
    const newSong = new Song(songName, songAmount);
    this.songAdded.emit(newSong);
  }
}
