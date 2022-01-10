function botao () {
    while (true) {
        var escolhaDePersonagem = prompt ("Esolha seu personagem  \n 1 = Superman  \n 2 = Mulher maravilha  \n 3 = Batman")
        if (escolhaDePersonagem == 1) {
            return superman ();
            break;  
        }
        else if (escolhaDePersonagem == 2){
            return mulhermaravilha ();
            break;
        }
        else if (escolhaDePersonagem == 3) {
            return batman ();
            break;
        }
        else {
            alert ("Personagem não encontrado \n Digite: 1, 2 ou 3")
        }

    }    
}

var batmanPrimerio = './Fase1Batman.html'
var supermanPrimeiro = './Fase1superman.html'
var maravilhaPrimeiro = './Fase1Mulhermaravilha.html'

function batman () {
    alert("Seu personagem escolhido foi o Batman");
    window.open(batmanPrimerio,"_self");
}

function superman () {
    alert("Seu personagem escolhido foi o Superman");
    window.open(supermanPrimeiro,"_self");
}

function mulhermaravilha () {
    alert("Seu personagem escolhido foi a Mulher Maravilha");
    window.open(maravilhaPrimeiro,"_self");
}