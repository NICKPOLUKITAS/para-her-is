alert('Olá, caro curioso');
let quantosEsportesTem = 37;
let chute = prompt('Quantos esportes voce acha que tem nas paralimpiadas??');
let tentativas = 1;

while (chute != quantosEsportesTem) {
    chute = prompt('Quantos esportes voce acha que tem nas paralimpiadas?'); //nao entrar,ate acertar


if (chute == quantosEsportesTem) {
    alert(`Oba, voce acertou usando ${tentativas} tentativas`);
} else {
    if (chute > quantosEsportesTem) {
        alert('A quantidade de Esporte e menor');
    
    } else {
        alert('A quantidade de Esportes e maior');
    
}
 tentativas++;
} 
}


