import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SacarComponent } from './sacar/sacar.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
{path:'sacar', component: SacarComponent },    
{path: '', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);