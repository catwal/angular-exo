import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
/* public characters = [
  {name: 'Luke Sky', side: ''},
  {name: 'Dark Vador', side: ''},
  {name: 'winnie', side: ''},
  {name: 'gilbertte', side: ''}];
 */
  public characters = Array<any>();
  public  chosenList = 'all';

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  onChoose(side: string) {
  //  console.log(side);
  this.chosenList = side;
  }

  getCharacters() {
  this.characters =  this.dataService.getCharacters(this.chosenList);
  return this.characters;
  }
  /* methode mise dans le service */
 /*  getCharacters() {
    if (this.chosenList === 'all') {
      return this.dataService.characters.slice();
    }
    return this.dataService.characters.filter((char) => {
      return char.side === this.chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
      this.characters[pos].side = charInfo.side;
  }
*/
}
