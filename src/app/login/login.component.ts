import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {
 
  isLoading: boolean;
  error: string;
 
  private usuario: Usuario = new Usuario();
  constructor(
    private authservice: AuthService,
    private router: Router
    ) { }
  

  ngOnInit() {

  
  }

  fazerLogin(){
    // this.isLoading = true;
    console.log(typeof(this.usuario.cpf));
    this.authservice.FazerLogin(this.usuario)
  
   
  }

  

}
