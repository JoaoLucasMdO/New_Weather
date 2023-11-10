import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './Site/noticias/noticias.component';
import { InicioComponent } from './Site/inicio/inicio.component';

const routes: Routes = [
  {path: 'noticias', component:NoticiasComponent},
  {path: 'inicio', component:InicioComponent},
  {path:'',
  redirectTo: '/inicio',
  pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
