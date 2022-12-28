import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [null],
      autoria: [null],
      modelo: [null]
    });
  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(()=>{this.router.navigate(['/listarPensamento'])});
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
