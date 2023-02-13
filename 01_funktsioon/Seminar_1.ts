let klav = require("readline-sync")
let pindala:number = klav.question("Palun sisesta ristküliku pindala: ")
let korgus:number = klav.question("Palun sisesta ristküliku kõrgus: ")

function laius(a: number, b: number):number {
  return a / b;
}

console.log("Ristküliku laius on:");
console.log(laius(pindala, korgus));