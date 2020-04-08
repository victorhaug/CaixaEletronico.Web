import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SacarComponent } from './page/sacar/sacar.component';
import { ModuleWithProviders } from '@angular/core';
import { OperacaoComponent } from './operacao/operacao.component';
import { SaldoComponent } from './page/saldo/saldo.component';
import { DepositarComponent } from './page/depositar/depositar.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'operacao', component: OperacaoComponent },
    { path: 'saldo', component: SaldoComponent },
    { path: 'sacar', component: SacarComponent },
    { path: 'depositar', component: DepositarComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);