import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class SacarComponent implements OnInit {

  @Input()
  operacao: FormGroup;

  constructor(
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.operacao = this.formBuilder.group({
      inputSacar: new FormControl(""),
      inputSaldo: new FormControl(""),
      inputDepositar: new FormControl("")
    })

    
  }
      Sacar(){

        let cpf:number = Number(this.operacao.get("inputSaldo").value);

   


  }
}


