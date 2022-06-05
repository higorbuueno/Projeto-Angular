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
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios');
  }
}
