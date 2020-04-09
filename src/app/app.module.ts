import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule, MatCardModule, MatFormFieldModule, MatSnackBarModule} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { SacarComponent } from './page/sacar/sacar.component';
import { SaldoComponent } from './page/saldo/saldo.component';
import { DepositarComponent } from './page/depositar/depositar.component';
import { OperacaoComponent } from './operacao/operacao.component';
import { OperacaoService } from './service/operacao.service';
import { SacarModel } from './model/Sacar.model';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SacarComponent,
    SaldoComponent,
    DepositarComponent,
    OperacaoComponent,
    
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    
  ],
  providers: 
  [
    AuthService,
    OperacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
