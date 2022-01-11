function botao () {
    while (true) {
        var escolhaDeOpcao = prompt ("Para passar pelo ultimo teste escolha corretamente, quais são os vilões do Batman?  \n A ou B")
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

var next = './Win.html'
var end = './Gameover.html'

function proxima () {
    window.open (next,'_self')
}

function gameOver () {
    window.open (end, '_self')
}