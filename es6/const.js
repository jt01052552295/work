'use strict'

let  a = 10;
// Here x is 10
{  
  const a = 2;
  // Here x is 2
}
// Here x is 10
console.log('a = ' + a)