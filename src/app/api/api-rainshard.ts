import { songData } from '../data/song-data';
import { SongModel } from '../models/song-model';

export class ApiRainshard {

  fetchSongs(): SongModel[] {
    const songs:SongModel[] = [];
    songData.forEach((song, i) => {
      let model = new SongModel();
      model.fromSongData(i, song[0], song[1], song[2]);
      songs.push(model);
    });
    return songs;
  }
}