let string = "";
let buttons = document.querySelectorAll('.btn');
let arr = Array.from(buttons);

// function Banary(n){
//     let ans  = 0;
//     let i = 0;
//     while(n != 0 ) {

//         let bit  = n & 1;
//       console.log(bit)

//         ans = (bit * Math.pow(10, i) ) + ans;

//         n = n >> 1;
//         i++;

//     }

//     return ans;
// }

// function decimalToHexString(number)
// {
//   if (number < 0)
//   {
//     number = 0xFFFFFFFF + number + 1;
//   }

//   return number.toString(16).toUpperCase();
// }

function Banary(decimalNumber){
    var octalNumber = decimalNumber.toString(2);
    return octalNumber;
}
function Hexa(decimalNumber){
    var octalNumber = decimalNumber.toString(16);
    return octalNumber;
}
function Octal(decimalNumber){
    var octalNumber = decimalNumber.toString(8);
    return octalNumber;
}
arr.forEach((button)=>{
    button.addEventListener('click', (a)=>{
        console.log(typeof(a.target.innerHTML))
        if(a.target.innerHTML == 'Banary'){
            string = Banary(parseInt(string));
            document.querySelector('input').value = string;
        }
        else if(a.target.innerHTML == 'Hexa'){
            string = Hexa(parseInt(string));
            document.querySelector('input').value = string;
        }
        else if(a.target.innerHTML == 'Octal'){
            string = Octal(parseInt(string));
            document.querySelector('input').value = string;
        }
        else if(a.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(a.target.innerHTML == 'C'){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else{
            string = string + a.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})