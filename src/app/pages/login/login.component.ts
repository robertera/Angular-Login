import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if(this.authService.login(this.usuario, this.senha)) {
      this.router.navigate(['/ferramentas']);
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }

}
