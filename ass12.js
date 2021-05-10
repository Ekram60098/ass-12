//1
const array=[ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const newArray=[];
array.filter(element => {if (element%2==0) newArray.push(element) })
console.log(newArray)
 
//3
const array = [1, -2, 3, 4, 5, 6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, 18, 19, 20];
let sum = 0;
let average = 0;
array.forEach(element => {
  sum += element
  average = sum / array.length
})
console.log(average)

//4
const array = [1, -2, 3, 4, 5, 6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, 18, 60, 20];
console.log("the largest number is "+ Math.max.apply(Math, array)) //why we used the apply? is it because without it we got NaN?? but why


//5
const array = [1, -2, 3, 4, 5, 6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, 18, 60, 20];
array.forEach(number=>{
if (number%2==0){ console.log(number +" is even")}
else {console.log(number+ " is odd")}
})


//6
let num = prompt("Enter a number: ", ' ') || 0;
let sum = 0;
let array = Array.from(num)
array.forEach(element => {
  sum += Math.pow(element, array.length);
})
if (sum == num) {
  console.log("number is a narcissistic number")
} else {
  console.log("it is not a narcissistic number")
}


//7
const arr= [2,5,1,0,2,9]
console.log(arr.include(0))
arr.find((num)=> {
  return num ==0;
}
)
 //didn't understand

//8
function allPositive(array) {
  positive = array.every((element) =>{return element>0});
  return positive
}
console.log(allPositive([2,5,1,0,2,9]))

//9
function spliting(str1, str2) {
  let st1 = str1.split(" ");
  return st1.join(str2)
}
console.log(spliting('I love syria'))
