import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AllbooksComponent } from './components/allbooks/allbooks.component';
import { AuthorComponent } from './components/author/author.component';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';

const appRoutes:Routes = [
  {
    path: '',
    component: AllbooksComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: 'changestatus/:id',
    component: AuthorComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
