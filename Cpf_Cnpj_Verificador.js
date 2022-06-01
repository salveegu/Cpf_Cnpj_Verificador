function verificaCpfCnpj() {
 
 const cpfCnpj = document.getElementById("valorDoCampo").value;
 const cpfCnpjFormatado = cpfCnpj.replaceAll(/[a-zA-z!@#$%^&*.-/////-]/g, "");
 const tamanhoFormatado = cpfCnpjFormatado.toString().length;

console.log(tamanhoFormatado);
 //_______________________Validação CPF______________________________//

 
 if(cpfCnpjFormatado == "00000000000" || cpfCnpjFormatado == "11111111111" || cpfCnpjFormatado == "22222222222" || cpfCnpjFormatado == "33333333333" || cpfCnpjFormatado == "44444444444" || cpfCnpjFormatado == "55555555555" || cpfCnpjFormatado == "66666666666" || cpfCnpjFormatado == "77777777777" || cpfCnpjFormatado == "88888888888" || cpfCnpjFormatado == "99999999999")
 {
     return  alert ("valores invalidos padroes XXX XXX XXX XX");
 }
 
     if(tamanhoFormatado== 'null' || tamanhoFormatado == ""){
         
       
       return alert("Campo Vazio!");
  }
 
     if (tamanhoFormatado == 11){
         
         console.log("CPF");

         //______Mascara do CPF______//
         var arrayCpfCnpjFormatado = Array.from(cpfCnpjFormatado);
         console.log("CPF/CNPJ em array: "+arrayCpfCnpjFormatado);

         arrayCpfCnpjFormatado.splice(3,0,".");
         arrayCpfCnpjFormatado.splice(7,0,".");
         arrayCpfCnpjFormatado.splice(11,0,"-");
         
         var arrString = arrayCpfCnpjFormatado.toString();
         mascaraCpf = arrString.replace(/[,]/g,"");
         console.log(mascaraCpf);

        
         num1 = cpfCnpjFormatado.substr(0,1);
         num2 = cpfCnpjFormatado.substr(1,1);
         num3 = cpfCnpjFormatado.substr(2,1);
         num4 = cpfCnpjFormatado.substr(3,1);
         num5 = cpfCnpjFormatado.substr(4,1);
         num6 = cpfCnpjFormatado.substr(5,1);
         num7 = cpfCnpjFormatado.substr(6,1);
         num8 = cpfCnpjFormatado.substr(7,1);
         num9 = cpfCnpjFormatado.substr(8,1);
         num10 = cpfCnpjFormatado.substr(9,1);
         num11 = cpfCnpjFormatado.substr(10,1);
 
        
         num1Int = parseInt(num1);
         num2Int = parseInt(num2);
         num3Int = parseInt(num3);
         num4Int = parseInt(num4);
         num5Int = parseInt(num5);
         num6Int = parseInt(num6);
         num7Int = parseInt(num7);
         num8Int = parseInt(num8);
         num9Int = parseInt(num9);
         num10Int = parseInt(num10);
         num11Int = parseInt(num11);
 
         //_____________________Caluclos do 1º Digito do CPF______________________________
 
     calc1 = num1Int*10; calc2 = num2Int*9;calc3 = num3Int * 8;calc4 = num4Int * 7;
     calc5 = num5Int*6;calc6 = num6Int * 5;calc7 = num7Int * 4;calc8 = num8Int * 3;
     calc9 = num9Int*2;
     
     somandoDigitos01 = calc1 + calc2 + calc3 + calc4 + calc5 + calc6 + calc7 + calc8 + calc9;
     
     divisao01 = (somandoDigitos01*10)/11;
     divisaoResto = (somandoDigitos01*10)%11;
     
     console.log("Somatorio Digitos Cpf:"+somandoDigitos01);
     console.log("Divisao 1:"+divisao01);
     console.log("Divisão Resto 1: "+divisaoResto);

      //_____________________Caluclos do 2º Digito do CPF__________________________________

         calc1 = num1Int * 11;calc2 = num2Int * 10;calc3 = num3Int * 9;calc4 = num4Int * 8;calc5 = num5Int * 7;
         calc6 = num6Int * 6;calc7 = num7Int * 5;calc8 = num8Int * 4;calc9 = num9Int * 3;calc10 = num10Int * 2;
         somandoDigitos2 = calc1 + calc2 + calc3 + calc4 + calc5 + calc6 + calc7 + calc8 + calc9 + calc10;
         
         divisao2 = (somandoDigitos2 * 10) / 11;
         divisaoResto2 = (somandoDigitos2 * 10) % 11;
         
         console.log("Valor da divisao2: " +divisao2); 
         console.log("Resto da divisão2: " +divisaoResto2) ;
 
     if(divisaoResto == 10 || divisaoResto == 11 || divisaoResto == num10Int)
     {
         console.log("uma das validaçoes foi aceita");
         console.log("Calculando o segundo Digito!");
         
         if(divisaoResto2 == 10 || divisaoResto2 == 11 || divisaoResto2 == num11Int)
         {
             console.log(divisaoResto2);
             return alert("CPF aceito! "+mascaraCpf);
        }
         else { 
             return alert("Valor invalido");
         }
 
     }
 }
    


 //_______________________Fim CPF___________________________________//


 //______________________Validação CNPJ_____________________________//


 
 if (tamanhoFormatado == "null" || tamanhoFormatado == "") {
    return alert("Campo vazio!");
   }
 
   if (
     cpfCnpjFormatado == "00000000000000" ||
     cpfCnpjFormatado == "11111111111111" ||
     cpfCnpjFormatado == "22222222222222" ||
     cpfCnpjFormatado == "33333333333333" ||
     cpfCnpjFormatado == "44444444444444" ||
     cpfCnpjFormatado == "55555555555555" ||
     cpfCnpjFormatado == "66666666666666" ||
     cpfCnpjFormatado == "77777777777777" ||
     cpfCnpjFormatado == "88888888888888" ||
     cpfCnpjFormatado == "99999999999999"
   ) {
     alert(
       "Valor inválido!" +
         cpfCnpjFormatado 
         
     );
   }
 
   if (tamanhoFormatado == 14) {
    
    console.log("CNPJ");

    //______Mascara do CPF______//
    var arrayCpfCnpjFormatado = Array.from(cpfCnpjFormatado);
    console.log("CPF/CNPJ em array: "+arrayCpfCnpjFormatado);

    arrayCpfCnpjFormatado.splice(2,0,".");
    arrayCpfCnpjFormatado.splice(6,0,".");
    arrayCpfCnpjFormatado.splice(10,0,"/");
    arrayCpfCnpjFormatado.splice(15,0,"-");

    var arrString = arrayCpfCnpjFormatado.toString();
    mascaraCnpj = arrString.replace(/[,]/g,"");
    console.log(mascaraCnpj);


     num1 = cpfCnpjFormatado.substr(0, 1);
     num2 = cpfCnpjFormatado.substr(1, 1);
     num3 = cpfCnpjFormatado.substr(2, 1);
     num4 = cpfCnpjFormatado.substr(3, 1);
     num5 = cpfCnpjFormatado.substr(4, 1);
     num6 = cpfCnpjFormatado.substr(5, 1);
     num7 = cpfCnpjFormatado.substr(6, 1);
     num8 = cpfCnpjFormatado.substr(7, 1);
     num9 = cpfCnpjFormatado.substr(8, 1);
     num10 = cpfCnpjFormatado.substr(9, 1);
     num11 = cpfCnpjFormatado.substr(10, 1);
     num12 = cpfCnpjFormatado.substr(11, 1);
     num13 = cpfCnpjFormatado.substr(12, 1);
     num14 = cpfCnpjFormatado.substr(13, 1);
 
     //_____________________Primeiro Digito verificador____________________
 
     num1Int = parseInt(num1);
     num2Int = parseInt(num2);
     num3Int = parseInt(num3);
     num4Int = parseInt(num4);
     num5Int = parseInt(num5);
     num6Int = parseInt(num6);
     num7Int = parseInt(num7);
     num8Int = parseInt(num8);
     num9Int = parseInt(num9);
     num10Int = parseInt(num10);
     num11Int = parseInt(num11);
     num12Int = parseInt(num12);
     num13Int = parseInt(num13);
     num14Int = parseInt(num14);
 
     calc1 = num1Int * 5;
     calc2 = num2Int * 4;
     calc3 = num3Int * 3;
     calc4 = num4Int * 2;
     calc5 = num5Int * 9;
     calc6 = num6Int * 8;
     calc7 = num7Int * 7;
     calc8 = num8Int * 6;
     calc9 = num9Int * 5;
     calc10 = num10Int * 4;
     calc11 = num11Int * 3;
     calc12 = num12Int * 2;
 
 const somandoDigitos01 =
       calc1 +
       calc2 +
       calc3 +
       calc4 +
       calc5 +
       calc6 +
       calc7 +
       calc8 +
       calc9 +
       calc10 +
       calc11 +
       calc12;
 
     console.log(somandoDigitos01);
 
     divisao01 = somandoDigitos01 / 11;
     divisaoResto = somandoDigitos01 % 11;
 
     console.log("Divisão: " + divisao01);
     console.log("Resto da divisão:" + divisaoResto);
     const primeiroDigitoVerificador = 11 - divisaoResto;
 
     //_____________________________Segundo digito Verificador______________________________________
 
     calc1 = num1Int * 6;
     calc2 = num2Int * 5;
     calc3 = num3Int * 4;
     calc4 = num4Int * 3;
     calc5 = num5Int * 2;
     calc6 = num6Int * 9;
     calc7 = num7Int * 8;
     calc8 = num8Int * 7;
     calc9 = num9Int * 6;
     calc10 = num10Int * 5;
     calc11 = num11Int * 4;
     calc12 = num12Int * 3;
     calc13 = num13Int * 2;
 
     const somandoDigitos02 =
       calc1 +
       calc2 +
       calc3 +
       calc4 +
       calc5 +
       calc6 +
       calc7 +
       calc8 +
       calc9 +
       calc10 +
       calc11 +
       calc12 +
       calc13;
 
     console.log(somandoDigitos02);
 
     divisao02 = somandoDigitos02 / 11;
     divisaoResto02 = somandoDigitos02 % 11;
 
     console.log("Divisão2: " + divisao02);
     console.log("Resto da divisão2:" + divisaoResto02);
     const segundoDigitoVerificador = 11 - divisaoResto02;
 
     if (divisaoResto == 0 || divisaoResto == 1) {
       console.log("1º Digito verificador Válido =0");
 
       if (divisaoResto02 == 0 || divisaoResto02 == 1) {
         console.log("2º Digito verificador Válido =0");
         return alert("CNPJ Aceito: "+mascaraCnpj);
       } else {
         console.log("CNPJ 2ºDigito verificador invalido!");
       }
     }
 
     if (divisaoResto <= 10 && divisaoResto >= 2 && primeiroDigitoVerificador==num13Int) {
       
       console.log(
         " O Primeiro digito verificador é: " + primeiroDigitoVerificador
       );
 
       if (divisaoResto02 <= 10 && divisaoResto02 >= 2 && segundoDigitoVerificador==num14Int) {
        
         console.log(
           " O segundo digito verificador é: " + segundoDigitoVerificador
         );
         return alert("CNPJ Aceito: "+mascaraCnpj);
       } else {
         console.log("CNPJ 2º digito verificador invalido!");
       }
     } else {
       console.log("CNPJ Inválido" + cpfCnpjFormatado);
     }
   } else {
    return alert("Valor Inválido: " + cpfCnpjFormatado);
   }

   //______________________________FIM Validação CNPJ______________________________________
 }
     
