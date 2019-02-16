// Write your JS here

// creating a hero object
const hero = {
    name: 'Zelda',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2
    }

}


// creating a rest function. On click, hero's health back to 10

function rest(object) {
    object.health = 10
    return object
}

document.getElementById('inn').onclick = function (){
    hero.health = 10
    displayStats()
}


// pickup items function --> works fine but error (of Rein) says "global leak detected: dagger"

function pickUpItem (heroLikeObject, object) {
    heroLikeObject.inventory.push(object)
}

document.getElementById('dagger').onclick = function() {
    weaponLikeObject = {
        type: 'dagger',
        damage: 2
    }
    hero.inventory.push(weaponLikeObject)
    displayStats()
}

// equipWeapon function
function equipWeapon(heroLikeObject) {
    if(heroLikeObject.inventory[0]){
    heroLikeObject.weapon = heroLikeObject.inventory[0]
    }
}


// equip weapon
document.getElementById('bag').onclick = function() {
    hero.weapon = hero.inventory[0]
    displayStats()
}

// display stats
// heroName, health, weapontype, weaponDamage
function displayStats() {
document.getElementById('heroName').innerHTML = hero.name
document.getElementById('health').innerHTML = hero.health
document.getElementById('weaponType').innerHTML = hero.weapon.type
document.getElementById('weaponDamage').innerHTML = hero.weapon.damage
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

