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



const playButtonEl = document.getElementById("play-button");

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

    return gameContainer
}


