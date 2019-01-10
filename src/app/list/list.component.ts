import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
/* pour pouvoir binder du tableau de characters établis dans tabs.component */
// @Input() characters;
// @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

public characters: Array<any>;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.characters = this.dataService.getCharacters(params.side);
      }
    );
  }

  onSideAssigned(charInfo) {
    console.log(charInfo);
   // this.sideAssigned.emit(charInfo);
  }
}
