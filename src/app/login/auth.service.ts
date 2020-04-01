import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { urlApiLogin } from '../app.api';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  //constructor(private http: HttpClient) { }

  private usuarioAutenticado: boolean = false;
  constructor(private router: Router) { }



  FazerLogin(usuario:Usuario){

    if (usuario.nome == 'usuario@hotmail.com' &&
    usuario.password == '12345'){

      this.usuarioAutenticado = true;

      this.router.navigate(['/sacar'])

    }
    else{
      this.usuarioAutenticado = false;
    }


  }

  // FazerLogin(usuario:Usuario): any {

  //   //return this.http.post(`${urlApiLogin}api/`, {})
  //   debugger;
  //   return this.http.get(`${urlApiLogin}?login=${usuario.nome}&senha=${usuario.password}`)
    

  // }



}

