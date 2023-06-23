import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioListarRoutingModule } from './usuario-listar-routing.module';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';

import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    UsuarioListarComponent
  ],
  imports: [
    CommonModule,
    UsuarioListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class UsuarioListarModule { }
