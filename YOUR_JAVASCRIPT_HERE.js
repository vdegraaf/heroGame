// Write your JS here

// creating a hero object
let hero = {
    name: 'Zelda',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'Bare hands',
        damage: 2
    }

}

// creating villan
let villan = {
    name: 'Hello Kitty',
    heroic: false,
    inventory: [],
    health: 10,
    weapon: {
        type: 'Bare paws',
        damage: 2
    }

}
// available weapons
const dagger = {
    type: 'dagger',
    damage: 2
    }

const rainbowGun = {
    type: 'rainbow gun',
    damage: 4
}

// creating a rest function.
function rest(object) {
    object.health = 10
    return object
}

// On click rest, hero's health back to 10
document.getElementById('inn').onclick = function() {
    rest(hero)
    displayStats()
}
// On click rest, villan's health back to 10
document.getElementById('villanRest').onclick = function() {
    rest(villan)
    displayStats()
}

// pickup items function
function pickUpItem (heroLikeObject, weaponLikeObject) {
    heroLikeObject.inventory.push(weaponLikeObject)
    displayStats()
}
// on click dagger, hero adds dagger to inventory
document.getElementById('dagger').onclick = function() {
    pickUpItem(hero, dagger)
}
// on click rainbowGun, villan adds gun to inventory
document.getElementById('rainbowGun').onclick = function() {
    pickUpItem(villan, rainbowGun)
}

// equipWeapon function
function equipWeapon(heroLikeObject) {
    if(heroLikeObject.inventory[0]){
        heroLikeObject.weapon = heroLikeObject.inventory[0]
        }
        displayStats()
    }

// on click inventory, hero is equiped with first weapon
document.getElementById('bag').onclick = function() {
    equipWeapon(hero)
}

// on click inventory, villan is equiped with first weapon
document.getElementById('kittyBag').onclick = function() {
    equipWeapon(villan)
}

// display stats

function displayStats() {
// HERO: heroName, health, weapontype, weaponDamage
document.getElementById('heroName').innerHTML = hero.name
document.getElementById('health').innerHTML = hero.health
document.getElementById('weaponType').innerHTML = hero.weapon.type
document.getElementById('weaponDamage').innerHTML = hero.weapon.damage
// VILLAN: villanName, health, weapontype, weaponDamage
document.getElementById('villanName').innerHTML = villan.name
document.getElementById('villanHealth').innerHTML = villan.health
document.getElementById('villanWeaponType').innerHTML = villan.weapon.type
document.getElementById('villanWeaponDamage').innerHTML = villan.weapon.damage
}
displayStats()
// change name hero

const typeArea = document.querySelector('.change-name-hero')
const newName = document.querySelector('#name-hero')
typeArea.addEventListener('submit', function(event){
    event.preventDefault()
    hero.name = newName.value
    displayStats()
})

// change name villan

const villanTypeArea = document.querySelector('.change-name-villan')
const villanNewName = document.querySelector('#name-villan')
villanTypeArea.addEventListener('submit', function(event){
    event.preventDefault()
    villan.name = villanNewName.value
    displayStats()
})

// fighting function

function attack(attacker, defender) {
    attackEffect()
    defender.health = defender.health- attacker.weapon.damage  
    displayStats()
    gameOver()
    return defender.health
}
// on click hero attack
document.getElementById('heroAttack').onclick = function() {
    attack(hero, villan)
}
// on click villan attack
document.getElementById('villanAttack').onclick = function() {
    attack(villan, hero)
}

// Game Over
function gameOver(){
    if(hero.health <= 0){
        alert('You have won! The hero is no longer...')
    } else if(villan.health <= 0){
        alert('You have defeated the evil! The enemy is dead.')
    }
    
}

// reset game
function resetGame() {
    return location.reload(true)
}
document.getElementById('resetGame').onclick = function() {
    resetGame()
}

// attack effect
function attackEffect() {
    document.getElementById("attackEffect").style.visibility="visible";
    setTimeout("hide()", 1000);  // 1 second
}
function hide() {
    document.getElementById("attackEffect").style.visibility="hidden";
}

