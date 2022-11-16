function createGame(palyer1, hour, player2){
  return `
  <li>
          <img src="./assets/icon-${palyer1}.svg" alt="Bandeira do ${palyer1}" />
          <strong>${hour}</strong>
           <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
          </li>
  `
}
let delay = -0.4;
function createCard(date, day, games){
  delay = delay + 0.4;
  return `
  <div class="card" style= "animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
      ${games}  
    </ul>
    </div>
  `
}
document.querySelector("#cards").innerHTML = 

createCard(
  "21/11",
  "segunda",
  createGame("brasil", "08:00", "serbia") + 
  createGame("hungary", "13:00", "argentina") +
  createGame("colombia", "20:00", "japan")
  
)
 +
   
    createCard(
      "24/11",
      "quinta",
      createGame("Switzerland", "07:00", "cameroon") +
        createGame("portugal", "13:00", "ganna") +
        createGame("brasil", "16:00", "serbia")
    ) 
    +
    createCard(
      "28/11",
      "segunda",
      createGame("corea", "10:00", "cameroon") +
        createGame("brasil", "13:00", "Switzerland") +
        createGame("portugal", "16:00", "uruguai")
    )
   