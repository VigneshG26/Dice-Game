'use strict';

const player0 = document.querySelector('#score--0');
const player1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector('.btn--hold');
const btn_new = document.querySelector('.btn--new');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

player0.textContent = 0;
player1.textContent = 0;
let cs = 0;
let final_score = [0,0];
let active_player = 0;
let state = true;

dice.classList.add('hide');

roll.addEventListener('click', function(){
    if(state){
        const rand_dice_value = Math.trunc((Math.random() * 6)+1);
        // console.log(rand_dice_value);
        dice.classList.remove('hide');
        dice.src = `dice-${rand_dice_value}.png`;
        if(rand_dice_value != 1){
            cs += rand_dice_value;
            document.querySelector(`#current--${active_player}`).textContent = cs;
        }
        else{
            switchPlayers();
        }
    }
});


hold.addEventListener('click', function(){
    if(state){
        final_score[active_player] += cs;
        document.querySelector(`#score--${active_player}`).textContent = final_score[active_player];

        if(final_score[active_player]>= 100)
        {   
            dice.classList.add('hide');
            document.querySelector(`#current--${active_player}`).textContent = 0;
            document.querySelector(`.player--${active_player}`).classList.remove('player--active');
            document.querySelector(`.player--${active_player}`).classList.add('player--winner');
            alert(`player ${active_player+1} wins`);
            state = false;
        }else switchPlayers();
    }
});

 function newgame(){
    player0.textContent = 0;
    player1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    dice.classList.add('hide');
    state = true;
    final_score = [0, 0];
    document.querySelector(`.player--${active_player}`).classList.remove('player--winner');
    active_player = 0;
    document.querySelector(`.player--${active_player}`).classList.add('player--active')
}

function switchPlayers(){
    cs = 0;
    document.querySelector(`#current--${active_player}`).textContent = cs;
    document.querySelector(`.player--${active_player}`).classList.remove('player--active')
    if(active_player == 0) 
        active_player = 1;
    else 
        active_player = 0;
    document.querySelector(`.player--${active_player}`).classList.add('player--active')

}