import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SongModel } from '../../models/song-model';

@Component({
  selector: 'app-song-card-frame',
  templateUrl: './song-card-frame.component.html',
  styleUrls: ['./song-card-frame.component.css']
})
export class SongCardFrameComponent {
  @Input() songs: SongModel[];
  @Output() songClicked = new EventEmitter<SongModel>();
  @Output() songEnded= new EventEmitter<SongModel>();

  onClickSong(song: SongModel) {
    this.songClicked.emit(song);
  }

  onEndedSong(song: SongModel) {
    this.songEnded.emit(song);
  }
}
