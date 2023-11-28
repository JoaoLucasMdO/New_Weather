import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private logado: boolean = false;

  constructor(private router: Router) {}

 testarLogin() {
    let login = (<HTMLInputElement>document.getElementById('email'))?.value;
    let senha = (<HTMLInputElement>document.getElementById('senha'))?.value;

    if ((login === "gesley.rosa@fatec.sp.gov.br" && senha === '12345') || (login === "joao.lucas@fatec.sp.gov.br" && senha === '12345')) {
      this.router.navigate(['/admHome']);
    } else () => {
      // Tratamento para credenciais incorretas, se necessário
      console.log("Credenciais incorretas");
    }
  }
}



