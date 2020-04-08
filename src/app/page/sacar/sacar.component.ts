import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SaldoModel } from '../../model/Saldo.model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { OperacaoService } from 'src/app/service/operacao.service';


@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class SacarComponent implements OnInit {

  @Input()
  operacao: FormGroup;
  saldoModel: SaldoModel;
  dialogConfig: MatDialogConfig;

  constructor(
    private formBuilder: FormBuilder,
    private operacaoService: OperacaoService,
    private dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.operacao = this.formBuilder.group({
      inputSacar: new FormControl(""),
      inputSaldo: new FormControl(""),
      inputDepositar: new FormControl(""),

    })

    this.dialogConfig = {
      width: '800px',
      height: '350px',
      position: { top: '13%' },
      data: { data: this.saldoModel }
    };

  }
  Sacar() {


  }
}


