import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "./usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = 'http://localhost:3000';
  private endpoint = 'usuario';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}/${this.endpoint}`);
  }
  
  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${this.baseURL}/${this.endpoint}`,usuario);
  }

  pesquisarPorId(id: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseURL}/${this.endpoint}/${id}`);
  }

  atualizar(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(`${this.baseURL}/${this.endpoint}/${usuario.id}`, usuario);
  }

  deletar(usuario: Usuario): Observable<{}>{
    return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${usuario.id}`);
  }
 
}
