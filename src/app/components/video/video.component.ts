import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  template: '<div class="video-container"><iframe class="video" src="https://www.youtube.com/embed/xyNyEg3aEWU"></iframe></div>',
  styles: [
    `
    .video-container {
      margin-left: 8px;
      background-color: var(--main-color);
      width: 440px;
      height: 334px;
      border-radius: 16px 4px;
      display: inline-block;
      vertical-align: top;
    }
    
    .video {
      margin: 8px;
      width: 420px;
      height: 315px;
      border-radius: 16px 4px;
    }
    `
  ]})
export class VideoComponent  {
}
