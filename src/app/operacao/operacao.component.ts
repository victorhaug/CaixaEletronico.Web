import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SaldoComponent } from '../page/saldo/saldo.component';
import { SaldoModel } from '../model/Saldo.model';
import { DepositarComponent } from '../page/depositar/depositar.component';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OperacaoService } from '../service/operacao.service';
import { SacarComponent } from '../page/sacar/sacar.component';
import { SacarModel } from '../model/Sacar.model';

@Component({
  selector: 'app-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {


  loginForm : FormGroup;
  
  constructor(
    private authservice: AuthService,    
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private operacaoService: OperacaoService,
    ) { }
   
  saldoModel: SaldoModel;
  operaçaoModel: SacarModel;

  ngOnInit() {

    this.saldoModel = new SaldoModel(),
    this.operaçaoModel = new SacarModel();
    this.loginForm = this.formBuilder.group({
      inputValor: new FormControl(""),
    })
    
  }

  Saldo()
  {
    this.authservice.data.subscribe(data => {
      this.saldoModel = data
    })
    const dialogConfig = {
      width: '700px',
      height: '550px',
      position: { top: '100%' },
      data: { data: this.saldoModel }
    };
    this.dialog.open(SaldoComponent, dialogConfig);
  }

  Depositar(){

    this.authservice.data.subscribe(data => {
      let inputValor: string = this.loginForm.get('inputValor').value;
      this.operaçaoModel.CpfCli = data.CpfCli;
      this.operaçaoModel.NumeroContaCli = data.NumeroContaCli;
      this.operaçaoModel.SaldoAtual = data.SaldoConta;
      this.operaçaoModel.ValorSacar =inputValor;
      // this.operacaoService.Depositar(data, parseFloat(inputValor)).subscribe(data => {
      
      // });
    });
    const dialogConfig = {
      width: '700px',
      height: '550px',
      position: { top: '100%' },
      data: { data: this.operaçaoModel }
    };
    this.dialog.open(DepositarComponent, dialogConfig);
    

  }

  // Depositar(){

  //   this.authservice.data.subscribe(data => {
  //     let inputValor = this.loginForm.get('inputValor').value;
  //     this.saldoModel.CpfCli = data.CpfCli;
  //     this.saldoModel.NumeroContaCli = data.NumeroContaCli;
  //     this.saldoModel.SaldoConta =inputValor;
  //     this.operacaoService.Depositar(data, parseFloat(inputValor)).subscribe(data => {
      
  //     });
  //   });
  //   const dialogConfig = {
  //     width: '700px',
  //     height: '550px',
  //     position: { top: '100%' },
  //     data: { data: this.saldoModel }
  //   };
  //   this.dialog.open(DepositarComponent, dialogConfig);
    

  // }

  Sacar(){
    this.authservice.data.subscribe(data => {
      let inputValor = this.loginForm.get('inputValor').value;
      this.operaçaoModel.CpfCli = data.CpfCli;
      this.operaçaoModel.NumeroContaCli = data.NumeroContaCli;
      this.operaçaoModel.SaldoAtual = data.SaldoConta;
      this.operaçaoModel.ValorSacar = inputValor;
      this.operacaoService.Sacar(data, parseFloat(inputValor)).subscribe(data => {
      });
    });
    const dialogConfig = {
      width: '700px',
      height: '550px',
      position: { top: '100%' },
      data: { data: this.operaçaoModel }
    };
    debugger;
    this.dialog.open(SacarComponent, dialogConfig);
    
  }

}
