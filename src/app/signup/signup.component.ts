import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {


  constructor(private router: Router) {}


  goToPuzzle() {
    this.router.navigate(['/puzzle']);
  }

  goBackHome() {
    this.router.navigate(['/']);
  }

  goToLogIn() {
    this.router.navigate(['/login']);
  }
}