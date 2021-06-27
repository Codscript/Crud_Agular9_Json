import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Usuario = {
    login: '',
    senha: ''
  }

  constructor(private loginService: LoginService,  private router: Router) { }

  ngOnInit(): void {
  }

  logar() {
    this.loginService.readLogin(this.login.login, this.login.senha).subscribe(()=>{
      this.loginService.showOnMensage('Logado com sucesso!!!')
      this.router.navigate(['/'])
    })

  }

}
