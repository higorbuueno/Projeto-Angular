import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './dto/usuario-dto';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:3000/api/all-usuarios');
  }

  getAllCargos(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/api/all-cargos');
  }

  create(body: any) {
    return this.http.post<any>(`http://localhost:3000/api/usuario`, body);
  }

  update(body: any) {
    return this.http.patch<any>(`http://localhost:3000/api/usuario`, body);
  }

  delete(id: number) {
    return this.http.delete<any>(`http://localhost:3000/api/usuario/${id}`);
  }
}
