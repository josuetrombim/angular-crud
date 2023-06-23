import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../usuario.model';

@Component({
  selector: 'app-usuario-cadastrar-editar',
  templateUrl: './usuario-cadastrar-editar.component.html',
  styleUrls: ['./usuario-cadastrar-editar.component.scss']
})
export class UsuarioCadastrarEditarComponent {

  formGroup! : FormGroup;
  usuario!: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
      this.usuario = this.activatedRoute.snapshot.data["rota"];
      this.formGroup = this.formBuilder.group({
                        id:       [(this.usuario && this.usuario.id)? this.usuario.id: null],
                        nome:     [(this.usuario && this.usuario.nome) ? this.usuario.nome: "", Validators.required],
                        sobrenome:[(this.usuario && this.usuario.sobrenome)? this.usuario.sobrenome: "", Validators.required],
                        email:    [(this.usuario && this.usuario.email)? this.usuario.email: "", Validators.required],
                        profissao:[(this.usuario && this.usuario.profissao)? this.usuario.profissao: "", Validators.required],
                        idade:    [(this.usuario && this.usuario.idade)? this.usuario.idade: null],
      })
  }

  salvar(){
    if(this.usuario && this.usuario.id){
      this.usuarioService.atualizar(this.formGroup.value).subscribe(
        usuarioAtualizado => {
          this.router.navigateByUrl("/usuario")
        },
        error => {
          alert("Erro ao Cadastrar" + JSON.stringify(error));
        }
      )
    }else{
      this.usuarioService.cadastrar(this.formGroup.value).subscribe(
        usuarioCadastro => {
          this.router.navigateByUrl("/usuario")
        },
        error => {
          alert("Erro ao Cadastrar" + JSON.stringify(error));
        }
      );
    }
  }

  deletar(){
    if(confirm("Deseja deletar o usuario "+this.usuario.nome)){
      this.usuarioService.deletar(this.usuario).subscribe(
        response => {
          this.router.navigateByUrl("/usuario");
        },
        error => {
          alert("Erro ao deletar "+ JSON.stringify(error));
        }
      )
    }
  } 

}
