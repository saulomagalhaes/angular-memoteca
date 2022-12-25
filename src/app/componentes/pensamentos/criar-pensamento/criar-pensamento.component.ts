import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    id: 0,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

  criarPensamento() {
    alert('Pensamento criado com sucesso!');
  }

  cancelar() {
    alert('Operação cancelada!');
  }
}
