import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ContentComponent } from './content/content.component';
import { ListUserComponent } from './list-user/list-user.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';
import { ListFournisseurComponentComponent } from './list-fournisseur-component/list-fournisseur-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ContentComponent,
    ListUserComponent,
    FournisseurComponentComponent,
    ListFournisseurComponentComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
