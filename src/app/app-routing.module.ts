import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
// import { CreateComponent } from './create/create.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: DataBindingComponent},
  {path: 'personnage', component: TabsComponent,
  children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    { path: ':side', component: ListComponent }
  ]},
 // {path: 'nouveau-perso', component: CreateComponent},
  {path: 'nouveau-perso', loadChildren: './create/create.module#CreateModule'},
  {path: '**', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
