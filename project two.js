alert('Hello. Welcome to my web page.😎 ✌️');
let usersAge = prompt('How old are you ?');
// if(usersAge % 2 === 0){
//     alert('Your age is Even');
// } 
// else if(usersAge % 2 === 1){
//     alert('Your age is Odd');
// }
// else{
//     alert('Your age is niether Even nor Odd');  
// }
// if (usersAge % 3 ===0 && usersAge % 5 ===0 ){
//     alert('FizzBuzz');
// }
// else if (usersAge % 3 === 0){
//     alert('Fizz');
// }
// else if(usersAge % 5===0){
//     alert('Buzz');
// }
 
// else{
//     alert('Your age is not divisable by 3 and 5');
// }
if (usersAge< 0){
    alert('🙅Please put the correct age🙅');
}
else if (usersAge < 5){
    alert('You are a baby👶');
}
else if (usersAge< 13){
    alert('You are a child🧒');
}
else if (usersAge< 20){
    alert('You are a teenager😎');
}
else if (usersAge > 20){
    alert('You are an Adult👨🧓 👩👵');
}
else{
    alert('🙅please put the correct age🙅');
}




