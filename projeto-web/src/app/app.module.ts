import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgxMaskModule } from 'ngx-mask';
import { PlataformasComponent } from './plataformas/plataformas.component';
import { CargosComponent } from './cargos/cargos.component';
import { MarcasComponent } from './marcas/marcas.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    UsuariosComponent,
    ProdutosComponent,
    PlataformasComponent,
    CargosComponent,
    MarcasComponent,
    ArtigosComponent,
    ReviewsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ progressBar: true }),
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
