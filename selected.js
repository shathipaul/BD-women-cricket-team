// Common Function

function setInnerTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
  }


const players = [];



function displayName(){

    const playerNames = document.getElementById('players-name');
    playerNames.textContent = '';

    for(let i = 0; i < players.length; i++){

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${players[i].playerName}</td>
        `;
        playerNames.appendChild(tr);
    }
}
function playersName(element){
    const playerName = element.parentNode.children[1].innerText;
    

    const playerNameObj = {
        playerName: playerName
    }
        
    const playerarray = players.length
    
    if(playerarray === 5){
        alert('Can add only 5 playres')
        return
    }

    
    const btnDisable = element.parentNode.children[2];
    btnDisable.setAttribute('disabled', '');

    players.push(playerNameObj);
    displayName();
}