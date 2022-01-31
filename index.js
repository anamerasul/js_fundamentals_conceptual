console.log('hello0000');

var myName ="Tonmoy's";

var  line1 ="hello ! I am "+ myName;
var  line2 ="hello ! I am"+myName +". I wake up early in the morning";

var myFriends =["abc","xyz"];

console.log(line1);

console.log(myName);
console.log(myName.length);

console.log(myName.indexOf('o'));
console.log(myName[4]);
var age =2;
console.log(age);
age ="2";

console.log(age);

age =2.9545;

age =age.toFixed(2);

console.log(age);

age =parseFloat(age);
console.log(age);


age =Math.floor(age);
console.log(age);

age =2.9545;

age = Math.ceil(age);
console.log(age);

var number1= 40;
var number2="85";


console.log(number1+number2);

number2=parseInt(number2);

console.log(number2+number2);

// var isRining =false;

var myFriendsName;
console.log(myFriendsName);
myFriendsName="anam";
console.log(myFriendsName);
myFriendsName =null;
console.log(myFriendsName);


// object

var student1 ={
               firstName: "Tonmoy",
               lastName: "Chowdhuray",
               Id:1603242,
               eyeColor:"black",
               age:50


}
var student2 ={
               firstName: "Tonmoy2",
               lastName: "Chowdhura2",
               Id:16032422,
               eyeColor:"black2",
               age:502,
               hobby:["h1","h2"]


};

var studentsCollection=[student1,student2];
console.log(studentsCollection);

console.log(student1);

var numbers=[1,2,3,4,5,6];
console.log(numbers.length);
console.log(numbers.indexOf(3));

numbers.pop();
console.log(numbers)
numbers.push(9);
console.log(numbers);
numbers[3]=9;
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(56);
console.log(numbers);


// operators

console.log(typeof 70);

console.log(typeof true);

// console.log(typeof typeof 70);


var isRining =false;
var power ="less"

var p = 50;

// conditional
if((isRining==true && power=="high")|| p>40){
               console.log('ber hbo na ajke code korbo');
}

else if(isRining==true && power=="medium"){
               console.log("bristy dekhbo")
}
else if(isRining==true && power=="less" ){
               console.log("vejbo" + 100)
}

else{
               console.log("ber hbo ajke");
}


// var p =50;

var age =16;
var vaccineCount =2;

var isVaccinated =false;

if(age>20&& vaccineCount==2){
               console.log('you may go for abroad')
}

else if (age> 15 && age<20 && vaccineCount==0 ){
console.log("tomorrow is the first date")
}

// console.log('before status',isVaccinated);

else if (age> 15 && age<20 && vaccineCount==2 ){
               isVaccinated=true;
console.log("you are vaccinated");


}

console.log('after ' ,isVaccinated)

// soution 2

var mybudget= 6000;

if(mybudget>=5000){

               var hotelCost =4000;
               var remaining =mybudget-hotelCost;
               if(remaining>2000){
                              console.log("bbq party ")
               }
               else{
                              console.log("alpo shopping korbo")
               }
}

else{
               console.log("ghum dibo")
}




