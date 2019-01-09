import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public availableSides = [
  {display: 'None', value: ''},
  {display: 'Light', value: 'light'},
  {display: 'Dark', value: 'dark'}];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
  // console.log(form.value);

  if (!form.invalid) {
    this.dataService.addCharacter(form.value.name, form.value.side);

  }
  }
}
