// Write your JS here

// creating a hero object
let hero = {
    name: 'Zelda',
    heroic: true,
    inventory: [
        {
        type: 'Bare hands',
        damage: 1,
        image: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Fist_Hand_Emoji_large.png?v=1480481045'
        }
    ],
    health: 10,
    weapon: {
        type: 'Bare hands',
        damage: 2,
        image: ''
    }

}

// creating villan
let villan = {
    name: 'Hello Kitty',
    heroic: false,
    inventory: [
        {
        type: 'Bare paws',
        damage: 1,
        image: "https://pawsofcoronado.org/wp-content/uploads/2016/01/cropped-favicon.png"
        }
    ],
    health: 10,
    weapon: {
        type: 'Bare paws',
        damage: 2,
        image: ""
    }

}
// available weapons
const dagger = {
    type: 'dagger',
    damage: 2,
    image: 'https://vignette.wikia.nocookie.net/zelda/images/8/80/Master_Sword_%28Ocarina_of_Time%29.png/revision/latest?cb=20090421233552'
    }

const rainbowGun = {
    type: 'rainbow gun',
    damage: 4,
    image: 'https://cdn.survivorsrest.com/img/h1z1/items/rainbow-swirl-sniper-rifle.png'
}

const bomb = {
    type: 'bomb',
    damage: 6,
    image: 'https://vignette.wikia.nocookie.net/videogamefan/images/3/3b/Bomb.png/revision/latest?cb=20150208074008'
}

const bow = {
    type: 'bow',
    damage: 5,
    image: 'https://vignette.wikia.nocookie.net/zelda/images/5/54/Majora%27s_Mask_Bow_Hero%27s_Bow_%28Artwork%29.png/revision/latest?cb=20160601041912'
}

const bazooka = {
    type: 'bazooka',
    damage: 8,
    image: 'https://wiki.teamfortress.com/w/images/thumb/7/7f/Original.png/250px-Original.png'
}

const axe = {
    type: 'axe',
    damage: 3,
    image: 'https://mcishop.azureedge.net/mciassets/w_5_0010697_double-bladed-barbarian-battle-axe_550.png'
}

// creating a rest function.
function rest(object) {
    object.health += 5 
    if(object.health > 10) {
        object.health = 10
    }
    return object
}

// pickup items function
function pickUpItem (heroLikeObject, weaponLikeObject) {
    heroLikeObject.inventory.push(weaponLikeObject)
    displayStats()
}

// equipWeapon function

let currentWeaponHero = 0;

function equipWeaponHero(heroLikeObject) {
    if(heroLikeObject.inventory[currentWeaponHero]){
        heroLikeObject.weapon = heroLikeObject.inventory[currentWeaponHero]
        document.getElementById('currentWeaponHero').src = heroLikeObject.weapon.image
        }
        displayStats()
    }

let currentWeaponVillan = 0
function equipWeaponVillan(villanLikeObject) {
    if(villanLikeObject.inventory[currentWeaponVillan]){
        villanLikeObject.weapon = villanLikeObject.inventory[currentWeaponVillan]
        document.getElementById('currentWeaponVillan').src = villanLikeObject.weapon.image
        }
        displayStats()
    }


// fighting function
function attack(attacker, defender) {
    attackEffect()
    defender.health = defender.health- attacker.weapon.damage  
    if(defender.health < 0){
        defender.health = 0
    }
    displayStats()
    gameOver()
    return defender.health
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

// HERO LOGIC //

// On click rest, hero's health back to 10
document.getElementById('inn').onclick = function() {
    rest(hero)
    displayStats()
}

// on click waepon image, hero adds weapon to inventory
document.getElementById('dagger').onclick = function() {
    pickUpItem(hero, dagger)
}

document.getElementById('bomb').onclick = function() {
    pickUpItem(hero, bomb)
}

document.getElementById('bow').onclick = function() {
    pickUpItem(hero, bow)
}

// on click inverntory, hero is equiped with first weapon
document.getElementById('bag').onclick = function() {
    currentWeaponHero++
    console.log(currentWeaponHero)
    console.log(hero.inventory.length)
    if(currentWeaponHero === hero.inventory.length) {
        currentWeaponHero = 0
    }
    console.log(currentWeaponHero)
    equipWeaponHero(hero)
    
}

// VILLAN LOGIC //

// On click rest, villan's health back to 10
document.getElementById('villanRest').onclick = function() {
    rest(villan)
    displayStats()
}

// on click rainbowGun, villan adds gun to inventory
document.getElementById('rainbowGun').onclick = function() {
    pickUpItem(villan, rainbowGun)
}

document.getElementById('bazooka').onclick = function() {
    pickUpItem(villan, bazooka)
}

document.getElementById('axe').onclick = function() {
    pickUpItem(villan, axe)
}

// on click inventory, villan is equiped with first weapon
document.getElementById('kittyBag').onclick = function() {
    currentWeaponVillan++
    if(currentWeaponVillan === villan.inventory.length) {
        currentWeaponVillan = 0
    }
    equipWeaponVillan(villan)
}

// GENERAL FEATURES //

// displaying stats
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
const formHero = document.querySelector('.change-name-hero')
const typeArea = document.querySelector('.change-name-hero')
const newName = document.querySelector('#name-hero')
typeArea.addEventListener('submit', function(event){
    event.preventDefault()
    hero.name = newName.value
    displayStats()
    formHero.reset()
})

// change name villan
const formVillan = document.querySelector('.change-name-villan')
const villanTypeArea = document.querySelector('.change-name-villan')
const villanNewName = document.querySelector('#name-villan')
villanTypeArea.addEventListener('submit', function(event){
    event.preventDefault()
    villan.name = villanNewName.value
    displayStats()
    formVillan.reset()
})

// on click hero attack
document.getElementById('heroAttack').onclick = function() {
    attack(hero, villan)
}
// on click villan attack
document.getElementById('villanAttack').onclick = function() {
    attack(villan, hero)
}

// randomizer for start
function startRandom(){
    let beginner = Math.floor(Math.random()*2)
    if(beginner === 0){
        alert('Hero may start the game')
    } else alert('Villan may start the game')
    }
document.getElementById('start').onclick = function() {
    startRandom()
}