// Write your JS here

// creating a hero object
const hero = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2
    }

}


// creating a rest function

function rest(object) {
    object.health = 10
    return object
}

document.getElementById('inn').onclick = function (){
    hero.health = 10
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
}

// equipWeapon function
function equipWeapon(heroLikeObject) {
    if(heroLikeObject.inventory[0]){
    heroLikeObject.weapon = heroLikeObject.inventory[0]
    }
}
const knife = {
    type: 'knife',
    damage: 3
}

// equip weapon
document.getElementById('bag').onclick = function() {
    hero.weapon = hero.inventory[0]
}