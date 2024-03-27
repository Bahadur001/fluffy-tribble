let nom1 = +prompt("Bir eded girin:");
if (isNaN(nom1)) {
    console.log("Girilen  bir eded deyil.");
} 
else{
    state = false 
    for(let i=0;i<nom1;i++){
        if (nom1 % i == 0 && i != 1 && i != nom1){
            console.log('bu eded murekkeb ededdi')  
            state = true
        }
    }
    if(state == false){
        console.log('bu eded sadedi')
    }
}







  let girileneded = +prompt("Bir eded girin:");
  let cemi = 0;
 
  for (let i = 1; i < girileneded; i++) {
      if (girileneded % i === 0) {
          cemi += i;
      }
 }
 
 if (cemi === girileneded) {
     console.log(girileneded + " mükəmməldir.");
 } else {
     console.log(girileneded + " mükəmməl deyil.");
  }



 



let start = parseInt(prompt("birinci:"));
let end = parseInt(prompt("ikinci:"));

console.log(start + " ile " + end + " arasındaki mükemmel ededler:");

for (let number = start; number <= end; number++) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (sum === number && sum !== 0) {
        console.log(number);
    }
}


let c = parseInt(prompt("Birinci:"));
let d = parseInt(prompt("ikinci:"));

console.log(c + " ile " + d + " sade ededler:");

for (let number = start; number <= end; number++) {
    let isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(number);
    }
}

let m = parseInt(prompt("Birinci:"));
let n = parseInt(prompt("ikinci:"));

console.log(start + " ile " + end + " sonu 7 ile bitenler:");

for (let number = start; number <= end; number++) {
    if (number % 10 === 7) {
        console.log(number);
    }
}




