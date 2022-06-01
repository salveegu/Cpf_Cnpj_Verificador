const cpfCnpj = document.getElementById("valorDoCampo").value;
const cpfCnpjFormatado = cpfCnpj.replaceAll(/[a-zA-z!@#$%^&*.-/////-]/g, "");
const tamanhoFormatado = cpfCnpjFormatado.toString().length;


if(cpfCnpjFormatado == "00000000000" || cpfCnpjFormatado == "11111111111" || cpfCnpjFormatado == "22222222222" || cpfCnpjFormatado == "33333333333" || cpfCnpjFormatado == "44444444444" || cpfCnpjFormatado == "55555555555" || cpfCnpjFormatado == "66666666666" || cpfCnpjFormatado == "77777777777" || cpfCnpjFormatado == "88888888888" || cpfCnpjFormatado == "99999999999")
{
	return  alert ("valores invalidos padroes XXX XXX XXX XX");
}

    if(numeroCpfId== 'null' || numeroCpfId == ""){
        
      
      return alert("Campo Vazio!"+numeroCpfId);
 }

    if (tamanhoFormatado == 11){
        
        console.log("CPF");
       
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


    calc1 = num1Int*10; calc2 = num2Int*9;calc3 = num3Int * 8;calc4 = num4Int * 7;
	calc5 = num5Int*6;calc6 = num6Int * 5;calc7 = num7Int * 4;calc8 = num8Int * 3;
	calc9 = num9Int*2;
	
	somandoDigitos01 = calc1 + calc2 + calc3 + calc4 + calc5 + calc6 + calc7 + calc8 + calc9;
	
	divisao01 = (somandoDigitos01*10)/11;
	divisaoResto = (somandoDigitos01*10)%11;
	
	console.log("Somatorio Digitos Cpf:"+somandoDigitos01);
	console.log("Divisao:"+divisao01);
    console.log("Divisão Resto: "+divisaoResto);

    if(divisaoResto == 10 || divisaoResto == 11 || divisaoResto == num10Int)
	{
		console.log("uma das validaçoes foi aceita");
		console.log("Calculando o segundo Digito!");
		
		calc1 = num1Int * 11;calc2 = num2Int * 10;calc3 = num3Int * 9;calc4 = num4Int * 8;calc5 = num5Int * 7;
		calc6 = num6Int * 6;calc7 = num7Int * 5;calc8 = num8Int * 4;calc9 = num9Int * 3;calc10 = num10Int * 2;
		somandoDigitos2 = calc1 + calc2 + calc3 + calc4 + calc5 + calc6 + calc7 + calc8 + calc9 + calc10;
		
		divisao2 = (somandoDigitos2 * 10) / 11;
		divisaoResto2 = (somandoDigitos2 * 10) % 11;
		console.log("Valor da divisao: "+divisao2); 
		console.log("Resto da divisão: " +divisaoResto2) ;
		
		
		if(divisaoResto2 == 10 || divisaoResto2 == 11 || divisaoResto2 == num11Int)
		{
			
			console.log("CPF ACEITO PARABENS!!");
		}else 
		{
			
			console.log("CPF INVALIDO! ");
		}

	}
}
    else{
        alert("Caracteres inválidos!");
        console.log(cpfCnpjFormatado);
    } 

