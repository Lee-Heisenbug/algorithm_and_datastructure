let array = [ 4,5,6,3,2,1 ];

/**
 * @param { Array< number > } array 
 */
function bubbleSort( array ) {

  for( let i = 0; i < array.length; ++i ) {
    let compareTime = array.length - i - 1;
    let swapped = false;
    for( let j = 0; j < compareTime; ++j ) {

      let currentNum = array[ j ];
      let nextNum = array[ j + 1];

      if( currentNum > nextNum ) {
        swap( array, j, j+1);
        swapped = true;
      }
    }

    if( !swapped ) {
      break;
    }
  }

}

function swap( array, aIndex, bIndex ) {

  let temp = array[ aIndex ];
  array[ aIndex ] = array[ bIndex ];
  array[ bIndex ] = temp;

}

bubbleSort( array );

console.log( array )