function calculadora(){
    var operacao = Number( prompt('Escolha a operação:\n 1 - soma (+)\n 2 - subtração(-)\n 3 - divisão real(/)\n 4 - multiplicação(*)\n 5 - divisão Inteira(%)\n 6 - potenciação(**)'));
    

 let n1 = Number(prompt('Insira o primeiro valor:'));
 let n2 = Number(prompt('Insira o segundo valor:'));
 let resultado;

 
 if (operacao == 1){
    soma();
 }else if (operacao == 2) {
     subtracao();
 }else if (operacao == 3){
     divisaoReal();
 }else if (operacao == 4){
     multiplicacao();
 }else if(operacao == 5){
     divisaoInteira();
 }else if(operacao == 6){
     potenciacao();
 }

 function novaOperacao(){
     let opcao = Number(prompt('Deseja fazer outra operação:\n 1 - sim \n 2 - não\n'));

     if(opcao == 1){
         calculadora();
     }else if(opcao == 2){
         alert('até mais.')
     }else{
         alert('Digite uma opção válida!')
         novaOperacao();
     }
 }


 function soma(){
     resultado = n1 + n2;
     alert(`${n1} + ${n2} = ${resultado}`);
     novaOperacao();
 }

 function subtracao(){
     resultado = n1 - n2;
     alert(`${n1} - ${n2} = ${resultado}`);
     novaOperacao();
 }

 function divisaoReal(){
     resultado = n1 / n2;
     alert(`${n1} / ${n2} = ${resultado}`);
     novaOperacao();
 }

 function multiplicacao(){
     resultado = n1 * n2;
     alert(`${n1} * ${n2} = ${resultado}`);
     novaOperacao();
 }
  
 function divisaoInteira(){
     resultado = n1 % n2;
     alert(`${n1} % ${n2} = ${resultado}`);
     novaOperacao();
 }

 function potenciacao(){
     resultado = n1 ** n2;
     alert(`${n1} ** ${n2} = ${resultado}`);
     novaOperacao();
 }

  


}
calculadora();