import { Component, EventEmitter, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { SongModel } from 'src/app/models/song-model';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent {
  @Input() song: SongModel;
  @Output() clicked = new EventEmitter<SongCardComponent>();
  @Output() ended = new EventEmitter<SongCardComponent>();
  @ViewChild('audiotrack') audiotrack : ElementRef;
  isPlaying = false;

  onClick() {
    this.clicked.emit(this);
  }

  onEnded() {
    this.ended.emit(this);
  }

  stopSong() {
    this.audiotrack.nativeElement.pause();
    this.audiotrack.nativeElement.currentTime = 0;
    this.isPlaying = false;
  }

  playSong() {
    this.isPlaying = true;
    this.audiotrack.nativeElement.play();
  }
}
