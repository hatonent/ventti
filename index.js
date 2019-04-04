console.log("script loaded");

function handleHit(){
    console.log("hit");
    const card = {
        label: 'A',
        value: 14,
        suit: {
            name: 'spades',
            symbol: '&spades;'
        }

    }
    document.getElementById('player-hand').appendChild(createCard(card));
}

function handleStand(){
    console.log("stand");
}

async function makeAction(action){
    const protocol = 'http://';
    const host = 'localhost:5000';
    const path = '/api/v1/game';
    const gameId = 'test';

    const url = protocol + host + path + gameId;
    
    const reqData = {
        action: action
    }

    const response = await fetch(url,{
        method: 'post',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify/(reqData)
    });

    const resData = await response.json();

    console.log(resData);
}

function createCard(card){
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    

    const top = document.createElement('div')
    top.classList.add('card-top');
    top.textContent = 'A';

    const middle = document.createElement('div')
    middle.classList.add('card-middle');
    middle.textContent = '♠';

    const bottom = document.createElement('div')
    bottom.classList.add('card-bottom');
    bottom.textContent = 'A';




    console.log(top);
        newCard.appendChild(top);
        newCard.appendChild(middle);
        newCard.appendChild(bottom);
    
    
    
    return newCard;
} 

document.getElementById('hit').onclick = handleHit;
document.getElementById('stand').addEventListener('click',handleStand);

console.log(createCard());