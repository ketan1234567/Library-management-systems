import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent  } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TablesComponent } from './tables/tables.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ModalsComponent } from './modals/modals.component';
import { FormsComponent } from './forms/forms.component';
import { AddBookComponent } from './Category/add-book/add-book.component';
import { ViewCategoryComponent } from './Category/view-category/view-category.component';
import { AddAuthorComponent } from './author/add-author/add-author.component';
import { ViewAuthorComponent } from './author/view-author/view-author.component';
import { AddBooksComponent } from './Books/add-books/add-books.component';
import { ViewBooksComponent } from './Books/view-books/view-books.component';
import { IssueNewBooksComponent } from './issue-Book/issue-new-books/issue-new-books.component';
import { IssueViewBooksComponent } from './issue-Book/issue-view-books/issue-view-books.component';
import { ViewUsersComponent } from './Users/view-users/view-users.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'view-category', component: ViewCategoryComponent },
  { path: 'add-author', component: AddAuthorComponent },
  { path: 'view-author', component: ViewAuthorComponent },
  { path: 'add-books', component: AddBooksComponent },
  { path: 'view-books', component: ViewBooksComponent },
  { path: 'issue-books', component: IssueNewBooksComponent },
  { path: 'issue-view-books', component: IssueViewBooksComponent },
  { path: 'view-users', component: ViewUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
