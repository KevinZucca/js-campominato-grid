/* -L'utente clicca su un pulsante che genera una griglia di gioco quadrata
   -Ogni quadrato ha un numero progressivo dall'1 al 100
   -la griglia sarà di 10 x 10
   -Quando l'utente clicca su una cella, questa diventa azzurra ed in console esce un messaggio
    con il relativo numero della casella
*/

// -Genero in primis una funzione in grado di creare la tabella di gioco, siccome la tabella può avere un
//  numero differente di celle 
// -all'interno della funzione creo gli elementi di gioco (tabella + celle)
// -assegno delle classi per poterli personalizzare e dare misure
// -creo un ciclo grazie al quale possono comparire i numeri nelle celle
// -creo un evento che mi permetta di cliccare sulla cella
// -all'interno specifico che se cliccata, restituisce un background (quindi uno stile nuovo) ed
//  un numero in console

//  BONUS
/* -Aggiungere una select per la difficoltà accanto al bottone per giocare in 3 difficoltà diverse
   -difficoltà 1: 100 caselle (10x10)
   -difficoltà 2: 81 caselle (9x9)
   -difficoltà 3: 49 caselle (7x7)
*/

// -Genero una select e la collego in JS dal DOM. questà dovrà collegarsi alla funzione iniziale che faceva
//  comparire la griglia e dovrà a questo punto (la funzione) cambiare nome per definire il livello facile.
// -In base alla scelta sul select ci saranno altre due funzioni per le rimanenti difficoltà medio e difficile
//  dove verranno definite le caselle. 
// -Le altre istruzioni rimarranno le stesse




const playButtonEl = document.getElementById("play-button");
let difficultyEl = document.getElementById("difficulty-select");

playButtonEl.addEventListener("click", function(){
    generateGame();
});





/**
 * Funzione che genera il gioco
 * @param {gameContainer} 
 * @param {box} 
 * @returns {any}
 */
function generateGame (gameContainer, box) {
    if (difficultyEl.value == "Facile"){
    for(let i = 1; i <= 100; i++) {
        gameContainer = document.getElementById("game-container");
        gameContainer.classList.add("game-container")

        let box = document.createElement("div");
        box.classList.add("box");
        gameContainer.append(box);
        
        const cellNumber = i;
        box.innerText = cellNumber;  

        box.addEventListener("click", function(){
            box.style.backgroundColor = "#7fffd4";
            console.log("Il numero di questa casella è: " + box.innerText )
         });
         
        }
        
    } else if (difficultyEl.value == "Medio") {
        for(let i = 1; i <= 81; i++) {
            gameContainer = document.getElementById("game-container");
            gameContainer.classList.add("game-container")
            gameContainer.classList.add("game-container-medium")

    
            let box = document.createElement("div");
            box.classList.add("box");
            gameContainer.append(box);
            
            const cellNumber = i;
            box.innerText = cellNumber;  
    
            box.addEventListener("click", function(){
                box.style.backgroundColor = "#7fffd4";
                console.log("Il numero di questa casella è: " + box.innerText )
             });
             
            }
                
    } else if (difficultyEl.value == "Difficile") {
        for(let i = 1; i <= 49; i++) {
            gameContainer = document.getElementById("game-container");
            gameContainer.classList.add("game-container")
            gameContainer.classList.add("game-container-hard")

    
            let box = document.createElement("div");
            box.classList.add("box");
            gameContainer.append(box);
            
            const cellNumber = i;
            box.innerText = cellNumber;  
    
            box.addEventListener("click", function(){
                box.style.backgroundColor = "#7fffd4";
                console.log("Il numero di questa casella è: " + box.innerText )
             });
             
            }
            return gameContainer     
        
    }}


