import { Component, OnInit } from '@angular/core';
import { ApiRainshard } from 'src/app/api/api-rainshard';
import { SongModel } from '../../models/song-model';

@Component({
  selector: 'app-music-production',
  templateUrl: './music-production.page.html',
  styleUrls: ['./music-production.page.css']
})
export class MusicProductionPage implements OnInit {
  songs: SongModel[];
  playingId: number = -1;

  ngOnInit(): void {
    const api = new ApiRainshard();
    this.songs = api.fetchSongs();
  }

  onClickSong(song: SongModel) {
    this.toggleSong(song.id);
  }

  onEndedSong(song: SongModel) {
    this.songEnded(song.id);
  }

  toggleSong(i: number) {
    if(this.playingId !== -1) {
      if(this.playingId !== i) {
        this.stopSong(this.playingId);
        this.playSong(i);
        this.playingId = i;
      } else {
        this.stopSong(i);
        this.playingId = -1;  
      }
    } else {
      this.playSong(i);
      this.playingId = i;
    }
  }

  stopSong(i: number) {

  }

  playSong(i: number) {

  }

  playNextSong(i: number) {
    const lastSongId = this.songs.length - 1;
    const nextSongId = i === lastSongId ? 0 : i + 1;
    this.toggleSong(nextSongId);
  }

  songEnded(i: number) {
    this.playNextSong(i);
  }
}
