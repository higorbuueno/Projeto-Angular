import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../dto/noticia-dto';

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  constructor(private http: HttpClient) {}

  login(body: any): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:3000/api/login', body);
  }

  getInformacoesParaGrafico(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/informacoes-grafico');
  }

  getAll(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>('http://localhost:3000/api/all-textos');
  }

  getAllTipoNoticias(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/all-tipos-noticias');
  }
  

  getAllNoticias(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/all-noticias');
  }

  getAllCards(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/all-cards');
  }

  getAllArtigos(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/all-artigos');
  }

  getAllReviews(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/all-reviews');
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

  // PLATAFORMAS
  getAllPlataformas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/all-plataformas');
  }

  createPlataforma(plataforma: any) {
    return this.http.post<Noticia>(`http://localhost:3000/api/plataforma`, plataforma);
  }

  updatePlataforma(plataforma: any) {
    return this.http.patch<Noticia>(`http://localhost:3000/api/plataforma`, plataforma);
  }

  deletePlataforma(id: any) {
    return this.http.delete<Noticia>(`http://localhost:3000/api/plataforma/${id}`);
  }

  getAllTipoPlataformas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/all-tipos-plataformas');
  }
  // CARGOS
  getAllCargos(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/all-cargos');
  }

  createCargo(cargo: any) {
    return this.http.post<Noticia>(`http://localhost:3000/api/cargo`, cargo);
  }

  updateCargo(cargo: any) {
    return this.http.patch<Noticia>(`http://localhost:3000/api/cargo`, cargo);
  }

  deleteCargo(id: any) {
    return this.http.delete<Noticia>(`http://localhost:3000/api/cargo/${id}`);
  }

  // MARCAS
  getAllMarcas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/all-marcas');
  }

  createMarca(marca: any) {
    return this.http.post<Noticia>(`http://localhost:3000/api/marca`, marca);
  }

  updateMarca(marca: any) {
    return this.http.patch<Noticia>(`http://localhost:3000/api/marca`, marca);
  }

  deleteMarca(id: any) {
    return this.http.delete<Noticia>(`http://localhost:3000/api/marca/${id}`);
  }

  
}
