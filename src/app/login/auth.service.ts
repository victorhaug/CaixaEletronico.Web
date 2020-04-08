import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { from, Observable, BehaviorSubject } from 'rxjs';
import { urlApiLogin, urlApi, urlDados } from '../app.api';
import { LoginComponent } from './login.component';
import { cp } from '@angular/core/src/render3';
import { map, catchError } from 'rxjs/operators';
import { Cliente } from './Cliente';
import { SaldoModel } from '../model/Saldo.model';
import { SacarComponent } from '../page/sacar/sacar.component';



@Injectable()
export class AuthService {

  private dataSource = new BehaviorSubject<SaldoModel>(null);
  data = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }

  FazerLogin(cpf: number, senha: number): Observable<any> {

    return this.http.get(`${urlApiLogin}?cpf=${cpf}&senha=${senha}`)
      .pipe(map((response) => response))
      .pipe(catchError((error) => error));
  }

  public ListarDados(cpf: number, senha: number): Observable<any> {
    return this.http.get(`${urlDados}?cpf=${cpf}&senha=${senha}`)
      .pipe(map((response) => response))
      .pipe(catchError((error) => error));
  }

  updatedDataSelection(data: SaldoModel) {
    this.dataSource.next(data);
  }


}

