import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  /* va pouvoir être appelé après dans un autre component (listComponent) */
  @Input() character;

  /* va être appelé plus proprement par le tabs component */
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  onAssigned(side: string) {
   // this.character.side = side;
  // this.sideAssigned.emit({name: this.character.name, side: side});
  this.dataService.onSideChosen({name: this.character.name, side: side});
  }

}
