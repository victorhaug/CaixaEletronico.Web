import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SaldoModel } from '../../model/Saldo.model';
import { MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OperacaoService } from 'src/app/service/operacao.service';
import { AuthService } from 'src/app/login/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SacarModel } from 'src/app/model/Sacar.model';


@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class SacarComponent implements OnInit {

  @Input()
  novoArray: any;
  saldoModel: SaldoModel;
  dialogConfig: MatDialogConfig;
  authservice: AuthService;
  operacao: SacarModel;

  constructor(
    private formBuilder: FormBuilder,
    private operacaoService: OperacaoService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<SacarComponent>,
    private _snackBar: MatSnackBar,

    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
   
    
    this.operacao = new SacarModel();
    this.ListarUsuario();

  }
  ListarUsuario() {
    this.operacao = this.data.data;

    }

  close() {
    this.dialogRef.close();
  }
  
  FormatarValor(data: any) {
    let valorFormatado = parseFloat(data).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    return valorFormatado;
  }

  }

  // MontarArrayNotas(ArrayNotasDevolvidas: string) {
  //   if (ArrayNotasDevolvidas.length == 12) {
  //     this.novoArray = ArrayNotasDevolvidas.substr(1, 10).split(',')
  //     return this.novoArray;
  //   }
  //   else if (ArrayNotasDevolvidas.length == 11) {
  //     this.novoArray = ArrayNotasDevolvidas.substr(1, 9).split(',')
  //     return this.novoArray;
  //   }
  //   else if (ArrayNotasDevolvidas.length == 10) {
  //     this.novoArray = ArrayNotasDevolvidas.substr(1, 8).split(',')
  //     return this.novoArray;
  //   }
  //   else if (ArrayNotasDevolvidas.length == 9) {
  //     this.novoArray = ArrayNotasDevolvidas.substr(1, 7).split(',');
  //     return this.novoArray;
  //   }
  //   this.novoArray = ArrayNotasDevolvidas.substr(1, 11).replace(']', '').split(',')
  //   return this.novoArray;
  // }

//}

