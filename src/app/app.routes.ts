import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'puzzle', component: PuzzleComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];