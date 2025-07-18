
console.log("Начнем твой первый день в Аптеке. К тебе будут приходить разные клиенты. " +
    "Следи за кассой: если у тебя не останется денег, ты уволен. И помни — от тебя зависят жизни!");

const medicals = {
    baralgin: {
        price: 10,
        name: `baralgin`,
    },
    trigande: {
        price: 10,
        name: `trigande`,
    },

};

const clients = {
    Oleg: {
        age: [],
        name: `Oleg`
    },

    Semen: {
        age: [],
        name: `Semen`
    }
};

const ages = [`young`, `old`, `adult`];
const ageGroups = ages[Math.floor(Math.random() * ages.length)];
const cops = [];
// const copsRandom = []

let balance = 50;

function sell (who, howOld, howMuch, what) {

    if (ageGroups === `old`) {
        what.price -= 12;
    }

    if (ageGroups === `young`) {
        what.price += 3;
    }

    balance += what.price;
    console.log(`Клиент ${who}, купил ${what}, по цене ${what.price}`)
    console.log(`Ваш баланс ${balance}`)

    if (ageGroups === `old` && ageGroups === `young`) {
        const copsRandom = [Math.floor(Math.random() * 6)] +1;

            if (copsRandom === 1) {
                cops.push(+1);
            }
    }

    if (cops.length === 10) {
        console.log(`GameOver`)
    }

    if (balance === 0) {
        console.log(`GameOver`)
    }

}

sell(Clients.Oleg, ages, 5, medicals)