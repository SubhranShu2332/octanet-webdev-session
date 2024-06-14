// int n;
// n=5
// m="abc"

// let
// var
// const


// {
//     let a=10
// }
// document.write(a)

// {
//     var a=10
// }

// const a=10
// a=20


// Array

// arr=[1,2,3,4]
// console.log(arr);

// arr2=[1,"Hello",true]
// console.log(arr2)

// let n;
// console.log(n);

// let age=prompt("Please enter ur Age")

// if(age>18)
//     {
//         // console.log("Eligible to vote")
//         if(confirm("Are You Really 18 year above"))
//             {
//                 alert("Eligible to vote")
//             }
//         else{
//             alert("Not Eligible to vote")
//         }
        
//     }
// else{
//     // console.log("Not Eligible to vote");
//     alert("Not Eligible to vote")
// }


// arr=[1,2,3,4,5]

// sum=0
// for(i=0;i<5;i++)
//     {
//         sum+=arr[i]
//     }

// console.log(sum);

// function add(x,y,z)
// {
//     return x+y+z
// } 

// console.log(add(1,23,3));

// const addition=function (x,y,z)
// {
//     return x+y+z
// }

// console.log(addition(2,3,4));

// const multiply=(x,y)=>
//     {
//         console.log(x*y)
//     }
// multiply(3,4)

// const multiply=(x,y)=>x*y

// console.log(multiply(4,5));

// let s1={"roll":1,name:"Harry",college:"IIIT"}
// console.log(s1);
// console.log(s1.roll);
// console.log(s1["roll"]);
// s1.college="IIT"
// console.log(s1);

// printf("%d is a prime number",5)
// const n=5
// const message=n+" is a prime number"
// console.log(message);

// const person = { name: 'Bob', age: 25 };

// const {name,age}=person
// name=person.name
// age=person.age

// console.log(name,age);

// const colors = ['red', 'green', 'blue'];
// const [f,second,third]=colors
// console.log(f,second,third);






// map(function)
// {
//     arr=[1,3,5]
//     for num in arr
//     {
//         function
//     }
// }
// num=[1,2,3,4,5,6]
// const double = num.map((num)=>num*2)
// console.log(double);

// const square=num.map((num)=>num*num)
// console.log(square);

// const even=num.filter((num)=>num%2===0)
// console.log(even);

// const sum=num.reduce((acc,num)=>acc+num,0)
// console.log(sum);

// const factorial=num.reduce((acc,num)=>acc*num,1)
// console.log(factorial);
// sum=0
// num.forEach((num)=>
// {
//     console.log(num)
//     sum+=num
// });
// console.log(sum);


// let div=document.getElementsByTagName("div")
// console.log(div);

// console.log(document.getElementById("one").classList.remove("info"));

function validate(e)
{
    let error=false
    let username=document.getElementById('username')
    let password=document.getElementById('password')
    console.log(username.value);
    console.log(username.value.length);
    if(username.value.length==0)
        {
            alert("The user name can not be empty")
            error=true
        }
    else if(username.value.length<=3)
        {
            alert("The user name can not be less than 3 characters")
            error=true
        }
    else if(password.value.length<6)
        {
            alert("The Password should be 6 character long")
            error=true
        }
    if(error==true)
        {
            e.preventDefault()
        }

}






