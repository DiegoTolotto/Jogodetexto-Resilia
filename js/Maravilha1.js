function botao () {
    while (true) {
        var escolhaDeOpcao = prompt ("Para passar pelo primeiro teste escolha corretamente qual das opções corresponde as fraquezas da Mulher Maravilha  \n A ou B")
        if (escolhaDeOpcao == "A") {
            return gameOver ();
            break;  
        }
        else if (escolhaDeOpcao == "B"){
            return proxima ();
            break;
        }
        else {
            alert ("Escolha entre \n A ou B")
        }

    }    
}

var next = './Fase2Mulhermaravilha.html'
var end = './Gameover.html'

function proxima () {
    window.open (next,'_self')
}

function gameOver () {
    window.open (end, '_self')
}