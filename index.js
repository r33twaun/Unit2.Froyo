//create a Prompt with comma-seperated froyo flavors.
const input=prompt('What is your favorite froyo flavor?');
const inputArray=input.split(`,`)
console.log(inputArray)


//create a for loop to iterate the array of flavors
for(let i=0; i<inputArray.length; i++){
    console.log(inputArray[i])
    /*alert (`You have ordered ${inputArray[i]}`)*/
}



//create an object that records the amount the user ordered for each flavor
const flavBucks={
    Vanilla: 3,
    Coffee: 2,
    Strawberry: 1,
}

console.log(flavBucks)
//create a if that tells each customer their order

