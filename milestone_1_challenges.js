//  1. Return the Sum of Two Numbers
let addition = (num1, num2)=>{
    return num1+num2;
}
 const sum = addition (4,5);
console.log (sum)

//Convert Minutes into Seconds

let convert = (minute) =>{
    return minute * 60;
}

let convertedMinutes = convert(4);
console.log(convertedMinutes)

//Perimeter of a Rectangle

let values = (length,width) =>{
    return (length+width)*2;
}

let perimeter = values (10,20);
console.log(perimeter)

//Check Negative

let isNegative = (value) =>{
    if (value<=0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
isNegative(5)
isNegative(-5)

//Can I Drive

function canDrive(name,age){
    if (age<=18){
        console.log( `${name} is not old enough to drive`)
    }
    else{
        console.log(`${name} is old enough to drive`)
    }
}
canDrive("Antony" , 10)
canDrive("Tasha", 30)
