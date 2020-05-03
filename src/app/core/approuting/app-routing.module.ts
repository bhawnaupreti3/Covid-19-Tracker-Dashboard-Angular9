import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { NewsComponent } from 'src/app/news/news.component';
import { PrecautionsComponent } from 'src/app/precautions/precautions.component';
import { AddNewsComponent } from 'src/app/add-news/add-news.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';


export const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'}, 
  {path:'dashboard', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'news', component: NewsComponent},
  {path:'precautions', component: PrecautionsComponent},
  {path:'addnews', component: AddNewsComponent},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
         
  ],
  exports: [RouterModule,

       
  ]
})
export class AppRoutingModule {
  constructor() {
    console.log("App routing module loaded.")
  }
 }