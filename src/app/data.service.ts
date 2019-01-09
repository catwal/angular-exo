import { LogService } from './log.service';
import { Injectable } from '@angular/core';

/* vu que les données sont centralisées dans le service on peut enlever les outputs dans les components */
@Injectable()
export class DataService {

constructor(private logService: LogService) {}

  public characters = [
    {name: 'Luke Sky', side: ''},
    {name: 'Dark Vador', side: ''},
    {name: 'winnie', side: ''},
    {name: 'gilbertte', side: ''}];

    getCharacters(chosenList) {
      if (chosenList === 'all') {
        return this.characters.slice();
      }
      return this.characters.filter((char) => {
        return char.side === chosenList;
      });
    }

    onSideChosen(charInfo) {
      const pos = this.characters.findIndex((char) => {
        return char.name === charInfo.name;
      });
        this.characters[pos].side = charInfo.side;
        this.logService.writeLog('le perso : ' + charInfo.name + ' a changé de côté pour : ' + charInfo.side);
    }

    addCharacter(name, side) {
      const pos = this.characters.findIndex((char) => {
        return char.name === name;
      });
      if (pos !== -1) { /* existe déjà */
        return;
      }
      const newChar = {name: name, side: side};
      this.characters.push(newChar);
    }
}
