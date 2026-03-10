import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  linguagem='';
  linguagemEscolhida='';
  alertButtons = ['OK'];
  
  verificar(){
    if(this.linguagem == 'c'){
      this.linguagemEscolhida = 'C#';
    }
    else if(this.linguagem == 'python'){
      this.linguagemEscolhida = 'Python';
    }
    else if(this.linguagem == 'java'){
      this.linguagemEscolhida = 'Java';
    }
    else{
      this.linguagemEscolhida='Cobol';
    }
  }

}
