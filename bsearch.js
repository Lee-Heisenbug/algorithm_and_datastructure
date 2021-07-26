
/**
 * @param { Array< number > } array 
 * @param { number } value 
 */
function bsearch( array, value ) {

  let start = 0;
  let end = array.length - 1;

  while( start <= end ) {
    let mid = Math.floor( ( start + end ) / 2);

    let midValue = array[ mid ];

    if( midValue === value ) {
      return mid;
    } else if( value > midValue ) {

      start = mid + 1;
      end = end;
  
    } else {
      
      start = start;
      end = mid - 1;
    }
  }

  return -1;
}

console.log( bsearch( [ 1,2,3,4,5,6,7,8,9,90 ], 90 ) )
console.log( bsearch( [ 1,2,3,4,5,6,7,8,9,90 ], 1 ) )
console.log( bsearch( [ 1,2,3,4,5,6,7,8,9,90 ], 3 ) )
console.log( bsearch( [ 1,2,3,4,5,6,7,8,9,90 ], 0 ) )
console.log( bsearch( [ 1,2,3,4,5,6,7,8,9,90 ], 6 ) )
console.log( bsearch( [ 1,2,3,4,5,6,7,8,9,90 ], 8 ) )