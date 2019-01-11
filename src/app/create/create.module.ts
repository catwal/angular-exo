import { NgModule } from '@angular/core';
import { CreateComponent } from './create.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: CreateComponent}
    ])
  ]
})
export class CreateModule {

}


