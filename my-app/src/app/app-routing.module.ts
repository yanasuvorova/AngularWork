import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { ItemComponent } from './routing/item/item.component';
import { ItemDetailsComponent } from './routing/item/item-details/item-details.component';
import { ItemStartComponent } from './routing/item/item-start/item-start.component';


const routes: Routes = [
 {path: "", component: HomeComponent},
 {path: "about", component: AboutComponent},
 {path: "item/:id", component: ItemComponent, children: [
   {path: "details", component: ItemDetailsComponent},
   {path: "stat", component: ItemStartComponent}
 ] },
 {path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
