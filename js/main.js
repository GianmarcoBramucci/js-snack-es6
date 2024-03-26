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

//! secondo snack
let aula = [
    {
        id: '213',
        name: 'Marco della Rovere',
        grades: '78',
    },
    {
        id: '110',
        name: 'Paola Cortellessa',
        grades: '96',
    },
    {
        id: '250',
        name: 'Andrea Mantegna',
        grades: '48',
    },
    {
        id: '145',
        name: 'Gaia Borromini',
        grades: '74',
    },
    {
        id: '196',
        name: 'Luigi Grimaldello',
        grades: '68',
    },
    {
        id: '102',
        name: 'Piero della Francesca',
        grades: '50',
    },
    {
        id: '120',
        name: 'Francesca da Polenta',
        grades: '84',
    },
];

for(let studente of aula){
    studente.name = studente.name.toUpperCase();
    
}

console.log(aula);

arraySecond = aula.filter((studente) =>{
    if(parseInt(studente.grades) >70){
        return true;
    }
});

arrayTerzo = aula.filter((studente) =>{
    if(parseInt(studente.grades) >70 && parseInt(studente.id) >120){
        return true;
    }
});

console.log(arraySecond);
console.log(arrayTerzo);


//! terzo snack

const bikes = [
    {
        nome: "Bianchi Oltre XR4",
        peso: 7.1
    },
    {
        nome: "Specialized Tarmac SL7",
        peso: 7.3
    },
    {
        nome: "Trek Madone SLR 9",
        peso: 7.2
    },
    {
        nome: "Cannondale SuperSix EVO",
        peso: 7.0
    },
    {
        nome: "Pinarello Dogma F12",
        peso: 7.4
    },
    {
        nome: "Colnago C64",
        peso: 7.5
    },
    {
        nome: "Scott Foil Premium",
        peso: 7.1
    },
    {
        nome: "Giant TCR Advanced SL",
        peso: 6.9
    },
    {    
        nome: "Wilier Zero SLR", 
        peso: 6.8 
    },
    { 
        nome: "Cervélo R5",
         peso: 7.2 
    }
];

let min = bikes[0].peso;
let lightBike= {};
for( let bike of bikes){
    if(bike.peso < min){
        min = bike.peso;
        lightBike = bike;
    }
}
let {nome, peso} = lightBike;
console.log(`BICI:${nome} PESO:${peso}`);

//! quarto snack
const listTeam = [
    {
      name: 'Milan',
      points: 0,
      fouls: 0
    },
    {
      name: 'Roma',
      points: 0,
      fouls: 0
    }, 
    {
      name: 'Inter',
      points: 0,
      fouls: 0
    },
    {
      name: 'Napoli',
      points: 0,
      fouls: 0
    },
    {
      name: 'Juventus',
      points: 0,
      fouls: 0
    }
  ];

// stavo cercando di fare una classifica delle sqadre effettiva ma purtroppo stavo impazendo per farlo
let maxScore = 100;
let last = 0;
let minScore =0;
let newListTeam= [];
for(let team of listTeam){
    let newTeam= {};
    last =+ team.points;
    maxScore = (maxScore-last);
    team.points = getRndInteger(minScore,maxScore );
    team.fouls = getRndInteger(0,10);
    let {name,fouls}= team;
    newTeam.name=name;
    newTeam.fouls= fouls;
    newListTeam.push(newTeam);
}
console.log(newListTeam);
