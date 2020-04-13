import { Injectable } from '@angular/core';
import { urlSacar, urlSaldo, urlDepositar } from '../app.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from '../login/Cliente';
import { map, catchError } from 'rxjs/operators';
import { SaldoModel } from '../model/Saldo.model';

@Injectable()
export class OperacaoService {


  private dataSource = new BehaviorSubject<SaldoModel>(null);
  data = this.dataSource.asObservable();
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  Saldo(model: SaldoModel): Observable<any> {
    return this.http.get(`${urlSaldo}?cpf=${model.CpfCli}&saldo=${model.SaldoConta}`)
      .pipe(map((response) => response))
      .pipe(catchError((error) => error));
  }

  Sacar(model: SaldoModel, valorSacar: any) {
    
    return this.http.post(`${urlSacar}?ValorSacar=${valorSacar}`,JSON.stringify(model),
    { headers: this.headers })
  .pipe(map((response) => response))
  .pipe(catchError((error) => error));

  }

  Depositar(modal: SaldoModel, valorDepositar: number) {
 
    return this.http.post(`${urlDepositar}?valorDepositar=${valorDepositar}`, JSON.stringify(modal),
      { headers: this.headers })
      .pipe(map((response) => response))
      .pipe(catchError((error) => error));
  }

}

