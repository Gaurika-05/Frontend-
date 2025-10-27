/*console.log(a);
function sum(b) {
    console.log(a + b);
}
var a = 10;
sum(10);*/

// let age=17;
// if(age>=13&&age<=19){
//     console.log("You are a teenager");
// }
// else{
//     console.log("You are not a teenager");
// }

// console.log(("gaurika" && null)||(0 && "hello")||(undefined||20));

// for(let i=4;i>0;i--){
//      let str="";
//     for(let j=0;j<i;j++){
//         str+="*";
//     }
//     console.log(str);
//     }
    
    //  let arr=[10,20,30,40];
    //  for(let i=0;i<arr.length;i++){
    //     console.log(arr[i]);
    //     }
    //     for(let i of arr){
    //         console.log(i);
    //     }

             //functions//
     console.log(sum(9,8));
      function sum (a,b){
      return a+b 
    }

    const sum=function(a,b){
        return a+b;
    };

    const sumArrow=(a,b)=> {
       return  a+b;
    };

    //create a function calculate
    //take atleast 3 parameters-operation(+,-,*,/)
    //num1,num2
    //there can be even more para
    //based on operation perform the operation on num1 and num2
    //return the result
    //cl(calculator("subtract",1,2,3,4,5));//15

    function calculate(num1,num2,operation,...rest){
    if(operation="add"){
        return num1+num2;
    }
    else if(operation="subtract"){
        return num1-num2;
    }
    else if(operation="multiply"){
        return num1*num2;
    }

    console.log(calculate("add",1,2,3,4,5));
    console.log(calculate("subtract",6,4,3));
    console.log(calculate("multiply",4,5,6));
    }
