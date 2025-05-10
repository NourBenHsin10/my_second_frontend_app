import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

  

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

  

import { UserModule } from './user/user.module';
import { ApprovalModule } from './approval/approval.module';
import { NiveauModule } from './niveau/niveau.module';
import { EtatModule } from './etat/etat.module';
/*import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component'
*/
  

@NgModule({

  declarations: [

    AppComponent,
     /*LoginComponent,
     RegisterComponent,
     DashboardComponent
*/
  ],

  imports: [

    BrowserModule,

    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    UserModule,
    ApprovalModule,
    NiveauModule,
    EtatModule,

    HttpClientModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
