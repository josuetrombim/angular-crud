import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {
    path:"usuario",
    loadChildren:() => import('./usuario/usuario-listar/usuario-listar.module').then(modulo => modulo.UsuarioListarModule)
  }, 
  {
    path:"usuario/cadastrar",
    loadChildren:() => import('./usuario/usuario-cadastrar-editar/usuario-cadastrar-editar.module').then(modulo => modulo.UsuarioCadastrarEditarModule)
  },
  {
    path:"usuario/editar/:id",
    loadChildren:() => import('./usuario/usuario-cadastrar-editar/usuario-cadastrar-editar.module').then(modulo => modulo.UsuarioCadastrarEditarModule)
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
