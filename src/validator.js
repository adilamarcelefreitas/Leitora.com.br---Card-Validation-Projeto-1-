const validator = {
  // Função para validar o cartão usando o algoritmo Luhn

  isValid: function (numeroCartaoCredito) {
    //remove caracteres não numéricos etc

    const novoNumero = numeroCartaoCredito.replace(/\D/g, "");

    // Verifica se está vazio ou não é um número

    if (novoNumero === "" || isNaN(novoNumero)) {
      return false;
    }

    let soma = 0;
    let dobrarNumero = false;

    //Usar parseInt para pegar o número da const novoNúmero e reconhever entre 0-9
    //Usar charArt para pegar dígito dentro da variável let n

    for (let n = novoNumero.length - 1; n >= 0; n--) {
      let digito = parseInt(novoNumero.charAt(n), 10);

      if (dobrarNumero) {
        digito *= 2;

        // Se dobrar o resultado em um número de dois dígitos, somar os dígitos do resultado

        if (digito > 9) {
          digito -= 9;
        }
      }
      // adicionar o valor da variável dígito na variavel soma

      soma += digito;

      //inverter o valor da variável. Se o valor for verdadeira ele retorna falso, se for falso retorna verdadeiro

      dobrarNumero = !dobrarNumero;
    }

    // O cartão será válido se a soma for divísivel por 10. Se for e o final for igual a 0 dá certo
    return soma % 10 === 0;
  },

  // função de mascarar números
  maskify: function (numeroCartaoCredito) {
    //armazena e só reconhece número
    const numerosCartao = String(numeroCartaoCredito).replace(/\D/g, "");

    //faz a repartição dos últimos quatro dígitos
    const ultimoQuatroDigitos = numerosCartao.slice(-4);

    //números mascarados em # mas últimos quatro dígitos
    const numeroMascarado = "#### #### #### " + ultimoQuatroDigitos;

    return numeroMascarado;
  },
};

export default validator;
