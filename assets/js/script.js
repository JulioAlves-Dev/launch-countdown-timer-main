const QS = (e) => document.querySelector(e),
  dataD = QS("main .times span[data-dias]"),
  dataH = QS("main .times span[data-horas]"),
  dataM = QS("main .times span[data-minutos]"),
  dataS = QS("main .times span[data-segundos]"),
  lancamento = new Date("December 29 2024"),
  d = (time) => time / (24 * 60 * 60 * 1000),
  h = (time) => time / (60 * 60 * 1000),
  m = (time) => time / (60 * 1000),
  s = (time) => time / 1000;

let atual = new Date();

function atualizarData() {
  atual = new Date();
  dataD.innerText = Math.floor(d(lancamento) - d(atual));
  dataH.innerText = Math.floor((h(lancamento) - h(atual)) % 24);
  dataM.innerText = Math.floor((m(lancamento) - m(atual)) % 60);
  dataS.innerText = Math.floor((s(lancamento) - s(atual)) % 60);
}
atualizarData();

let x = setInterval(() => atualizarData(), 1000);
