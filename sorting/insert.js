let array = [ 4,5,6,1,3,2 ];

/**
 * @param { Array< number > } array 
 */
function insertSort( array ) {
  for( let i = 1; i < array.length; ++i ) {
    let numberToBeSort = array[i];

    let j = i - 1;

    for( ; j >=0; --j ) {
      // from last to first

      let sortedNumber = array[j];
      if(numberToBeSort < sortedNumber) {
        array[ j + 1] = sortedNumber;
      } else {
        break;
      }
      
    }
    array[ j + 1] = numberToBeSort;

  }
}

insertSort( array );
console.log( array )