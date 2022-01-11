function botao () {
    while (true) {
        var escolhaDeOpcao = prompt ("Para passar pelo primeiro teste escolha corretamente, qual das opções diz o que cada kryptonita causa ao Superman.  \n A ou B")
        if (escolhaDeOpcao == "B") {
            return gameOver ();
            break;  
        }
        else if (escolhaDeOpcao == "A"){
            return proxima ();
            break;
        }
        else {
            alert ("Escolha entre \n A ou B")
        }

    }    
}

var next = './Fase2superman.html'
var end = './Gameover.html'

function proxima () {
    window.open (next,'_self')
}

function gameOver () {
    window.open (end, '_self')
}