import Pokemon from "./pokemon.js"
import random from "./utils.js"
const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    hp: 500,
    selectors: 'character'

})

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selectors: 'enemy'
})

const btn1MaxClick = 5
const btn2MaxClick = 10

const $btn = document.getElementById('btn-kick')
const $btn2 = document.getElementById('btn-kick2')
const $p = document.createElement('p')
const $logs = document.querySelector('#logs')
$logs.appendChild($p)

$btn.innerText = `Осталось ${btn1MaxClick}`
$btn2.innerText = `Осталось ${btn2MaxClick}`

function btn1Count() {
    let btn1Clk = 0
    let btn1LeftClick = btn1MaxClick
        return function () {
        btn1Clk = btn1Clk + 1
        console.log(btn1Clk)

        btn1LeftClick = btn1LeftClick - 1
        $btn.innerText = `Осталось ${btn1LeftClick}`    
        if (btn1Clk === btn1MaxClick) {
            $btn.disabled = true
        }
    }
}

function btn2Count() {
    let btn2Clk = 0
    let btn2LeftClick = btn2MaxClick
        return function () {
        btn2Clk = btn2Clk + 1
        console.log(btn2Clk)

        btn2LeftClick = btn2LeftClick - 1
        $btn2.innerText = `Осталось ${btn2LeftClick}`    
        if (btn2Clk === btn2MaxClick) {
            $btn2.disabled = true
        }
    }
}

let btn1CountClick = btn1Count()
let btn2CountClick = btn2Count()

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