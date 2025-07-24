console.log('Happy developing ✨')

const character = {
    name: `character`,
    hp: 10,
    attack: 1,
    exp: 0,
    lvlUpExp: 10,
    lvl: 1
};

const pig = {
    name: 'Pig',
    hp: 2,
    attack: 1,
    giveExp: 2
};

const characterDeath = (character.hp <= 0)
const pigDeath = (pig.hp <= 0)

console.log(character, pig);

function fight () {

    character.attack -= pig.hp;
    character.hp -= pig.attack;

    if (pigDeath) {
        character.exp += pig.giveExp;
        console.log(`${pig.name} храбро пла в бою. Вы получаете ${pig.giveExp} опыта`)
        return;
    }
}

if (characterDeath) {
    character.exp /= 2;
    console.log(`Вы умерли. И ваш опыт уменьшился в два раза.`)
}

if (character.exp === character.lvlUpExp) {
    lvlUp;
}

function lvlUp () {
    character.lvl += 1;

    if (character.lvl + 1) {
        const newLvlUpExp= character.lvlupExp *= 2;
        character.lvlUpExp = newLvlUpExp;
        return;
    }
    console.log(`Ваш уровень вырос. Для достижения следующего уровня вам нужно ${newLvlUpExp} опыта`)
}

console.log(fight)