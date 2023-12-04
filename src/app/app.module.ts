import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Cliente/login/login.component';
import { CadastroComponent } from './Cliente/cadastro/cadastro.component';
import { InicioComponent } from './Site/inicio/inicio.component';
import { NoticiasComponent } from './Site/noticias/noticias.component';
import { PlanosComponent } from './Site/planos/planos.component';
import { ContatosComponent } from './Site/contatos/contatos.component';
import { RedesEstacoesComponent } from './Site/redes-estacoes/redes-estacoes.component';
import { AdmHomeComponent } from './Cliente/adm-home/adm-home.component';
import { ListaClienteComponent } from './Cliente/lista-cliente/lista-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackComponent } from './Cliente/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    InicioComponent,
    NoticiasComponent,
    PlanosComponent,
    ContatosComponent,
    RedesEstacoesComponent,
    AdmHomeComponent,
    ListaClienteComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
