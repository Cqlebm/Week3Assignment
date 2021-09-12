// 2.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let sum = 0;
for (let name of names) {
    sum = sum + name.length;
}
console.log(sum / names.length);
console.log(" " + names + " ");
// 3.
console.log(names.pop());
// 4.
console.log(names[0]);
// 5.
let nameLengths = ['3','5','3','5','4','3'];
// 6.
for (let nameLength of nameLengths) {
    sum = sum + nameLength.length;
}
console.log(sum - 6);
// 7.
function func(word, n){
return word + n;
}
// 8.
function fullName(firstName, lastName){
    return firstName + " " + lastName
}
// 9.
function numbers(x){
    if(x + x.length > 100)
    return true
}
// 10.
function arrayNum(arrays){
let arrays = [""];
for(let array of arrays){
    sum = sum + array.length;
}
return sum / arrays.length
}
// 11.
function array2(c, d){
    if (c > d);
    return true;
}
//12. 
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50);
    return  true;
}
//13. Function differenceOfTwo takes two numbers and returns difference
function differenceOfTwo(y, z){
    return y - z;
}
console.log('hi');