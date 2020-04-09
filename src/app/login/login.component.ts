import { Component, OnInit, Injectable, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SaldoModel } from '../model/Saldo.model';

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
  SaldoModel : SaldoModel;
  
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

        this.SaldoModel = new SaldoModel();
  }

  ListarDados(cpf: number, senha: number) {
    this.authservice.ListarDados(cpf,senha).subscribe((data: any) => {
      this.SaldoModel.SaldoConta = data.Data.substr(35, 5);
      this.SaldoModel.CpfCli = data.Data.substr(50, 11);
      this.SaldoModel.NumeroContaCli = data.Data.substr(18, 3);
      this.authservice.updatedDataSelection(this.SaldoModel);
    });
  }

  fazerLogin(){
    let cpf:number = Number(this.loginForm.get("inputCpf").value);
    let senha:number = Number(this.loginForm.get("inputSenha").value);
    this.authservice.FazerLogin(cpf, senha).subscribe(async (data: any) => {
      if (!data.Data) {
        this.error = "Seus dados, Cpf ou senha estão invalido!!";
        return;
      }
      this.ListarDados(cpf, senha);
      await this.router.navigate(["/operacao"]);
    });
  }
}
