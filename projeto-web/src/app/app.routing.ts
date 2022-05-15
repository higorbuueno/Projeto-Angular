import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { HomeComponent } from "./home/home.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: '', component: HomeComponent}

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);