


// const cars = [
//     "Toyota", "BMW", "Jigul"
// ]
//
// cars.push("Mersedes")
// cars.push("Lexus")
//
// function updateCars({car, speed, volume}) {
//     const index = cars.indexOf(car);// Найдет индекс элемента 30
//     cars[index] = {name: car, speed, volume};
// }
//
// cars.forEach((car) => {
//     const speed = Math.floor(Math.random() * (150 - 20 +1)) + 20;
//     const volume = Math.floor(Math.random() * (100 - 10 +1)) + 10;
//     updateCars({car, speed, volume});
// })
//
// console.log(cars);
//
// const fastCars = cars.filter((car) => car.speed >100);
// console.log("А вот и подборка моих крошек: ", fastCars);



// function getLastIndex(arr) {
//     return arr.length - 1
// }


// const vegetables = [
//     "Tomato", "Apple", "Cherry", "Potato"]
//
// const cashMachine = {
//     type: "Касса",
//     amount: 50
// }
//
// const lastIndex = vegetables.length - 1; // 3
//
// console.log(vegetables[lastIndex])
//
// function updateVegetables({vegetable, price, kg, quantity}) {
//     const index = vegetables.indexOf(vegetable);
//     vegetables[index] = {price, kg, name: vegetable, quantity};
// }
//
// for (let i = 0; i < vegetables.length; i++) {
//     const price = Math.floor(Math.random() * (100 - 50 +1)) + 50;
//     const kg = Math.floor(Math.random() * (10 - 1 +1)) + 1;
//     const quantity = Math.floor(Math.random() * (10 - 1 +1)) + 1;
//     updateVegetables({vegetable: vegetables[i], price, kg, quantity});
//
// }
//
// console.log(vegetables);
// console.log(cashMachine)
//
//
//     const names = ["Artur", "Oleg", "Semen"]
//     const index = Math.floor(Math.random() * names.length);
//     const name = names[index];
//     const wallet = Math.floor(Math.random() * (100 - 1 +1)) + 1;
//     console.log("client:", name, "Deneg:", wallet);
//
// currentClient = getRandomClient();
//
// if (wallet - updateVegetables(price)) {
//
// }


// const expensiveVegetables = vegetables.filter((veg) => veg.price >80);
// console.log(`Вкусите плоды сочных пышечек`, expensiveVegetables);
//
// const sortedByPrice = vegetables.sort((a, b) => b.price - a.price);
// console.log(`Hello world`,sortedByPrice);
// console.log(sortedByPrice[0]);
// console.log(sortedByPrice[sortedByPrice.length - 1]);
//
// sortedByPrice[0] // [index - number]
//
//
// sortedByPrice[getLastIndex(sortedByPrice)]
//
//
//
// let warehouse  = {};
//
// function  findVegetable ({vegetable, quantity}) {
//     const index = vegetables.indexOf(vegetable);
//     vegetables[index] = {name: vegetable, quantity};
//     warehouse = vegetable, warehouse;
// };
//
// vegetables.forEach((vegetable) => {
//     const quantity = Math.floor(Math.random() * 10) + 1
//     findVegetable({vegetable, quantity: vegetables});
// });
// findVegetable = vegetables ;
//
// console.log(`Сколько на складе?`, vegetables);

// Сделать продуктовую корзину.
// Использовать массив vegetables.
// Добавить баланс (Кэш) (При покупке учитывать прайс и объем - КГ)
// Учитывать остаток на складе (КГ vegetables) (Не можешь продать есть фруктов нет)
// Метод купить показывающий что купить и в каком количестве. ПОсле покупки пополняется кэш.
// Когда кэш копится и закупаешь еще товар. Пополнять на склад продукты когда есть деньги.
// Челики приходят рандомно и "Я хочу купить продукт А". А продукта нет =(
// Очередь челиков в которой можно выбирать кого обслуживать.


const vegetables = [
    "Tomato", "Apple", "Cherry", "Potato"]

function upDateVegetable ({vegetable, price, kg, quantity}) {
    const index = vegetables.indexOf(vegetable);
    vegetables[index] = {name: vegetable, price, kg, quantity};
}
for (let i = 0; i < vegetables.length; i++) {
    const price = Math.floor(Math.random() * 50) + 1;
    const kg = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const quantity = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    upDateVegetable({vegetables: [i], price, kg, quantity})
}
const cashMachine = {
    type: "Касса",
    amount: 50}

const clientName = ["Artur", "Oleg", "Semen"]

function upDateClient ({name, wallet}) {
    const index = clientName.indexOf(name);
    clientName[index] = {name: name, wallet};
    }

clientmoney = upDateClient(wallet);

for (let i = 0; i < clientName.length; i++) {
    const wallet = Math.floor(Math.random() * 100) + 1;
    upDateClient({clientName: [i], wallet});
}

function doIHave(vegetable, price, kg, quantity) {
    if (!quantity) {
        console.log (`В магазине нет ${vegetables}`)
    };
    const index = vegetables.indexOf(vegetable);
    vegetables[index] = {vegetables: vegetable, price, kg, quantity};

    const menu = {vegetables, price, kg, quantity };
    console.log(menu);
}

function buy() {
    if (wallet >= price) = {
    clientmoney -= price,
        cashMachine += price;
    }

}
vegetables.forEach((vegetable) => {doIHave(vegetables, price, kg, quantity);});


