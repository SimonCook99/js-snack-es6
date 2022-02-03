let elencoBici = [
    {
        nome: "runner bike",
        peso: 26
    },
    {
        nome: "motor bike",
        peso: 35
    },
    {
        nome: "canyon bike",
        peso: 21
    },
    {
        nome: "lighter bike",
        peso: 18
    },
    {
        nome: "lighter bike",
        peso: 15
    },
    {
        nome: "lighter bike",
        peso: 18
    }
];


let pesoMinore = stampaPesoMinore(elencoBici);

//stampa del risultato tramite template literal
document.getElementById("peso").innerHTML = `Il peso della bici più leggera è: ${pesoMinore}`; 


//funzione che prende l'array di oggetti come parametro
function stampaPesoMinore(listaBici){

    //destructuring del peso, inizalmente uguale al valore peso del primo oggetto
    let {peso} = listaBici[0];


    //scorro in tutto l'oggetto, se trovo un valore "peso" minore, allora sovrascrivo quella variabile.
    for(let i = 0; i < listaBici.length; i++){

        if(listaBici[i].peso < peso){
            peso = listaBici[i].peso;
        }
    }


    return peso;
}