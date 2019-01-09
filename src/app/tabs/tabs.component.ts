import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
public characters = [
  {name: 'Luke Sky', side: ''},
  {name: 'Dark Vador', side: ''}];
public  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }
  onChoose() {

  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.chosenList.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    });
  }
}
