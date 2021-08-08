import { Component, Input} from '@angular/core';
import { SongModel } from '../../models/song-model';
import { SongCardComponent } from '../song-card/song-card.component';

@Component({
  selector: 'app-song-card-frame',
  templateUrl: './song-card-player.component.html',
  styleUrls: ['./song-card-player.component.css']
})
export class SongCardPlayerComponent {
  @Input() songs: SongModel[];
  playingSongCard: SongCardComponent = null;

  onClickSongCard(songCard: SongCardComponent) {
    this.toggleSong(songCard)
  }

  onEndedSongCard(songCard: SongCardComponent) {
    this.stopCurrentSong();
  }

  toggleSong(songCard: SongCardComponent) {
    if (this.playingSongCard === null) {
      this.startSong(songCard);
      return;
    }
    if(this.playingSongCard === songCard) {
      this.stopCurrentSong();
      return;
    }
    this.stopCurrentSong();
    this.startSong(songCard);
  }

  stopCurrentSong() {
    this.playingSongCard.stopSong();
    this.playingSongCard = null;
  }

  startSong(songCard: SongCardComponent) {
    this.playingSongCard = songCard;
    this.playingSongCard.playSong();
  }
}
