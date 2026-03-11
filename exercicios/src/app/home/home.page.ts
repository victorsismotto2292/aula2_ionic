import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  alertButtons = ['OK'];

  // EXERCÍCIO 1

  valor_compra = '';
  res_ex1 = '';
  tipoDesconto = '';

  Desconto(){
    const valor = parseFloat(this.valor_compra);
    if(isNaN(valor)){
      this.res_ex1 = 'Por favor, digite algum valor.';
      return;
    }
    else if(valor <=0){
      this.res_ex1 = 'Por favor, digite um valor válido positivo.'
    }
    else if(this.tipoDesconto == 'vista'){
      const desconto_vista = valor - (valor*0.05);
      this.res_ex1 = `${desconto_vista}`;
    }
    else if(this.tipoDesconto == 'prazo'){
      this.res_ex1 = `${valor}`;
    }
    else if(this.tipoDesconto == 'PIX'){
      const desconto_PIX = valor - (valor*0.15);
      this.res_ex1 = `${desconto_PIX}`;
    }
    else /* Caso dê erro */{
      this.res_ex1 = 'Erro, valor de campo não existe.'
    }
  }

  // EXERCÍCIO 2

  altura = '';
  faixaPeso = '';
  res_ex2 = '';
  peso_aproximado = 0;

  IMC(){
    const valor_altura = parseFloat(this.altura);
    if(isNaN(valor_altura)){
      this.res_ex2 = 'Por favor, digite algum valor.';
      return;
    }
    else if(this.faixaPeso == '-50kg'){
      this.peso_aproximado = 45;
    }
    else if(this.faixaPeso == '50-70kg'){
      this.peso_aproximado = 60;
    }
    else if(this.faixaPeso == '70-90kg'){
      this.peso_aproximado = 80;
    }
    else if(this.faixaPeso == '90kg+'){
      this.peso_aproximado = 100;
    }
    else /* Caso dê erro */ {
      this.res_ex2 = 'Erro, valor de campo não existe.';
      return;
    }

    const IMC = this.peso_aproximado / (valor_altura*valor_altura);
    if(IMC < 18.5){
      this.res_ex2 = `IMC: ${IMC.toFixed(2)} - Abaixo do peso`
    }
    else if(IMC >= 18.5 && IMC <= 24.9){
      this.res_ex2 = `IMC: ${IMC.toFixed(2)} - Peso saudável`
    }
    else if(IMC >= 25 && IMC <= 29.9){
      this.res_ex2 = `IMC ${IMC.toFixed(2)} - Sobrepeso`
    }
    else{
      this.res_ex2 = `IMC: ${IMC.toFixed(2)}- Obesidade`
    }
  }

  // EXERCÍCIO 3

  v_inicial = '';
  taxa = '';
  periodoEscolhido = '';
  res_ex3 = '';

  Montante(){
    const P = parseFloat(this.v_inicial);
    const i = parseFloat(this.taxa) / 100; // Transformar em porcentagem

    if(isNaN(P) || isNaN(i)){
      this.res_ex3 = 'Por favor, digite os valores necessários em todos os campos.';
      return;
    }

    if(this.periodoEscolhido == '6-meses'){
      let n = 6;
      const M = P*(1+i)**n;
      this.res_ex3 = `${M.toFixed(2)} R$`;
    }
    else if(this.periodoEscolhido == '12-meses'){
      let n = 12;
      const M = P*(1+i)**n;
      this.res_ex3 = `${M.toFixed(2)} R$`;
    }
    else if(this.periodoEscolhido == '24-meses'){
      let n = 24;
      const M = P*(1+i)**n;
      this.res_ex3 = `${M.toFixed(2)} R$`;
    }
    else{
      this.res_ex3 = 'Erro, valor de campo não existe.';
      return;
    }
  }
}
