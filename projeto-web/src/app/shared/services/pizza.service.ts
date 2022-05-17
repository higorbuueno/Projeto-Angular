import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from '../dto/pizza-dto';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPizzas(): Observable<Pizza[]>{
    return this.http.get<Pizza[]>('http://localhost:3000/pizzas');
  }

  updatePizza(pizza: Pizza) {
      return this.http.patch<Pizza>(`http://localhost:3000/pizzas/${pizza.id}`, pizza);
  }
}
