import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPage;

  constructor() {
    this.selectedPage = 'music';
  }

  onNavbarItemSelected(newPage: string) {
    if(newPage === this.selectedPage) return;
    this.selectedPage = newPage;
  }
}
