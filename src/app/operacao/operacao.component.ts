import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SaldoComponent } from '../page/saldo/saldo.component';
import { SaldoModel } from '../model/Saldo.model';

@Component({
  selector: 'app-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  constructor(
    private authservice: AuthService,    
    private dialog: MatDialog,
    ) { }
   
  saldoModel: SaldoModel;

  ngOnInit() {

    this.saldoModel = new SaldoModel()
    
  }

  Saldo()
  {
    this.authservice.data.subscribe(data => {
      this.saldoModel = data
    })
    const dialogConfig = {
      width: '800px',
      height: '350px',
      position: { top: '13%' },
      data: { data: this.saldoModel }
    };
    this.dialog.open(SaldoComponent, dialogConfig);
  }
}
