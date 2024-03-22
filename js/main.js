//! primo snack
let invitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
let listaCompleta = invitati.map((invitato,i) =>{
    let persona = {
        tableName : 'Tavolo vip',
        guestName : invitato,
        place : i
    }
    return persona;
});

console.log(listaCompleta);

