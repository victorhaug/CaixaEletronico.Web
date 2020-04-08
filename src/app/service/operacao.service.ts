import { Injectable } from '@angular/core';
import { urlSacar, urlSaldo } from '../app.api';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from '../login/Cliente';
import { map, catchError } from 'rxjs/operators';
import { SaldoModel } from '../model/Saldo.model';

@Injectable()
export class OperacaoService {


  private dataSource = new BehaviorSubject<SaldoModel>(null);

  data = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }



    Saldo(model: SaldoModel ): Observable<any>{
     return this.http.get(`${urlSaldo}?cpf=${model.CpfCli}&saldo=${model.SaldoConta}`)
     .pipe(map((response) => response))
     .pipe(catchError((error) => error));
    }

    Sacar(){

    }

    Depositar(){

    }
  
}