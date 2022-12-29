// Challenge 1:
//
// Use 2 different techniques to output the value of this variable with
// a label, so we can easily identify it in the script output.

const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.log(surprisingFact);//La differenza principale tra questi due metodi è che il metodo console.log() visualizza la rappresentazione "toString" di qualsiasi oggetto passato, stampa l'elemento simile a Html
console.dir(surprisingFact); // mentre il metodo console.dir() stampa un albero navigabile simile ad un json

// Challenge 2:
//
// Use 2 different techniques to output a formatted version
// of this complete object.

const familyTree = [
  {
    name: "Person 1",
    children: [
      {
        name: "Person 2",
        children: [
          {
            name: "Person 3",
            children: [
              {
                name: "Person 4",
              },
            ],
          },
        ],
      },
    ],
  },
];

console.dir(familyTree, { depth: null }); //console.dir(familyTree, { depth: null }) per stampare con profondità illimitata
console.log(JSON.stringify(familyTree));

// Challenge 3:
//
// Output a count value every time the importantTask function is called.
// Reset the count value after 4 function calls.

function importantTask() {
  console.count("Count"); //registra il numero di volte cui questa chiamata è stata chiamata
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset("Count"); // il metodo countReset()reimposta il conteggio per quell'etichetta su 0
importantTask();
importantTask();