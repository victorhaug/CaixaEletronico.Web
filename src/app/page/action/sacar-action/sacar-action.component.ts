import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OperacaoComponent } from 'src/app/operacao/operacao.component';
import { SacarModel } from 'src/app/model/Sacar.model';
import { OperacaoService } from 'src/app/service/operacao.service';
import { SaldoModel } from 'src/app/model/Saldo.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SacarComponent } from '../../sacar/sacar.component';
import { AuthService } from 'src/app/login/auth.service';


@Component({
  selector: 'app-sacar-action',
  templateUrl: './sacar-action.component.html',
  styleUrls: ['./sacar-action.component.css']
})
export class SacarActionComponent implements OnInit {

  saldoModel: SaldoModel;
  loginForm: FormGroup;
  dialogConfig: MatDialogConfig;
  operaçaoModel: SacarModel;
  review_btn: Boolean;
  
  constructor(
    private formBuilder: FormBuilder,
    private operacaoService: OperacaoService,
    private dialog: MatDialog,
    private authservice: AuthService,
    
  ) { }
  

  ngOnInit() {

    this.operaçaoModel = new SacarModel()
    this.saldoModel = new SaldoModel(),
    this.loginForm = this.formBuilder.group({
      inputValor: new FormControl(" "),
    });
    this.dialogConfig = {
      width: '700px',
      height: '550px',
      position: { top: '100%' },
      data: { data: this.operaçaoModel }
    };
    this.ListarDados();

    this.review_btn = true;
  }

  ListarDados() {
    this.authservice.data.subscribe(data => {
      this.saldoModel = data;
    });
  }
Sacar() {

    let inputValor = this.loginForm.get('inputValor').value;
    
    this.operacaoService.Sacar(this.saldoModel, parseFloat(inputValor)).subscribe((data: any) => {
      if (data.Codigo == 200){
        
        this.operaçaoModel.CpfCli = this.saldoModel.CpfCli;
        this.operaçaoModel.NumeroContaCli = this.saldoModel.NumeroContaCli;
        this.operaçaoModel.SaldoAtual = this.saldoModel.SaldoConta;
        this.operaçaoModel.ValorSacar = inputValor;
        this.operaçaoModel.NotasUtilizadas = data.Data.substr(95, 7)
        this.dialog.open(SacarComponent, this.dialogConfig);
      } 
      else{
        const diaLogErro = {
          width: '700px',
          height: '550px',
          position: { top: '100%' },
          data: { data: data }}
        this.dialog.open(SacarComponent, diaLogErro);
      }
    });
  }
  
  keyup(event: any) {
    let inputValor: string = this.loginForm.get('inputValor').value;

    if (parseFloat(inputValor) < 10 || inputValor.length == 0) {

      this.review_btn = true
    }
    else {

      this.review_btn = false
    }

  }
}
