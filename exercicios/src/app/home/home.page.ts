import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  valor_compra = '';
  res_ex1 = '';
  tipoDesconto = '';
  alertButtons = ['OK'];

  Desconto(){
    const valor = parseFloat(this.valor_compra);
    if(isNaN(valor)){
      this.res_ex1 = 'Por favor, digite algum valor.'
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
  }
}
