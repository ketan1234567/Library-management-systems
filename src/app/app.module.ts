import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    ReactiveFormsModule,
    HttpClientModule,

    AdminModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
