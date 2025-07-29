
// База данных - Места, Враги, Персонаж

const character = {
    name: `character`,
    hp: 10,
    attack: 1,
    exp: 0,
    lvlUpExp: 10,
    lvl: 1
};

const items = [
    {name:`svord`, attack: 1},
    {name: `armor`, hp: 10}
]

const locations = [
    {name: `field`},
    {name: `cave`},
    {name: `castle`}
]

let fieldEnemy = [
    {name: `pig`, hp: 2, attack: 1, giveExp: 1},
    {name: `pig`, hp: 1, attack: 3, giveExp: 2},
    {name: `pig`, hp: 2, attack: 4, giveExp: 4}
];

let caveEnemy = [
    {name: `goblin`, hp: 3, attack: 3, giveExp: 8},
    {name: `stoneElement`, hp: 6, attack: 2, giveExp: 8},
    {name: `ork`, hp: 5, attack: 3, giveExp: 8}
];

let castleEnemy = [
    {name: `vampier`, hp: 2, attack: 1, giveExp: 1},
    {name: `skeletonKing`, hp: 1, attack: 3, giveExp: 2},
    {name: `lavamonster`, hp: 2, attack: 4, giveExp: 4}
];

// ------------------------------------------------------------------------------------------------------------------

function selectLocation() {
    console.log(`Выберите локацию написав`)
    console.log(`-------------------------------------`)
    console.log(`"fieldFight()" - это поле`)
    console.log(`-------------------------------------`)
    console.log(`caveFight - это пещера`)
    console.log(`-------------------------------------`)
    console.log(`castleFight - это замок`)
};

selectLocation();


function fieldFight () {

    function getRandomEnemy() {
        const randomEnemy = Math.floor(Math.random() * fieldEnemy.length);
        return fieldEnemy[randomEnemy];
    }

    let activeEnemy = getRandomEnemy();

    console.log(`Враг ${activeEnemy.name} приближается. Его здоровье: ${activeEnemy.hp} , Его атака: ${activeEnemy.attack} !`)

    activeEnemy.hp -= character.attack;
    character.hp -=  activeEnemy.attack;

    console.log(`Вы нанесли урон ${character.attack}`)
    console.log(`Вы получили урон ${activeEnemy.attack}`)

    if (activeEnemy.hp <= 0) {
        character.exp += activeEnemy.giveExp;
        console.log(`${activeEnemy.name} храбро пла в бою. Вы получаете ${activeEnemy.giveExp} опыта`)

        fieldEnemy = fieldEnemy.filter(myEnemy => myEnemy !== activeEnemy);
        if (fieldEnemy.length > 0){
            activeEnemy = getRandomEnemy();
            console.log(`Новый врг! Его здоровье ${activeEnemy.hp} его атака ${activeEnemy.attack}`)
        } else {
            console.log(`Вы победили всех свиней!`)}
    }

    if (character.exp >= character.lvlUpExp) {
        lvlUp();
    }
}

if (character.hp <= 0) {
    character.exp = Math.floor(character.exp / 2);
    console.log(`Вы умерли. И ваш опыт уменьшился в два раза.`)
}

function lvlUp () {
    character.lvl += 1;
    character.lvlUpExp *= 2;
    character.exp = 0;
    console.log(`Ваш уровень вырос. Для достижения следующего уровня вам нужно ${character.lvlUpExp} опыта`)
}