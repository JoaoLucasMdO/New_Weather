import { Component } from '@angular/core';
import { ClienteService } from '../shared/cliente.service';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  private logado : boolean = false;
  private 'clienteService' : ClienteService;
  
  

}
