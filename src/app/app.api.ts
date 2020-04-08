import { environment } from 'src/environments/environment';
import { e } from '@angular/core/src/render3';

// Caixa eletronico
export const urlApi = environment.api_caixaeletronico;
export const urlApiLogin = environment.api_CaixaLogin;
export const urlDados = environment.api_listadados;

// Operacoes Caixa 
export const urlSacar = environment.api_operacaoSacar;
export const urlSaldo = environment.api_operacaoSaldo;
export const urlDepositar = environment.api_operacaoDepositar;