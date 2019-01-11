import { Component, OnInit } from '@angular/core';

/* import du package lodash pour utiliser JS package */
// import 'lodash';
// declare var _: any;

/* après import @types/lodash */
import {random} from 'lodash';
import { DataService } from './data.service';
/* decorateur*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 /* propriété avec = valeur assignée*/
 title = 'Exercices Angular Basics';
 name = 'Micheline';

 /* propriété avec : type assignée */
 aNumber: number;
 public number: number;
  constructor(private dataService: DataService) {}

ngOnInit() {
  this.dataService.fetchCharacters();
}

  /* méthode avec fonctions entre {} */
  onUserInput(event) {
    this.name = event.target.value;
    console.log(event);
  }
/* pour importer un script JS on peut mettre dans angular.cli à script
    ou utiliser npm*/
  onNewNumber() {
   // this.number = _.random(1, 10);
    this.number = random(1, 100);

  }
}
