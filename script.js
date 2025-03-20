// this all are the variable deceleration method
// let a = 10;
// let name = "prabin";
//  let ispass = true;
//  let obj = {
//     name:"prabin",
//     rollno:12,
//     ispass:true
//  };

// for typecasting the in java script we simply use parseInt() for integer and parsefloat() for float and parseboolean() for boolean 
// example
// let a = prompt("Enter a number");
// let b = prompt("Enter a number");
// let c = a+b;
// console.log(c);//this gives the concatination of a and b because it takes as a string.

// so in this case we use parseInt() to convert the string to numebr and we simply add the numbers.
// let sum = parseInt(a)+parseInt(b);
// console.log("Sum is "+sum);

// operators in javascript

// arithmetic operators
// let A = 10;
// let B = 20;
// let Sum = a+b;
// let sub = a-b;
// let mul = a*b;
// let div = a/b;
// console.log("Sum is "+Sum);

// logical operators
// let a = true;
// let b = false;
// console.log(a&&b);//false
// console.log(a||b);//true

// ternary operators
// let a = 10;
// let b = 30;
// let c = a>b?"a is greater":"b is greater";
// console.log(c);

// for typeof operator
// let a = 0;
// let name = 'Prabin';
// let follow = true;
// let char = "a";
// let c = typeof(a);
// console.log(c);
// console.log(typeof(name));
// console.log(typeof(follow));
// console.log(typeof(char));

// String operators
// let name ="Prabin";
// let lname= "Thapa";
// let fullname = name + lname;
// console.log("Full name is "+fullname);

// String methods
// let name ="Prabin";
// let uppercase= name.toUpperCase();
// let lowercase = name.toLowerCase();
// let len = name.length;
// console.log(uppercase);
// console.log(lowercase);
// console.log("Lenght is "+len);

// now reversing the string without using method
// let name ="Prabin";
// let rev = "";
// for(let i = name.length-1;i>=0;i--)
// {
//     rev = rev+name[i];
// }
// console.log(rev);


// looping statements

// for loop
// let name = "Prabin";
// for(let i=0;i<10;i++)
// {
//     console.log(name);
// }

// while loop
// the best example of while loop is when we are performing reverse operation

// let num = 123;
// let rev = 0;
// let rem;
// now 
// while(num!=0)
// {
//     rem = num%10;
//     rev = rem +(rev*10);
//     num = parseInt(num/10);
// }
// console.log("The reverse is "+rev);

// now for do while loop.
//we can simply take an example of a Atm machine.
// let userpass = "12345";
// let enteredpass="";
// do
// {
// enteredpass = prompt("Enter your password");
// }while(userpass!=enteredpass);

// console.log("Your password is correct and now ready for different operation");



//conditional statements

//  use of switch case and break statement.
// let day = 3;
// switch(day)
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// now example of continue statement
// let num = 10;
// for(let i = 0; i<=num;i++)
// {
//     if(i==5)
//     {
//         continue;
//     }
//     console.log(i);
// }

// if else statemrnt

// let a = 20;
// let b = 10;
// if(a >b)
// {
//     console.log("A is greater");
// }
// else {
//     console.log("B is greater");
// }

// else if ladder

// let a = 10;
// let b = 20;
// let c = 30;
// if(a>b && a>c)
// {
//     console.log("A is greater");
// }
// else if(b>a && b>c)
// {
//     console.log("B is greater");
// }
// else{
//     console.log("C is greater");
// }

// nested if else statemtnt;
// let a = 10;
// let b = 20;
// let c = 30;
// if( a>b && a>c)
// {
//     if(b>c)
//     {
//         console.log("B is max");
//     }
//     else
//     {
//         console.log("C is max");
//     }
// }
// else if(b>a && b>c)
// {
//     if(a>c)
//     {
//         console.log("A is max");
//     }
//     else
//     {
//         console.log("C is max");
//     }
// }
// else
// {
//     if(a>b)
//     {
//         console.log("A is max");
//     }
//     else
//     {
//         console.log("B is max");
//     }
// }


/// javascript function..
// let num1 = 10;
// let num2 = 20;
// console.log("Sum is "+addtwonumber(num1,num2));

// function addtwonumber(num1,num2)
// {
//     let sum = num1+num2;
//     return sum;
// }

// // factorial using function
// let num=5;

// console.log("factorial is "+factorial(num));
// function factorial(num)
// {
//     let fact = 1;
//     for(let i=1;i<=num;i++)
//     {
//         fact = fact*i;
//     }
//     return fact;
// }


// factorial using recursion...
// let num = 5;

// console.log("The factorial is "+factorial(num));
// function factorial(num)
// {
//     if(num==0)
//     {
//         return 1;
//     }
//     else if(num==1)
//     {
//         return 1;
//     }
//     else 
//     {
//         return num*factorial(num-1);
//     }
// }

// now fibonacci series using recursion...

// let num = 10;


// for(let i=0;i<num;i++)
// {
//     console.log(" "+fibonacci(i));
// }
// function fibonacci(num)
// {
//     if(num==0)
//     {
//         return 0;
//     }
//     else if(num == 1)
//     {
//         return 1;
//     }
//     else
//     {
//     return fibonacci(num-1)+fibonacci(num-2);
//     }
//     }

// gloabal variable and local variable


// const num =5; // global variable
// console.log("The factorial is "+factorial());
// function factorial()
// {
//     let fact = 1; // local variable
//     for(let i=1;i<=num;i++)
//     {
//         fact = fact*i;
//     }
//     return fact;
// }


// now the array in javascript..

//decleration of array..
// let arr = new Array(5);
// for(let i=0;i<arr.length;i++)
// {
//     arr[i]= parseInt(prompt(i));
// }
// console.log(arr);


//performming the array elements addition

// let arr=[1,2,3,4,5,6];

// let sum = 0;
// for(let i=0;i<arr.length;i++)
// {
//     sum = sum+arr[i];
// }
// console.log("The sum is "+sum);