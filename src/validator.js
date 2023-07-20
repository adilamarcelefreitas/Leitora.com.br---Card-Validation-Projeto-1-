const validator = {
    // Função para validar o cartão usando o algoritmo Luhn
    isValidCreditCard: function (númeroCartão) {
      
      // variável remove caracteres não numéricos etc
      const novoNúmero = númeroCartão.replace(/\D/g, '');
  
      // Verifica se está vazio ou não é um número
      if (novoNúmero === '' || isNaN(novoNúmero)) {
        return false;
      }
  
      //Duas váriavéis para fazer as condicionais
      let soma = 0;
      let dobrarNúmero = false;
  
      // Interar os dígitos na ordem inversa 
      //usar parseInt para pegar o número da const novoNúmero e reconhever entre 0-9
      //usar charArt para pegar dígito dentro da variável let n
      for (let n = novoNúmero.length - 1; n >= 0; n--) {
        let dígito = parseInt(novoNúmero.charAt(n), 10);
  
        if (dobrarNúmero) {
          dígito *= 2;
  
          // Se dobrar o resultado em um número de dois dígitos, somar os dígitos do resultado
          if (dígito > 9) {
            dígito -= 9;
          }
        }
        // adicionar o valor da variável dígito na variavel soma
        soma += dígito;
        //inverter o valor da variável. Se o valor for verdadeira ele retorna falso, se for falso retorna verdadeiro
        dobrarNúmero = !dobrarNúmero;
      }
  
      // O cartão será válido se a soma for divísivel por 10. Se for e o final for igual a 0 dá certo
      return soma % 10 === 0;
    },
  };
  
  export default validator;
  
