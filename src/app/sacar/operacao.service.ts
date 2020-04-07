import { Injectable } from '@angular/core';
import { urlSacar, urlSaldo } from '../app.api';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from '../login/Cliente';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {


  private dataSource = new BehaviorSubject<Cliente>(null);

  data = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }



    Saldo(cpf: number): Observable<any>{

     return this.http.get(`${urlSaldo}?cpf=${cpf}}`)
     .pipe(map((response) => response))
     .pipe(catchError((error) => error));
    }

    Sacar(){

    }

    Depositar(){

    }
  
}