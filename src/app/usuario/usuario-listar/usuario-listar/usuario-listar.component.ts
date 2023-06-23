import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../usuario.model';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.scss']
})
export class UsuarioListarComponent  implements OnInit {
    
  usuarios$!: Observable<Usuario[]>;

  colunasTabela = ['nome','sobrenome','email']

  constructor(private usuarioService: UsuarioService){}

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuarios$ = this.usuarioService.listar();
  }
}