import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtigosComponent } from "./artigos/artigos.component";
import { CargosComponent } from "./cargos/cargos.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MarcasComponent } from "./marcas/marcas.component";
import { PlataformasComponent } from "./plataformas/plataformas.component";
import { ProdutosComponent } from "./produtos/produtos.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'plataformas', component: PlataformasComponent},
    {path: 'marcas', component: MarcasComponent},
    {path: 'cargos', component: CargosComponent},
    {path: 'reviews', component: ReviewsComponent},
    {path: 'artigos', component: ArtigosComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);