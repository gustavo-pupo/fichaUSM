window.onload = function(){
    nome.value = localStorage.getItem("nome");

    con.value = localStorage.getItem("con");
    var vida = con.value*2;
    vidaMax.innerHTML = "/" + vida;
    qtdVida.value = localStorage.getItem("qtdVida");

    intel.value = localStorage.getItem("int");
    var mana = intel.value*4;
    manaMax.innerHTML = "/" + mana;
    qtdMana.value = localStorage.getItem("qtdMana");

    forca.value = localStorage.getItem("for");
    dex.value = localStorage.getItem("dex");
    atirar.value = localStorage.getItem("atirar");
    percep.value = localStorage.getItem("sentir");
    cura.value = localStorage.getItem("cura");
    tacar.value = localStorage.getItem("tacar");
    labia.value = localStorage.getItem("labia");
    tools.value = localStorage.getItem("tools");


}
//Variáveis
var nome = document.getElementById("nome");

var qtdVida = document.getElementById("qtdVida");
var vidaMax = document.getElementById("vidaMax");

var qtdMana = document.getElementById("qtdMana");
var manaMax = document.getElementById("manaMax");

var forca = document.getElementById("for");
var con = document.getElementById("con");
var dex = document.getElementById("dex");
var atirar = document.getElementById("atirar");
var percep = document.getElementById("sentir");
var cura = document.getElementById("cura");
var tacar = document.getElementById("tacar");
var intel = document.getElementById("int");
var labia = document.getElementById("labia");
var tools = document.getElementById("tools");

var numero = document.getElementById("numero");
var sucesso = document.getElementById("sucesso");
var teste = document.getElementById("teste")

//funções

function salvarInfos(){
    localStorage.setItem("nome", nome.value);
    localStorage.setItem("qtdVida",qtdVida.value);
    localStorage.setItem("qtdMana", qtdMana.value);

    localStorage.setItem("for", forca.value);
    localStorage.setItem("con", con.value);
    localStorage.setItem("dex", dex.value);
    localStorage.setItem("atirar", atirar.value);
    localStorage.setItem("sentir", sentir.value);
    localStorage.setItem("cura", cura.value);
    localStorage.setItem("tacar", tacar.value);
    localStorage.setItem("int", intel.value);
    localStorage.setItem("labia", labia.value);
    localStorage.setItem("tools", tools.value);

    location.reload();
}

function d20(min, max) {
    min = Math.ceil(1);
    max = Math.floor(21);
    return Math.floor(Math.random() * (max - min)) + min;
}

function testeAtributos(dado, atributo){
    dado = d20();
    numero.innerHTML = dado;
    teste.innerHTML = atributo.name;
    console.log(dado)
    if(atributo.value == 0){
        if(dado == 1){
        sucesso.innerHTML = "Desastre";
        } else{
        sucesso.innerHTML = "Fracasso";
        }
    }
    if(atributo.value >= 1 && atributo.value <= 4){
        if(dado == 20){
            sucesso.innerHTML = "Normal";
        } else if(dado == 1){
            sucesso.innerHTML = "Desastre";
        } else{
            sucesso.innerHTML = "Fracasso"
        }
    }
    if(atributo.value >= 5 && atributo.value <= 9){
        if(dado == 1){
            sucesso.innerHTML = "Desastre";
        } else if(dado >= 2 && dado <= 16){
            sucesso.innerHTML = "Fracasso";
        } else if(dado >= 17 && dado <= 18 ){
            sucesso.innerHTML = "Normal";
        } else if(dado == 19){
            sucesso.innerHTML = "Bom";
        } else if(dado == 20){
            sucesso.innerHTML = "Extremo";
        }
    }
    if(atributo.value >= 10 && atributo.value <= 14){
        if(dado == 1){
            sucesso.innerHTML = "Desastre";
        } else if(dado >= 2 && dado <= 12){
            sucesso.innerHTML = "Fracasso";
        } else if(dado >= 13 && dado <= 16 ){
            sucesso.innerHTML = "Normal";
        } else if(dado >= 17 && dado <= 18){
            sucesso.innerHTML = "Bom";
        } else if(dado >= 19 && dado <= 20){
            sucesso.innerHTML = "Extremo";
        }
    }
    if(atributo.value >= 15 && atributo.value <= 19){
        if(dado == 1){
            sucesso.innerHTML = "Desastre";
        } else if(dado >= 2 && dado <= 8){
            sucesso.innerHTML = "Fracasso";
        } else if(dado >= 9 && dado <= 14 ){
            sucesso.innerHTML = "Normal";
        } else if(dado >= 15 && dado <= 17){
            sucesso.innerHTML = "Bom";
        } else if(dado >= 18 && dado <= 20){
            sucesso.innerHTML = "Extremo";
        }
    }
    if(atributo.value == 20){
        if(dado == 1){
            sucesso.innerHTML = "Desastre";
        } else if(dado >= 2 && dado <= 4){
            sucesso.innerHTML = "Fracasso";
        } else if(dado >= 5 && dado <= 12 ){
            sucesso.innerHTML = "Normal";
        } else if(dado >= 13 && dado <= 16){
            sucesso.innerHTML = "Bom";
        } else if(dado >= 17 && dado <= 20){
            sucesso.innerHTML = "Extremo";
        }
    }
}
function testeForca(){
    dado = d20();
    return testeAtributos(dado, forca);
}
function testeCon(){
    dado = d20();
    return testeAtributos(dado, con);
}
function testeDex(){
    dado = d20();
    return testeAtributos(dado, dex);
}
function testeAtirar(){
    dado = d20();
    return testeAtributos(dado, atirar);
}
function testePercep(){
    dado = d20();
    return testeAtributos(dado, percep);
}
function testeCura(){
    dado = d20();
    return testeAtributos(dado, cura);
}
function testeTacar(){
    dado = d20();
    return testeAtributos(dado, tacar);
}
function testeIntel(){
    dado = d20();
    return testeAtributos(dado, intel);
}
function testeLabia(){
    dado = d20();
    return testeAtributos(dado, labia);
}
function testeTools(){
    dado = d20();
    return testeAtributos(dado, tools);
}