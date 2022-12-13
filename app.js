// Bài 1

let traiCay = {
    name : "Grapes",
    amount : 15
}
console.log( "Tôi có", traiCay.amount, traiCay.name)

// Bài 2

const fruit = [["Grapes", 15]]
    for(let x of fruit){
        console.log("Tôi có:", fruit[0])
    }
    for(let x in fruit){
        console.log("Tôi có:", fruit[x]);
    }
    for(let a = 0; a < fruit.length; a++){
        console.log("Tôi có:", fruit[a]);
    }

// Bài 3
let myDog = Husky
var Husky = {
    "name": "Ngáo",
    "legs": 4,
    "friends": ["everything!"]
};
Husky.color = "Brown";
delete Husky.friends;
console.log(Husky);