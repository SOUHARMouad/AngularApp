import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ArticlesComponent } from './articles/articles.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { PhotosComponent } from './photos/photos.component';
import {RouterModule,Routes} from '@angular/router';
import {SrvService} from './srv.service';
const appRoutes : Routes=[
  {path: 'Articles',component: ArticlesComponent,},
  {path: 'Utulisateurs',     component:  UtilisateursComponent,},
  {path: 'Photos',component:  PhotosComponent,},
  {path:'',
  redirectTo: 'about',
  pathMatch: 'full',
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ArticlesComponent,
    UtilisateursComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SrvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
