// let arr = ['Usman', 'John', 'Micheal'];

// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// let arr = [1,7,3,11,9];

// function aa(arr){
//     let name = [];
//     for (let i = 0; i < arr.length;i++){
        
//         if (arr[i] % 2 == 1){
//             name.push(arr[i]);

//         }
//     }
//     return name;
//     }
// let b = aa([1,7,3,11,9,2,4,6,8]);
// console.log(b);


// function aa (num){
// let name = [];
// for (let i = 0; i < num.length; i++){
//     if (num[i] % 2 ==1){
        
//         name.push(num[i]);
//     }
// }
// return name
// }

// let b = aa([7,1,3,9,10,66,43,77]);
// console.log(b);

// function object (obj:any = {}){
//     obj = {
//         firstName:"Hamza",
//         secondName: "Saeed",
//         subject: ["Science", "Accounting", "Supply chain mng"],
//         university: true

//     }
//     return obj
// }
// let x = object().subject[0];
// console.log(x);


// let obj = {
//     firstName:"Hamza",
//     secondName: "Saeed",
//     subject: ["Science", "Accounting", "Supply chain mng"],
//     university: true

// }
// let x = (obj.subject[1])
// console.log(x);

// let obj = {
//     firstName:"Hamza",
//     secondName: "Saeed",
//     subject: ["Science", "Accounting", "Supply chain mng"],
//     university: true

// }
// console.log(obj.subject[2]);

// let ar = ["hamza", 2, true, "baby" , "hah"];

// console.log(ar.length);


// let car = "civic";

// console.log(car === "honda" ? "Its true" : " Its not true" );


// let arr = [1,2,3,4,5]
// for (let i = 0; i < arr.length; i++){
//   if (4 == arr[i]){
//     console.log("Item has in the array");
//   } else {
//     console.log("It has not in the array");
//   }
// }

/**
 32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username. 
If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

 */

// let current_users = ["Hamza", "Saeed","Umer", "Ali", "Ayaz"];
// let new_users = ["HAMZA", "SAEED", "John", "Starc", "Honney"];

// function convertToTitleCase(inputString) {
//     let a = inputString.t;
//     return a
//    }
//    let inpuStr = convertToTitleCase("hello world");
//    console.log(inpuStr)


// let a = "Hamza Saeed";

// let c = a.replace("h","H");
// let d = a.replace("w","W");
// let e = c.concat(d);
// // console.log(e)
// let f = e.substring(0,6);
// let g = e.substring(17,23)
// let h = f.concat(g)
// // console.log(f);
// // console.log(g);
// console.log(h);

// let pound = [50,20,10,5,2,1];
// let value = 1087;
// for (let i = 0; i < pound.length;i++){
//   let val = Math.floor(value/pound[i]);
//   value -= val * pound[i];
//   console.log("£ "+pound[i]+" notes in " + val )
// };


// function bank (value){
//     value()
//     }
    
//     function notes (pound){
//     pound = [50,20,10,5,2,1];
//     return pound
//     }
    
//     function forLoop(lop){
//     let poundNotes = lop();
//     for (let i = 0; i < poundNotes.length; i++){
//       console.log(poundNotes[i])
//       //  return (poundNotes[i]);
//     }
//     }
  
//      function calculation (takeVal){
//           takeVal()
  
//      }
//      bank(notes);
//     forLoop(notes);
//     calculation(forLoop);
// str.split('').filter(x => 'aeiouAEIOU'.includes(x)).length;


// function countVowels(str:any) {
//     let a = str();
//    //  console.log(a);
   
//     let b = a.split("");
//     // console.log(b);
//     for (let i = 0; i < b.length;i++){
// //    console.log(b[i])
//    let c = b[i].filter( (e:any) => 'aeiouAEIOU'.includes(e)).length;
//    console.log(c)
//     }
//    }
   
//    function word (){
//     let words = "Celebration"
//    return (words) 
//    }
//    countVowels(word);
  
