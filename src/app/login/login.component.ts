import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 private usuario: Usuario = new Usuario();

  constructor(private authservice: AuthService) { }

  ngOnInit() {

  
  }

  fazerLogin(){
 //console.log(this.usuario);
 this.authservice.FazerLogin(this.usuario);
  }

}
