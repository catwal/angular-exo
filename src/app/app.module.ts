import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponentComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
