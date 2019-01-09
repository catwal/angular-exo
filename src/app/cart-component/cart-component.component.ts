import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
public items = ['banane', 'pomme', 'poire'];
public newItem = '';
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    console.log(this.newItem);
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.clear();
    }

  }
  clear() {
    this.newItem = '';
  }
}
