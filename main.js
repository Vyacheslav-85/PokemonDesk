import Pokemon from "./pokemon.js"
import random from "./utils.js"
import { pokemons } from "./pokemons.js"

let player1 = pokemons[random(0, 5)]
let player2 = pokemons[random(0, 5)]


player1 = new Pokemon({
    ... player1,
    selectors: 'player1'

})

player2 = new Pokemon({
    ... player2,
    selectors: 'player2'

})

console.log(player1)

const $elImg1 = document.getElementById('img-player1')
$elImg1.src = player1.img
const $elImg2 = document.getElementById('img-player2')
$elImg2.src = player2.img

document.getElementById('name-player1').innerText = player1.name
document.getElementById('name-player2').innerText = player2.name





const $control = document.querySelector('.control')

player1.attacks.forEach(item => {
    //console.log(item)
    const $btn = document.createElement('button')
    $btn.classList.add('button')
    $btn.innerText = item.name
    const btnCount = countBtn (item.maxCount, $btn)
    $btn.addEventListener('click', () => {
        //console.log('Click', $btn.innerText)
        btnCount() 
    })
    $control.appendChild($btn)
})


const $btn = document.getElementById('btn-kick')
const $btn2 = document.getElementById('btn-kick2')
const $p = document.createElement('p')
const $logs = document.querySelector('#logs')
$logs.appendChild($p)

// $btn.innerText = `Осталось ${btn1MaxClick}`
// $btn2.innerText = `Осталось ${btn2MaxClick}`


/*
$btn.addEventListener('click', function() {
    console.log('Kick')
    player1.changeHP(random(100, 20), function (count) {
        console.log(count)
        console.log(generateLog(player1, player2, count))
    })
    player2.changeHP(random(20))
    btn1CountClick()
})


$btn2.addEventListener('click', function() {
    console.log('Kick')
    player1.changeHP(random(10), function (count) {
        console.log(count)
        console.log(generateLog(player1, player2, count))
    })
    player2.changeHP(random(10))
    btn2CountClick()
})
*/

function init() {
    console.log('Start Game!')
}
init()


function generateLog(firstPerson, secondPerson) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага.`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника.`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.`
    ];

    return logs[random(logs.length)-1]
}