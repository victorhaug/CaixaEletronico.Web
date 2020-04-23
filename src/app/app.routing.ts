import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SacarComponent } from './page/sacar/sacar.component';
import { ModuleWithProviders } from '@angular/core';
import { OperacaoComponent } from './operacao/operacao.component';
import { SaldoComponent } from './page/saldo/saldo.component';
import { DepositarComponent } from './page/depositar/depositar.component';
import { SacarActionComponent } from './page/action/sacar-action/sacar-action.component';
import { DepositarActionComponent } from './page/action/depositar-action/depositar-action.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'operacao', component: OperacaoComponent },
    { path: 'saldo', component: SaldoComponent },
    { path: 'sacar', component: SacarComponent },
    { path: 'depositar', component: DepositarComponent },
    { path: 'sacaraction', component: SacarActionComponent },
    { path: 'depositaraction', component: DepositarActionComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);