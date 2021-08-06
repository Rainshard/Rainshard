import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { SongCardFrameComponent } from './components/song-card-frame/song-card-frame.component';
import { MusicProductionPage } from './pages/music-production/music-production.page';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    HeaderComponent,
    SongCardComponent,
    SongCardFrameComponent,
    MusicProductionPage,
    VideoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
