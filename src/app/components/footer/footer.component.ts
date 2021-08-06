import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div><p>copyright &copy; rainshard.com</p></div>`,
  styles: [
    `div {
      color:var(--main-color);
      background-color: var(--light-color);
      text-align:center;
      padding: 5px;
      position:fixed;
      bottom:0;
      width:100%;
    }`]
})
export class FooterComponent {
}
