import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  redirectUrl: string | null = null;

  constructor(private router: Router, private http: HttpClient) {
    // Verifique se o token JWT está armazenado ao inicializar o serviço
    this.isAuthenticatedSubject.next(this.isTokenValid());
  }

  isUserAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  login(usuario: string, senha: string): boolean {
    if (usuario === 'admin' && senha === 'admin') {
      const token = 'seu-token-jwt-aqui';
      localStorage.setItem(this.JWT_TOKEN, token);
      this.isAuthenticatedSubject.next(true);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  private isTokenValid(): boolean {
    const token = localStorage.getItem(this.JWT_TOKEN);
    if (!token) return false;

    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) return false;

    const payload = JSON.parse(atob(tokenParts[1]));
    const currentTimestamp = Math.floor(Date.now() / 1000);
    return payload.exp > currentTimestamp;
  }
}
