import { Component, OnInit } from '@angular/core';
import {random} from 'lodash';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  title = 'Exercices Angular Basics';
  name = 'Micheline';

  aNumber: number;
  public number: number;

  constructor() { }

  ngOnInit() {
  }
  onUserInput(event) {
    this.name = event.target.value;
    console.log(event);
  }
  onNewNumber() {
    this.number = random(1, 100);

  }
}
