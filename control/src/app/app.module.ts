import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './found.component';
import { AboutComponent } from './about.component';
import { ItemComponent } from './item.component';
import { ItemDetailsComponent } from './item.details.component';
import { ItemStatComponent } from './item.stat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ItemComponent,
    ItemDetailsComponent,
    ItemStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
