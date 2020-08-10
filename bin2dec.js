function pegarValor(){

    var lista;

    var campoBinario = document.getElementById("campoBinario").value;
    
    // TODO: Verificar se tem letra no campo
    
    lista = campoBinario.split("");

    verificarTamanhoLista(lista);
}

function verificarTamanhoLista(lista){
    if(lista.length > 8 || lista.length < 8){
        document.getElementById("resultado").innerHTML = "Digite até 8 dígitos";
    }else{
        verificarLista(lista);
    }
}

function verificarLista(lista){

    let novaLista = [];

    for(let i in lista){
        novaLista.push(parseInt(lista[i], 10));
    }

    for(let i = 0; i <= novaLista.length; i++){
        if(novaLista[i] > 1){
            document.getElementById("resultado").innerHTML = "Digite apenas 0 ou 1";
            break;
        }else{
            calculoBinario(lista);
        }
    }
}

function calculoBinario(lista){
    var numeroDecimal = 0;

    // 128
    if(lista[0] == "1"){
        numeroDecimal += 128;
    } else{
        numeroDecimal += 0;
    }

    // 64
    if(lista[1] == "1"){
        numeroDecimal += 64;
    }else{
        numeroDecimal += 0;
    }

    // 32
    if (lista[2] == "1") {
        numeroDecimal += 32;
    } else {
        numeroDecimal += 0;
    }

    // 16
    if (lista[3] == "1") {
        numeroDecimal += 16;
    } else {
        numeroDecimal += 0;
    }

    // 8
    if (lista[4] == "1") {
        numeroDecimal += 8;
    } else {
        numeroDecimal += 0;
    }
    // 4
    if (lista[5] == "1") {
        numeroDecimal += 4;
    } else {
        numeroDecimal += 0;
    }
    // 2
    if (lista[6] == "1") {
        numeroDecimal += 2;
    } else {
        numeroDecimal += 0;
    }

    // 1
    if (lista[7] == "1") {
        numeroDecimal += 1;
    } else {
        numeroDecimal += 0;
    }

    document.getElementById("resultado").innerHTML = numeroDecimal;
}