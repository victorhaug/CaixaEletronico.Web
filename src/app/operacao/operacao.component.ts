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
  dialogConfig: MatDialogConfig;
  
  
  
  constructor(
    private authservice: AuthService,    
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private operacaoService: OperacaoService,
    ) { }
   
  saldoModel: SaldoModel;
  operaçaoModel: SacarModel;

  ngOnInit() {

    this.saldoModel = new SaldoModel(),
    this.operaçaoModel = new SacarModel();
    this.loginForm = this.formBuilder.group({
      inputValor: new FormControl(""),
    });

    this.dialogConfig = {
      width: '700px',
      height: '550px',
      position: { top: '100%' },
      data: { data: this.operaçaoModel}
    };
    this.ListarDados();
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
    let inputValor: string = this.loginForm.get('inputValor').value;
debugger;
    this.operacaoService.Depositar(this.saldoModel, parseFloat(inputValor)).subscribe((data: any) => 
    {
      this.operaçaoModel.CpfCli = this.saldoModel.CpfCli;
      this.operaçaoModel.NumeroContaCli = this.saldoModel.NumeroContaCli
      this.operaçaoModel.SaldoAtual = this.saldoModel.SaldoConta;
      this.operaçaoModel.ValorSacar =inputValor;
    });
    const dialogConfig = {
      width: '700px',
      height: '550px',
      position: { top: '100%' },
      data: { data: this.operaçaoModel }
    };
    this.dialog.open(DepositarComponent, dialogConfig);
    

  }

  ListarDados(){
    this.authservice.data.subscribe(data => {
      this.saldoModel = data;
    });
  }

  Sacar(){
    let inputValor = this.loginForm.get('inputValor').value;
      
    this.operacaoService.Sacar(this.saldoModel, parseFloat(inputValor)).subscribe((data: any) => {
      
      this.operaçaoModel.CpfCli = this.saldoModel.CpfCli;
      this.operaçaoModel.NumeroContaCli = this.saldoModel.NumeroContaCli;
      this.operaçaoModel.SaldoAtual = this.saldoModel.SaldoConta;
      this.operaçaoModel.ValorSacar = inputValor;
      this.operaçaoModel.NotasUtilizadas = data.Data.substr(92,7);
      this.dialog.open(SacarComponent, this.dialogConfig);
    });

    // const dialogConfig = {
    //   width: '700px',
    //   height: '550px',
    //   position: { top: '100%' },
    //   data: { data: this.operaçaoModel, teste: this.operaçaoModel }
    // };
    
  }

}
