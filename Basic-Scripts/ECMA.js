/**
 * ECMAScript 101
 */

/**
 * Declaring variables using let and const
 */

// const - not reassignable.
// you can use this for constants
const THIS_SHOULD_NOT_CHANGE = 'THIS_SHOULD_NOT_CHANGE';

// let - same as var, but works only inside the block it is currently in
let CAN_CHANGE = 'CAN_CHANGE';

console.log( '--------------' );
console.log( THIS_SHOULD_NOT_CHANGE );
console.log( CAN_CHANGE );

console.log( '--------------' );
THIS_SHOULD_NOT_CHANGE = 'CHANGED'; // this will trigger an error (comment this out when running in console!)
CAN_CHANGE = 'CHANGED';
console.log( THIS_SHOULD_NOT_CHANGE );
console.log( CAN_CHANGE );

