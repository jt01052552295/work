'use strict'

let x = 2;       // Allowed

{
  let x = 4;   // Allowed
}

console.log('x = ' + x)