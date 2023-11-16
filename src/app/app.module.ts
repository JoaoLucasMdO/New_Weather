import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ListaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
