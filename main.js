const btn1MaxClick = 5
const btn2MaxClick = 10

const $btn = document.getElementById('btn-kick')
const $btn2 = document.getElementById('btn-kick2')
const $p = document.createElement('p')
//$p.innerText = 'Лог боя'
const $logs = document.querySelector('#logs')
$logs.appendChild($p)

$btn.innerText = `Осталось ${btn1MaxClick}`
$btn2.innerText = `Осталось ${btn2MaxClick}`


const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressBar: document.getElementById('progressbar-character'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressBarHP: renderProgressBarHP    
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressBar: document.getElementById('progressbar-enemy'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressBarHP: renderProgressBarHP    
}

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
    character.changeHP(random(20))
    enemy.changeHP(random(20))
    btn1CountClick()
})

$btn2.addEventListener('click', function() {
    console.log('Kick')
    character.changeHP(random(10))
    enemy.changeHP(random(10))
    btn2CountClick()
})

function init() {
    console.log('Start Game!')
    character.renderHP()
    enemy.renderHP()
    }
init()

function renderHP() {
    this.renderHPLife()
    this.renderProgressBarHP()     
}

function renderHPLife() {
    const $character = document.getElementById('health-character')
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP
}

function renderProgressBarHP() {
    this.elProgressBar.style.width = this.damageHP + '%'
}

function changeHP(count) {
    this.damageHP -= count

    

    const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy)
 //   console.log(`${log} ${count} [${this.damageHP}/${this.defaultHP}]`)

    const $p = document.createElement('p')
    $p.innerText = `${log} -${count} [${this.damageHP}/${this.defaultHP}]`
    $logs.insertBefore($p, $logs.children[0])

    if (this.damageHP <= 0) {
        this.damageHP = 0        
        setTimeout(() => alert(this.name + ' проиграл бой!'), 100)
        $btn.disabled = true
        $btn2.disabled = true
    }
    this.renderHP()
}

function random(num){
    return Math.ceil(Math.random()*num)
}

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