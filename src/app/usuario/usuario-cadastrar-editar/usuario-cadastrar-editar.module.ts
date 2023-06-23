import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioCadastrarEditarRoutingModule } from './usuario-cadastrar-editar-routing.module';
import { UsuarioCadastrarEditarComponent } from './usuario-cadastrar-editar/usuario-cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';    
import { MatInputModule } from '@angular/material/input';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UsuarioCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    UsuarioCadastrarEditarRoutingModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class UsuarioCadastrarEditarModule { }
