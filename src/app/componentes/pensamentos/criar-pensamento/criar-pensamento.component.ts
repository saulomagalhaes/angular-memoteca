import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService, private router: Router) { }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(()=>{this.router.navigate(['/listarPensamento'])});
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
