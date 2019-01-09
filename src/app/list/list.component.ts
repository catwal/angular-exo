import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
/* pour pouvoir binder du tableau de characters établis dans tabs.component */

@Input() characters;

  constructor() { }

  ngOnInit() {
  }

}
