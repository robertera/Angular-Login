import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DADOS_FERRAMENTAS } from 'src/assets/dados-ferramentas';

@Component({
  selector: 'app-adicionar-ferramenta',
  templateUrl: './adicionar-ferramenta.component.html',
  styleUrls: ['./adicionar-ferramenta.component.css']
})
export class AdicionarFerramentaComponent {
  novaFerramenta = {
    nome: '',
    descricao: ''
  };

  constructor(private router: Router) {}

  adicionarFerramenta() {
    const novaFerramenta = {
      id: this.gerarNovoId(), // Gere um novo ID
      nome: this.novaFerramenta.nome,
      descricao: this.novaFerramenta.descricao
    };

    DADOS_FERRAMENTAS.push(novaFerramenta);

    this.router.navigate(['/ferramentas']);
  }

  private gerarNovoId(): number {
    const ids = DADOS_FERRAMENTAS.map(ferramenta => ferramenta.id);
    return Math.max(...ids) + 1;
  }

  voltarParaLista() {
    this.router.navigate(['/ferramentas']);
  }
}
