import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../dto/noticia-dto';

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>('http://localhost:3000/api/all-noticias');
  }

  getAllTipos(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/all-tipos');
  }

  create(pizza: Noticia) {
    return this.http.post<Noticia>(`http://localhost:3000/api/`, pizza);
  }

  update(pizza: Noticia) {
    return this.http.patch<Noticia>(`http://localhost:3000/api/`, pizza);
  }

  delete(id: number) {
    return this.http.delete<Noticia>(`http://localhost:3000/api/${id}`);
  }
}
