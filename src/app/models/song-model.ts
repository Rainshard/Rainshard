export class SongModel {
  public id: number;
  public name: string;
  public audioPath: string;
  public description: string;

  fromSongData(id:number, name: string, audioName: string, description: string) {
    this.id = id;
    this.name = name;
    this.audioPath = `assets/mp3/${audioName}.mp3`;
    this.description = description;
  }
}