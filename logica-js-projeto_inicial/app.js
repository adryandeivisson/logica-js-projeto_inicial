alert('Boas vindas ao jogo do número secreto'); //alert é para criar avisos na tela
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //let armazena uma variável
console.log(numeroSecreto); //console.log se trata de uma confirmação dentro do console do site que a condição foi aceita do se
let chute;
let tentativas = 1;

//enquanto (while) chute não for igual (!=) ao n.s.
while (chute != numeroSecreto) { //loop de tentativas até acertar o n.s.
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`); //prompt permite abrir uma caixa de imput para o usuário colocar dados
    //Se chute for igual ao número secreto
    if (chute == numeroSecreto) { //if se trata de uma função condicional se// //Os == caracteriza operador de comparação do se
        break;
    } else { 
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    //tentativas = tentativas + 1;
    tentativas++;//++ adiciona +1 a variável a cada loop
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
