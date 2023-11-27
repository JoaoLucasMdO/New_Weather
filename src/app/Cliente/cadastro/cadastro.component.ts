import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

'cliente' : Cliente;

title = '';

constructor(private route : ActivatedRoute, private router: Router, private clienteservice : ClienteService){
}

ngOnInit(){
  this.title = 'Cadastro';
  this.cliente = new Cliente();
  const id = this.route.snapshot.paramMap.get('id');

  if(id){
    this.clienteservice.getById(parseInt(id)).subscribe(resp =>{
      this.cliente = resp;
      this.title = `Alterando o usuário ${this.cliente.nome}`
    })
  }
}

onSubmit(){

    let observable : Observable<Cliente>;
    if(this.cliente.id){
      observable = this.clienteservice.update(this.cliente);
    }else{
      observable = this.clienteservice.insert(this.cliente);
    }
    observable.subscribe(()=>{
      this.router.navigate(['/listaCliente'])
    })
  }
}
