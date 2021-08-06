import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  selected: string;
  @Output() itemSelected = new EventEmitter<string>();

  constructor() {
    this.selected = 'music';
  }

  onSelect(item: string) {
    if(item === this.selected) return;
    this.selected = item;
    this.itemSelected.emit(item); 
  }
}
