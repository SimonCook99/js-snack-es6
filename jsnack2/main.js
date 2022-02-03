let squadreCalcio = [
    {
        nome: "inter",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "napoli",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "milan",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "juventus",
        punti_fatti: 0,
        falli_subiti: 0
    }
];


//lista con i campi compilati grazie alla funzione apposita
let listaCompilata = compilaStruttura(squadreCalcio);
console.log(listaCompilata);


//ciclo for per scorrere i campi desierati
for(let i = 0; i < listaCompilata.length; i++){
    let [{nome, falli_subiti}] = listaCompilata;
    console.log(nome, falli_subiti);
}




function compilaStruttura(listaSquadre){

    /* for(let key in listaSquadre){
        if(key == "punti_fatti" || key == "falli_subiti"){
            listaSquadre.key = randomRange(1, 10);
        }
    } */

    //scorro lungo tutta la lista, e compilo i 2 campi con numeri random
    for(let i = 0; i < listaSquadre.length; i++){
        listaSquadre[i].punti_fatti =  randomRange(1,9);
        listaSquadre[i].falli_subiti = randomRange(1,9);
    }

    return listaSquadre;
}


//funzione che torna un numero random di un range predefinito
function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}