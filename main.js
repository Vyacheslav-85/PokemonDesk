const $bnt = document.getElementById('btn-kick')
const $bnt2 = document.getElementById('btn-kick2')
const $p = document.createElement('p')
//$p.innerText = 'Лог боя'
const $logs = document.querySelector('#logs')
$logs.appendChild($p)

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

$bnt.addEventListener('click', function() {
    console.log('Kick')
    character.changeHP(random(20))
    enemy.changeHP(random(20))
})

$bnt2.addEventListener('click', function() {
    console.log('Kick')
    character.changeHP(random(10))
    enemy.changeHP(random(10))
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
        $bnt.disabled = true
        $bnt2.disabled = true
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