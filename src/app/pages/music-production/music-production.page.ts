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
}
