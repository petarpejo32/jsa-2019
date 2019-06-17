// var i=0;
// var b=0;
// while(i<=100){
//     if(i%2==0){
//         b++;
//     }
//     if(i%2==0  && b==3){
//         console.log(i);
//         b=0;
//     }
    
//     i++;
// }
// var n=4;
// function everyNeven(c){
//     var i=0;
//     var b=0;
//     while(i<=100){
//         i++;
//         if(i%2==0){
//             b++;
//         }
//         if(i%2==0 && b==c){
//             console.log(i);
//             b=0;
//         }


//     }
// }
// everyNeven(n);
var func= require('./v2');
func.everyNeven(2);
var r=func.arrSum([248,21,95,239,46]);
console.log(r);
//blabla