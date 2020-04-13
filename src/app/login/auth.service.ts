import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, BehaviorSubject } from 'rxjs';
import { urlApiLogin, urlApi, urlDados } from '../app.api';
import { map, catchError } from 'rxjs/operators';
import { SaldoModel } from '../model/Saldo.model';




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

