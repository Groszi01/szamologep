console.log("Üdvözöllek a számológépben")
console.log("Válaszd ki a kivánt műveletet \n 1. Összeadás \n 2. Kivonás \n 3. Szorzás \n 4. Osztás")
muvelet = prompt("Add meg a műveletet: ")
num1 = prompt("Add meg az első számot: ")
num2 = prompt("Add meg a második számot: ")

// FUNCTIONÖK

function összeadás(x, y) {
    x + y
}

function kivonás(x, y) {
    x - y
}

function szorzás(x, y) {
    x * y
}

function osztás(x, y) {
    x / y
}



if(muvelet == 1) {
    összeadás(num1, num2)
}
if(muvelet == 2) {
    kivonás(num1, num2)
}
if(muvelet == 3) {
    szorzás(num1, num2)
}
if(muvelet == 4) {
    osztás(num1, num2)
}