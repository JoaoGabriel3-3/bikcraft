//Ativar links do menu
const links = document.querySelectorAll(".header-menu ul a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Parametros de orçamento

const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro) {
  const input = document.getElementById(parametro);
  if (input) {
    input.checked = true;
  }
  console.log(input);
}
parametros.forEach(ativarProdutos);
console.log(parametros);

//Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
  resposta.classList.toggle("ativa");
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas);
