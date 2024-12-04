alert ('Boas Vindas ao nosso site');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos';

alert (mensagemDeErro);

let entradaNome = prompt ('Qual o seu nome?');
let entradaIdade = prompt ('Qual sua idade?');

if (entradaIdade >= idade) {
    alert ('Pode tirar a habilitação!');
}