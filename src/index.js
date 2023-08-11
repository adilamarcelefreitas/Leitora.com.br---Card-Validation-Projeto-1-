import validator from './validator.js';

//Inserir o número do cartão
document.querySelector('.numero-cartao-input').oninput = () => {

  const inputNumeroCartao = document.querySelector('.numero-cartao-input');
  const numeroMascarado = validator.maskify(inputNumeroCartao.value);
  document.querySelector('.numero-cartao').innerText = numeroMascarado;
}

//Inserir o nome do usuário
document.querySelector('.nome-cartao-input').oninput = () => {
  document.querySelector('.nome-no-cartao').innerText = document.querySelector('.nome-cartao-input').value;
}

//Selecionar o mês com o seletor e opções dadas
document.querySelector('.mes-input').oninput = () => {
  document.querySelector('.mes').innerText = document.querySelector('.mes-input').value;
}

//Selecionar o ano com o seletor e opções dadas
document.querySelector('.ano-input').oninput = () => {
  document.querySelector('.ano').innerText = document.querySelector('.ano-input').value;
}

//Quando o mouse clicar na opção do cvv terá uma interação de rotação do cartão
document.querySelector('.cvv-input').onmouseenter = () => {
  document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(-180deg)';
  document.querySelector('.atras').style.transform = 'perspective(1000px) rotateY(0deg)';
}

//Quando o mouse sair de cima da opção cvv o cartão faz nova rotação para parte da frente
document.querySelector('.cvv-input').onmouseleave = () => {
  document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(0deg)';
  document.querySelector('.atras').style.transform = 'perspective(1000px) rotateY(180deg)';
}

//Inserir o valor do cvv com referência de no máximo 3 digítos
document.querySelector('.cvv-input').oninput = () => {
  document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

// Função que atualiza se o cartão é válido ou inválido com destque de cores
//uma variável chamada statusValidação para pegar a class no html com do DOM
// fazer validar ou invalidar o cartão com a resposta e com mudança de cor

function updateValidaçaoStatus(Validaçao) {

  const statusValidaçao = document.querySelector('.validaçao-status');

  statusValidaçao.innerText = Validaçao ? 'cartão válido' : 'cartão inválido';
  statusValidaçao.style.color = Validaçao ? 'green' : 'red';
}

// Evento de validação feito com o butão submeter chamado pelo seletor do DOM
document.querySelector('.submeter-btn').addEventListener('click', function (event) {
  event.preventDefault();

  //variável para pega os números do cartão 
  const numeroCartaoCredito = document.querySelector('.numero-cartao-input').value;

  // Checa se o cartão de crédito é válido, usando a função validator
  const validaçao = validator.isValid(numeroCartaoCredito);

  // Update do status da validação do cartão
  updateValidaçaoStatus(validaçao);

});

console.log(validator);