let rectanglelength =4
let rectanglewidth =4

area = (rectanglelength*rectanglewidth)
console.log(area);
/////////////

celsius1 =41
Fahrenheit1 = Math.floor((celsius1 * 1.8) + 32)
Fahrenheit2=105
celsius2=Math.floor((Fahrenheit2 -32) / 1.8)
console.log(`${Fahrenheit1}°F ${celsius2}°C`);

//////////////////

let Numbers = [23,54,32,87,47]
let sum = 0;

for (let i = 0; i < Numbers.length; i++) {
    sum += Numbers[i];
}
console.log(sum);

///////////////

let array = [16,4,2,0,19,6]
max=Math.max(...array)
console.log(max);

let largest = 0;

for( var i = 0; i < array.length; i++){
    if(largest < array[i])
      { largest = array[i];
     }} 
     console.log(largest);

///////////
 let reverse = [1,2,3,4,5,6,7,8,9,10] 
 console.log(reverse.reverse() );   
/////////
let Num  = 6;
let star = "";
for (let i=1;i<=Num;i++) {
  for (let j=0;j<i;j++) {
    star=star + "*"
  }star += "\n"
}console.log(star)




