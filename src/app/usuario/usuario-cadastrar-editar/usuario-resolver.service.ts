import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UsuarioResolverService implements Resolve<Usuario> {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    const id = route.params["id"];
    
    if(id){
      return this.usuarioService.pesquisarPorId(id);
    }
    return this.usuarioService.cadastrar(id);

  }
}
