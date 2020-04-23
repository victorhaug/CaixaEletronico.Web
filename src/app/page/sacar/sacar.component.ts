import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SaldoModel } from '../../model/Saldo.model';
import { MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OperacaoService } from 'src/app/service/operacao.service';
import { AuthService } from 'src/app/login/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SacarModel } from 'src/app/model/Sacar.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class  SacarComponent implements OnInit {

  @Input()
  novoArray: any;
  saldoModel: SaldoModel;
  dialogConfig: MatDialogConfig;
  authservice: AuthService;
  operacao: SacarModel;
  Validar: boolean;
  valorFormatado: string;
  
  

  constructor(
    private formBuilder: FormBuilder,
    private operacaoService: OperacaoService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<SacarComponent>,
    private _snackBar: MatSnackBar,
    private router: Router,

    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
   
    
    this.operacao = new SacarModel();
    this.valorFormatado = "0"
    this.ListarUsuario();
    
    

  }
  ListarUsuario() {
    debugger;
    this.operacao = this.data.data;
    this.FormatarValor(this.operacao.SaldoAtual)
    if (this.data.data.Codigo == 500){
      this.Validar = true
      
    }
    else{

      this.data.data = this.MontarArrayNotas(this.data.data.NotasUtilizadas);
    }

    }

  close() {
    this.router.navigate(["/login"]);
    this.dialogRef.close();
  }
  
  FormatarValor(data: any) {
    this.valorFormatado = parseFloat(data).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    return this.valorFormatado;
  }
  
  MontarArrayNotas(ArrayNotasDevolvidas: string) {
    if (ArrayNotasDevolvidas.length == 7) {
      this.novoArray = ArrayNotasDevolvidas.split(',')
      return this.novoArray;
    }
  }

}

