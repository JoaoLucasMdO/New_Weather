import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})

export class ListaClienteComponent implements OnInit {
  title = 'Relação de Clientes';
  'clientes' : Cliente[];

  constructor(private clienteservice: ClienteService){}

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.clienteservice.getAll().subscribe(resp=>{
      this.clientes= resp
    })
  }

  delete(cliente: Cliente){
    if(window.confirm('Confirmar exclusão do registro')){
    this.clienteservice.delete(cliente.id_usuario).subscribe(()=>{
    this.clientes = this.clientes.filter(c=> c!== cliente)
    })
  }}
}
