import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
/*
const routes = [
  {path: '', component: DataBindingComponent},
  {path: 'personnage', component: TabsComponent,
  children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    { path: ':side', component: ListComponent }
  ]},
  {path: 'nouveau-perso', component: CreateComponent},
  {path: '**', redirectTo: '/'}

]; */

@NgModule({
  declarations: [
    AppComponent,
    CartComponentComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateComponent,
    HeaderComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   // RouterModule.forRoot(routes),
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
