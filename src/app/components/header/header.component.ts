import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<div class="header"><h1>Rainshard</h1></div>',
  styles: [
    `
    .header {
      background-color: var(--light-color);
    }
    .header h1 {
      margin:0px auto;
      padding:12px;
      font-size: 32px;
      font-family: 'Courier New', serif;
      font-weight: bold;
      color:var(--main-color);
    }
    `
  ]
})
export class HeaderComponent {
}
