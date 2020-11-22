const $bnt = document.getElementById('btn-kick')
const $bnt2 = document.getElementById('btn-kick2')
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressBar: document.getElementById('progressbar-character')
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressBar: document.getElementById('progressbar-enemy')
}

$bnt.addEventListener('click', function() {
    console.log('Kick')
    changeHP(random(20), character)
    changeHP(random(20), enemy)
})

$bnt2.addEventListener('click', function() {
    console.log('Kick')
    changeHP(random(10), character)
    changeHP(random(10), enemy)
})

function init() {
    console.log('Start Game!')
    renderHP(character)
    renderHP(enemy)
    }
init()

function renderHP(person) {
    renderHPLife(person)
    renderProgressBarHP(person)
}

function renderHPLife(person) {
    const $character = document.getElementById('health-character')
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP
}

function renderProgressBarHP(person) {
    person.elProgressBar.style.width = person.damageHP + '%'
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0
        setTimeout(() => alert(person.name + ' проиграл бой!'), 100)
//        alert(person.name + ' проиграл бой!')
        $bnt.disabled = true
        $bnt2.disabled = true
    } else {
        person.damageHP -= count
    }
    renderHPLife(person)
    renderProgressBarHP(person)
}

function random(num){
    return Math.ceil(Math.random()*num)
}