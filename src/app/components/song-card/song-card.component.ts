import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SongModel } from 'src/app/models/song-model';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent {
  @Input() song: SongModel;
  @Output() clicked = new EventEmitter<SongModel>();
  @Output() ended = new EventEmitter<SongModel>();

  onClick() {
    this.clicked.emit(this.song);
  }

  onEnded() {
    this.ended.emit(this.song);
  }
}
