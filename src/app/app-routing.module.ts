import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './Site/noticias/noticias.component';
import { InicioComponent } from './Site/inicio/inicio.component';
import { ContatosComponent } from './Site/contatos/contatos.component';
import { PlanosComponent } from './Site/planos/planos.component';
import { RedesEstacoesComponent } from './Site/redes-estacoes/redes-estacoes.component';
import { CadastroComponent } from './Cliente/cadastro/cadastro.component';
import { LoginComponent } from './Cliente/login/login.component';
import { AdmHomeComponent } from './Cliente/adm-home/adm-home.component';
import { ListaClienteComponent } from './Cliente/lista-cliente/lista-cliente.component';
import { FeedbackComponent } from './Cliente/feedback/feedback.component';

const routes: Routes = [
  {path: 'cadastro/novo', component:CadastroComponent},
  {path: 'cadastro/editar/:id', component:CadastroComponent},
  {path: 'login', component:LoginComponent},
  {path: 'admHome', component:AdmHomeComponent},
  {path: 'listaCliente', component:ListaClienteComponent},
  {path: 'contatos', component:ContatosComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'noticias', component:NoticiasComponent},
  {path: 'planos', component:PlanosComponent},
  {path: 'redes-estacoes', component:RedesEstacoesComponent},
  {path: 'feedback', component:FeedbackComponent},
  {path:'',
  redirectTo: '/inicio',
  pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
