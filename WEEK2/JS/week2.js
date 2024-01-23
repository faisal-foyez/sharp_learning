//................... js data types.......................

// premitive data type

// nn ss bb u
let a=null;                      //null
let b=111;                       //number
let c= "aman"                    //string
let d='aman'                     //string
let e= `aman`                    //string
let f=Symbol('i am a good');    //symbol
let g=true;                      //bolean
let h=BigInt(123);                //bigInt
let i= undefined;                 //undefined
//null meanes no value
//undefined means we dont give any value

//non-premitive data type

//object
let aman ={
    name:'aman',
    age:20,
};
//key pair value

//......typeOf.....
//type dekhar jnno
console.log(typeof a);

//..........js function............

function addNumber(a,b){
    return a+b
}
let result =addNumber(5,6)
console.log(result);

//...........js string...........

//declaring
let name= "aman"                    
let name2='aman'                     
let name3= `aman`                    

//lenth
let name1= "aman"  
console.log(name1.length);

//index wise character dekhar jnno
console.log(name1[0]);

//Template literals  
let boy1='aman';
let boy2='jaman';
let friendship=`${boy1} is a friend of ${boy2}`;
console.log(friendship);
//this process is called string interpolation

//Escape sequence character
let name4='Aman\'Khan'
console.log(name4);
let name5='Aman\n Khan'
console.log(name5);
let name6='Aman\t khan'
console.log(name6)

// uppercase
 let name7='aman';
let result1=name7.toUpperCase()
console.log(result1);
//lowercase
let name8='aman';
let result2=name7.toLowerCase();
console.log(result2);
//slice
let name9='aman';
let result3=name9.slice(1,3);
console.log(result3)
//replace
let name10='aman';
let result4=name9.replace('a','ar');
console.log(result4)
//concat
let friend1='aman';
let friend2='jaman';
let friendShip= friend1.concat('is a friend of',friend2);
console.log(friendShip)
//trim
let name11='           aman        ';
let result5=name11.trim();
console.log(result5);

//.............js array................

//declaring
let num =[1,2,3,4,5,6,7,8,9,10];

//array methods........

//toString
let result6=num.toString();
console.log(result6);
// join
let result7=num.join(_);
console.log(result7);
//push
let result8= num.push(11);
console.log(result8);
// pop
let result9=num.pop();
console.log(result9);
//shift
let result10=num.shift();
console.log(result10);
//unshift
let result11=num.unshift(0);
console.log(result11);
//concat
let num2=[11,12];
let result12=num.concat(num2);
console.log(result12)
//sort
let num3=[1,2,3,4,5,6,7,8,9,10,11,21,20,31,30,55,33,123,567];
let result13=num3.sore()
console.log(result13);
// ascending order using sort
let compare1=(a,b)=>{
    return a-b
}
 let result14=num3.sort(compare1);
 console.log(result14);
 //descending order using sort
 let compare2=(a,b)=>{
    return b-a
}
 let result15=num3.sort(compare2);
 console.log(result15);
//reverse
let result16=num.reverse();
console.log(result16);
//splice
let num4=[11,12,13,14,15,16,17,18,19,20];
let result17=num4.splice(3,7,21,22,23);
console.log(result17)
//slice
let result18=num4.slice(2,5);
console.log(result18);


