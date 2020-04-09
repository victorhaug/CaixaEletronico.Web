import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SacarModel } from 'src/app/model/Sacar.model';
import { SaldoModel } from 'src/app/model/Saldo.model';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {

  operacao: SacarModel;
  teste: SaldoModel;
  
  constructor(
    public dialogRef: MatDialogRef<DepositarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
  ) { }

  ngOnInit() {

    this.operacao = new SacarModel();
    this.teste =  new SaldoModel();
    this.DepositoDados();
    
  }

  DepositoDados() {
    this.operacao = this.data.data;
    
  }
    
  close() {
    this.dialogRef.close();
  
  }

}
