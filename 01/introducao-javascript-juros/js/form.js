
var adicionarJuros = document.querySelector("#adicionar-juros");
adicionarJuros.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var dinheiro = form.dinheiro.value;
  var taxa = form.taxa.value;
  var tempo = form.tempo.value;

  var jurosTr = document.createElement("tr");

  var dinheiroTd = document.createElement("td");
  var taxaTd = document.createElement("td");
  var tempoTd = document.createElement("td");
  var resultadoTd = document.createElement("td");

  dinheiroTd.textContent = dinheiro;
  taxaTd.textContent = taxa;
  tempoTd.textContent = tempo;
  resultadoTd.textContent = calcularResultado(dinheiro, taxa, tempo);

  jurosTr.appendChild(dinheiroTd);
  jurosTr.appendChild(taxaTd);
  jurosTr.appendChild(tempoTd);
  jurosTr.appendChild(resultadoTd);

  var tabela = document.querySelector("#tabela-juros");
  tabela.appendChild(jurosTr);
  
  var limparForm = document.querySelector("#limpar-form");
  limparForm.addEventListener("mouseover", function () {
    form.reset();
  });

});
