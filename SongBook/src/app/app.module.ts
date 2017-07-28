import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { BandsComponent } from './bands/bands.component';
import { BandListComponent } from './bands/band-list/band-list.component';
import { BandDetailComponent } from './bands/band-detail/band-detail.component';
import { BandItemComponent } from './bands/band-list/band-item/band-item.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongEditComponent } from './song-list/song-edit/song-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BandsComponent,
    BandListComponent,
    BandDetailComponent,
    BandItemComponent,
    SongListComponent,
    SongEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
