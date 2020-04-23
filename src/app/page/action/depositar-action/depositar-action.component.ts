import { Component, OnInit } from '@angular/core';
import { DepositarComponent } from '../../depositar/depositar.component';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SacarModel } from 'src/app/model/Sacar.model';
import { OperacaoService } from 'src/app/service/operacao.service';
import { SaldoModel } from 'src/app/model/Saldo.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-depositar-action',
  templateUrl: './depositar-action.component.html',
  styleUrls: ['./depositar-action.component.css']
})
export class DepositarActionComponent implements OnInit {

  saldoModel: SaldoModel;
  loginForm: FormGroup;
  operaçaoModel: SacarModel;
  dialogConfig: MatDialogConfig;
  
  constructor(
    private dialog: MatDialog,
    private authservice: AuthService,
    private router: Router,
    private operacaoService: OperacaoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.operaçaoModel = new SacarModel()
    this.saldoModel = new SaldoModel(),
    this.loginForm = this.formBuilder.group({
      inputValor: new FormControl(""),
    });
    this.dialogConfig = {
      width: '700px',
      height: '550px',
      position: { top: '100%' },
      data: { data: this.operaçaoModel }
    };
    
    this.ListarDados()
  }

  ListarDados() {
    this.authservice.data.subscribe(data => {
      this.saldoModel = data;
    });
  }

  Depositar() {
    debugger;
    let inputValor: string = this.loginForm.get('inputValor').value;

    this.operacaoService.Depositar(this.saldoModel, parseFloat(inputValor)).subscribe((data: any) => {
      this.operaçaoModel.CpfCli = this.saldoModel.CpfCli;
      this.operaçaoModel.NumeroContaCli = this.saldoModel.NumeroContaCli
      this.operaçaoModel.SaldoAtual = this.saldoModel.SaldoConta;
      this.operaçaoModel.ValorSacar = inputValor;
    });
    const dialogConfig = {
      width: '700px',
      height: '550px',
      position: { top: '100%' },
      data: { data: this.operaçaoModel }
    };
    //this.router.navigate(["/depositar"]);
     this.dialog.open(DepositarComponent, dialogConfig);


  }

}
