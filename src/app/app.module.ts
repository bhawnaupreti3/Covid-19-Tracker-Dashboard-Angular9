import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { CountryDataService } from './core/Service/country-data.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardChildComponent } from './dashboard-child/dashboard-child.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './core/approuting/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewsComponent } from './news/news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NewInMemoryDataService } from './core/Service/new-in-memory-data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardChildComponent,
    LoginComponent,
    HeaderComponent,
    NewsComponent,
    PrecautionsComponent,
    AddNewsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule ,
    RouterModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
   MatSelectModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(NewInMemoryDataService,{ passThruUnknownUrl: true }),
  ],
  providers: [CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
