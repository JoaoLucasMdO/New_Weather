import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL = 'http://localhost:9090/cliente'

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get<Cliente[]>(this.URL)
  }

  public insert(cliente : Cliente){
    return this.http.post<Cliente>(this.URL, cliente)
  }

  getById(id : number){
    const newURL = `${this.URL}/${id}`;
    return this.http.get<Cliente>(newURL);
  }

  public update(cliente : Cliente){
    const newURL = `${this.URL}/${cliente.id}`;
    return this.http.put<Cliente>(newURL, cliente);
  }

  public delete(id : number){
    const newURL = `${this.URL}/${id}`;
    return this.http.delete<Cliente>(newURL);
  }
}
