
var todosOsJuros = document.querySelectorAll(".juros");

for (let i = 0; i < todosOsJuros.length; i++) {
  var dados = todosOsJuros[i];
  
  var tdMoney = dados.querySelector(".info-dinheiro");
  var money = tdMoney.textContent;
  var tdRate = dados.querySelector(".info-taxa");
  var rate = tdRate.textContent;
  var tdTime = dados.querySelector(".info-tempo");
  var time = tdTime.textContent;
  var result = dados.querySelector(".info-resultado");
  
  if(ehValido(money) && ehValido(rate) && ehValido(time)){
    if(time > 0 || time <= 12){
      var resultadoCalculado = calcularResultado(money, rate, time);
    }
  }
  
  result.textContent = resultadoCalculado;
}

function calcularResultado(dinheiro, juros, quantidadeMeses) {
  var resultadoDentroDaFuncao = 0;
  resultadoDentroDaFuncao = dinheiro * juros/100 * quantidadeMeses;
  return resultadoDentroDaFuncao.toFixed(3);
}

function ehValido(valor) {
  var resposta = "";
  resposta = !inNaN(valor);
  return resposta;
}