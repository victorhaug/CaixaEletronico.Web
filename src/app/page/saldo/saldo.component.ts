import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SaldoModel } from 'src/app/model/Saldo.model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { OperacaoService } from 'src/app/service/operacao.service';
import { AuthService } from 'src/app/login/auth.service';
import{MAT_DIALOG_DATA, MatDialogRef}from'@angular/material/dialog';




@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  @Input()

  operacao: FormGroup;
  saldoModel: SaldoModel;
  dialogConfig: MatDialogConfig;

  constructor(
    private formBuilder: FormBuilder,
    private operacaoService: OperacaoService,
    private dialog: MatDialog,
    private authservice: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
    this.operacao = this.formBuilder.group({
      inputSacar: new FormControl(""),
      inputSaldo: new FormControl(""),
      inputDepositar: new FormControl(""),
       
    })
    this.saldoModel = new SaldoModel()

      // this.dialogConfig = {
      //   width: '800px',
      //   height: '350px',
      //   position: { top: '13%' },
      //   data: { data: this.saldoModel }
      // };

  }

  SaldoDados() {
    this.authservice.data.subscribe(data => {
      this.saldoModel = data;
      this.operacaoService.Saldo(data).subscribe(data => {
        this.saldoModel.SaldoConta = this.Formatar(data);
      });
    });
  }

  Formatar(data: any) {
    let valorFormatado = parseFloat(data.Data).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    return valorFormatado;
  }

}
