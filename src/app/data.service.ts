import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/* vu que les données sont centralisées dans le service on peut enlever les outputs dans les components */
@Injectable()
export class DataService {

  public characters = [
    {name: 'Luke Sky', side: ''},
    {name: 'Dark Vador', side: ''},
    {name: 'winnie', side: ''},
    {name: 'gilbertte', side: ''}];
    public charactersChanged = new Subject<void>();

constructor(private logService: LogService, private http: Http) {}

    fetchCharacters() {
      this.http.get('http://swapi.co/api/people/')
      .map((res) => {
        const data = res.json();
        const extractsChars = data.results;
        const chars = extractsChars.map((char) => {
          return {name: char.name, side: ''};
        });
        return chars;
      })
      .subscribe((data) => {
      console.log(data);
      this.characters = data;
      this.charactersChanged.next();


      });
    }

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
        this.charactersChanged.next();
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
