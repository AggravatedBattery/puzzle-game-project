import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/puzzle" routerLinkActive="active">Puzzle Game</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'sliding-puzzle';
}
