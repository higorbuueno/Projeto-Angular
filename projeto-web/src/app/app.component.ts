import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PizzasService } from './shared/services/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projeto-web';

  constructor(
    private router: Router
    ) {}

  logout() {
    sessionStorage.clear();
    this.router.navigate(['home']);
  }
}
