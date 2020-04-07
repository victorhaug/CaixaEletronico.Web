import { Component, OnInit, Injectable, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent implements OnInit {

  @Input()
  isLoading: boolean;
  error: string;
  loginForm : FormGroup;
  
  constructor(
    private authservice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

      ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
          inputCpf: new FormControl(""),
          inputSenha: new FormControl("")
        })
  }

  fazerLogin(){

    let cpf:number = Number(this.loginForm.get("inputCpf").value);
    let senha:number = Number(this.loginForm.get("inputSenha").value);
    debugger;
    this.authservice.FazerLogin(cpf, senha).subscribe(async (data: any) => {
      if (!data.data) {
        this.error = "Dados Cpf ou senha estão invalido!!";
        return;
      }
      await this.router.navigate(["/sacar"]);
    });
  }
}
