// Iteration 1: Names and Input
console.log(`Iteration 1`)
let hacker1='Tzu Yu'
console.log(`The driver's name is ${hacker1}`)
let hacker2='Bena'
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
console.log(`Iteration 2`)
if(hacker1.length> hacker2.length){
console.log(`The driver has longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length< hacker2.length){
console.log(`The navigator has longest name, it has ${hacker2.length} characters`)
} else if(hacker1.length===hacker2.length){

console.log(`Wow you both have equally long names, it has ${hacker2.length} characters`)

}
console.log(`Iteration 3`)
// Iteration 3: Loops

let driverCapital=hacker1.toUpperCase()
let hackLetter=''
for(let i=0; i<driverCapital.length;i++){
    hackLetter+=driverCapital[i]+' '

}
console.log(hackLetter)

let hackReverse=''

for(let i=hacker1.length-1; i>=0;i--){

    hackReverse+=hacker1[i]

}
console.log(hackReverse)

let hacker1Lower=hacker1.toLowerCase()
let hacker2Lower=hacker2.toLowerCase()
for (let i=0;i <hacker1.length;i++){
    if(hacker1Lower==hacker2Lower){
        console.log(`What?! You both have the same name?` )
    }

    else if(hacker1Lower[i]<hacker2Lower[i]){
        console.log(`The driver's name goes first.` )
        break;
      
    }else if(hacker1Lower[i]>hacker2Lower[i]){
        console.log(`Yo, the navigator goes first definitely.` )
        break;
    }
}

console.log(`Bonus`)

let textCopy="et typro"

let testSum=0
for(i=0;i<textCopy.length;i++){
    testSum= textCopy.split(' ').length

}
console.log(testSum)

let etSum=0
for(i=0;i<textCopy.length;i++){
   if(textCopy.includes("et")){
    etSum+=1

   }
 

}
console.log(etSum)



