// src/operacoes.js

// === Bloco 1: Operações Básicas (1-10) ===
function soma(a, b) { return a + b; }
function subtracao(a, b) { return a - b; }
function multiplicacao(a, b) { return a * b; }
function divisao(a, b) {
  if (b === 0) throw new Error('Divisão por zero não é permitida.');
  return a / b;
}
function potencia(base, expoente) { return Math.pow(base, expoente); }
function raizQuadrada(n) {
  if (n < 0) throw new Error('Não é possível calcular a raiz quadrada de um número negativo.');
  return Math.sqrt(n);
}
function restoDivisao(dividendo, divisor) { return dividendo % divisor; }
function fatorial(n) {
  if (n < 0) throw new Error('Fatorial não é definido para números negativos.');
  if (n === 0 || n === 1) return 1;
  let resultado = 1;
  for (let i = 2; i <= n; i++) { resultado *= i; }
  return resultado;
}
function mediaArray(numeros) {
  if (numeros.length === 0) return 0;
  return somaArray(numeros) / numeros.length;
}
function somaArray(numeros) {
  return numeros.reduce((acc, val) => acc + val, 0);
}

// === Bloco 2: Operações em Arrays e Checagens (11-20) ===
function maximoArray(numeros) {
  if (numeros.length === 0) throw new Error('Array vazio не possui valor máximo.');
  return Math.max(...numeros);
}
function minimoArray(numeros) {
  if (numeros.length === 0) throw new Error('Array vazio не possui valor mínimo.');
  return Math.min(...numeros);
}
function valorAbsoluto(n) { return Math.abs(n); }
function arredondar(n) { return Math.round(n); }
function isPar(n) { return n % 2 === 0; }
function isImpar(n) { return n % 2 !== 0; }
function calcularPorcentagem(percentual, valor) { return (valor * percentual) / 100; }
function aumentarPorcentagem(valor, percentual) { return valor * (1 + percentual / 100); }
function diminuirPorcentagem(valor, percentual) { return valor * (1 - percentual / 100); }
function inverterSinal(n) { return -n; }

// === Bloco 3: Funções Trigonométricas e Logarítmicas (21-30) ===
function seno(anguloRad) { return Math.sin(anguloRad); }
function cosseno(anguloRad) { return Math.cos(anguloRad); }
function tangente(anguloRad) { return Math.tan(anguloRad); }
function logaritmoNatural(n) { return Math.log(n); }
function logaritmoBase10(n) { return Math.log10(n); }
function arredondarParaBaixo(n) { return Math.floor(n); }
function arredondarParaCima(n) { return Math.ceil(n); }
function hipotenusa(catetoA, catetoB) {
  return Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
}
function grausParaRadianos(graus) { return graus * (Math.PI / 180); }
function radianosParaGraus(radianos) { return radianos * (180 / Math.PI); }

// === Bloco 4: Teoria dos Números e Sequências (31-40) ===
function mdc(a, b) { // Máximo Divisor Comum
  while(b) { [a, b] = [b, a % b]; }
  return a;
}
function mmc(a, b) { // Mínimo Múltiplo Comum
  return (a * b) / mdc(a, b);
}
function isPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function fibonacci(n) { // Retorna o n-ésimo termo
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
function produtoArray(numeros) {
  if (numeros.length === 0) return 1;
  return numeros.reduce((acc, val) => acc * val);
}
function clamp(valor, min, max) {
  if (valor < min) return min;
  if (valor > max) return max;
  return valor;
}
function isDivisivel(dividendo, divisor) { return dividendo % divisor === 0; }
function celsiusParaFahrenheit(celsius) { return (celsius * 9/5) + 32; }
function fahrenheitParaCelsius(fahrenheit) { return (fahrenheit - 32) * 5/9; }
function inverso(n) {
  if (n === 0) throw new Error('Não é possível inverter o número zero.');
  return 1 / n;
}

// === Bloco 5: Geometria e Lógica de Comparação (41-50) ===
function areaCirculo(raio) { return Math.PI * Math.pow(raio, 2); }
function areaRetangulo(base, altura) { return base * altura; }
function perimetroRetangulo(base, altura) { return 2 * (base + altura); }
function isMaiorQue(a, b) { return a > b; }
function isMenorQue(a, b) { return a < b; }
function isEqual(a, b) { return a === b; }
function medianaArray(numeros) {
  if (numeros.length === 0) throw new Error('Array vazio не possui mediana.');
  const sorted = [...numeros].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}
function dobro(n) { return n * 2; }
function triplo(n) { return n * 3; }
function metade(n) { return n / 2; }


// Exportando todas as 50 funções
module.exports = {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
};