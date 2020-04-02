import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { urlApiLogin, urlApi } from '../app.api';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoading: boolean;
  error: string;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }
  private usuarioAutenticado: boolean = false;



  // FazerLogin(usuario:Usuario){

    // if (usuario.nome == 'usuario@hotmail.com' &&
    // usuario.password == '12345'){

    //   this.usuarioAutenticado = true;

    //   this.router.navigate(['/sacar'])

    // }
    // else{
    //   this.usuarioAutenticado = false;
    // return this.http.get(`${urlApiLogin}api/Login, ?login=${usuario.nome}&senha=${usuario.password}`)
    // }


  //}

  FazerLogin(usuario:Usuario):any{

   return this.http.get(`${urlApiLogin}?cpf={39422493800}&senha={200}`)
  //  .subscribe(useracess => {
  //   this.isLoading = false;

  //   if(useracess.mensagem){
  //     this.error = useracess.mensagem;
  //     return
  //   }

  //   if(!useracess.jwt_token){
  //     this.error =  'Não foi possivel efetuar o login, tente novamente em alguns minutos';
  //     return;
  //   }

  //   this.router.navigate(['/sacar'])
  }
}





