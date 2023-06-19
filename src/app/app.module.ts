import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TablesComponent } from './tables/tables.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { ModalsComponent } from './modals/modals.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './Category/add-book/add-book.component';
import { ViewCategoryComponent } from './Category/view-category/view-category.component';
import { AddAuthorComponent } from './author/add-author/add-author.component';
import { ViewAuthorComponent } from './author/view-author/view-author.component';
import { AddBooksComponent } from './Books/add-books/add-books.component';
import { ViewBooksComponent } from './Books/view-books/view-books.component';
import { IssueNewBooksComponent } from './issue-Book/issue-new-books/issue-new-books.component';
import { IssueViewBooksComponent } from './issue-Book/issue-view-books/issue-view-books.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SettingsComponent,
    TablesComponent,
    SigninComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ButtonsComponent,
    FormsComponent,
    ModalsComponent,
    NotificationsComponent,
    AddBookComponent,
    ViewCategoryComponent,
    AddAuthorComponent,
    ViewAuthorComponent,
    AddBooksComponent,
    ViewBooksComponent,
    IssueNewBooksComponent,
    IssueViewBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
