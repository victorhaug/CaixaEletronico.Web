import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule, MatCardModule, MatFormFieldModule, MatSnackBarModule, MatNativeDateModule} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { SacarComponent } from './page/sacar/sacar.component';
import { SaldoComponent } from './page/saldo/saldo.component';
import { DepositarComponent } from './page/depositar/depositar.component';
import { OperacaoComponent } from './operacao/operacao.component';
import { OperacaoService } from './service/operacao.service';
import { SacarModel } from './model/Sacar.model';
import { SacarActionComponent } from './page/action/sacar-action/sacar-action.component';
import { DepositarActionComponent } from './page/action/depositar-action/depositar-action.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

export let options: Partial<IConfig> | (() => Partial<IConfig>);
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SacarComponent,
    SaldoComponent,
    DepositarComponent,
    OperacaoComponent,
    SacarActionComponent,
    DepositarActionComponent,
    
    

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
    MatNativeDateModule,
    NgxMaskModule.forRoot(options),
    CurrencyMaskModule
     
    
    
    
  ],
  providers: 
  [
    AuthService,
    OperacaoService,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent],
  entryComponents: [OperacaoComponent],
  
  
})
export class AppModule { }
