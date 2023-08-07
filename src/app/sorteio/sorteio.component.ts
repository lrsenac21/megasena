import { Component } from '@angular/core';

@Component({
  selector: 'tut-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})
export class SorteioComponent {
  numerosAleatorios: number[] = [];

  vencedoresMegaSenac() {
    this.numerosAleatorios = [];

    const quantidadeNumeros = 6;
    
    for (let i = 0; i < quantidadeNumeros; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      this.numerosAleatorios.push(numeroAleatorio);
    }
  }
}
