let xBolinha = 300
let yBolinha = 200
let diametroBolinha = 15
let raio = diametroBolinha / 2


let velocidadeXBolinha = 6
let velocidadeYBolinha = 6


let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente


let pontosBra = 0;
let pontosArg = 0;
const bra = "BRA"
const arg = "ARG"

let colidiu = false


let raquetada;
let ponto;
let trilha;

let chanceDeErrar = 0;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}



function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha()
  verificaColisaoBorda()
  fill(color(230, 255, 0));
  mostraRaquete(xRaquete, yRaquete)
  movimentaMinhaRaquete()
  //verificaColisaoRaquete()
  verificaColisaoRaquete(xRaquete, yRaquete)
  //colisaoMinhaRaqueteBiblioteca()
  fill(color(0, 220, 250));
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente()
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  incluiPlacar()
  marcaPonto()
  bolinhaNaoFicaPresa()
}



function mostraBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha)
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1
  }
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura)
}



function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    yRaquete += 10;
  }

  yRaquete = constrain(yRaquete, 10, 310);
}


function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1
    raquetada.play();
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}


function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 100;
  yRaqueteOponente += velocidadeYOponente

  yRaqueteOponente = constrain(yRaqueteOponente, 10, 310);
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(pontosBra, 170, 26);
  text(bra, 120, 26);
  fill(color(255, 140, 0));
  rect(410, 10, 40, 20);
  fill(255);
  text(pontosArg, 430, 26);
  text(arg, 480, 26);
}

function marcaPonto() {
  if (xBolinha > 590) {
    pontosBra += 1;
    ponto.play();
  }

  if (xBolinha < 10) {
    pontosArg += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosArg >= pontosBra) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
      xBolinha = 23
    }
}

