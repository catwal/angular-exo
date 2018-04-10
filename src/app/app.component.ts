import { Component } from '@angular/core';

/* decorateur*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* propriété avec = valeur assignée*/
  title = 'app';
  name = 'Micheline';

  /* propriété avec : type assignée */
  aNumber: number;


  /* méthode avec fonctions entre {} */
  onUSerInput(event) {
    this.name = event.target.value;
  }
}
