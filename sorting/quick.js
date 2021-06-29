let array = [ 4,5,6,3,2,1,3,2,7,0 ];

/**
 * @param { Array< number > } array 
 */
function quickSort( array ) {

  doQuickSort(array, 0, array.length - 1);

}

/**
 * @param { Array< number > } array 
 * @param { number } start 
 * @param { number } end 
 */
function doQuickSort( array, start, end ) {

  if( end > start ) {
    
    let pivot = partition(array, start, end );

    doQuickSort( array, start, pivot - 1 );
    doQuickSort( array, pivot + 1, end );

  }


}

/**
 * @param { Array< number > } array 
 * @param { number } start 
 * @param { number } end 
 */
function partition(array, start, end) {

  let pivotValue = array[end];
  let pivot = start;
  /**@type { number } */
  let temp;

  for( let i = start; i < end; ++i ) {

    if( array[i] <= pivotValue ) {

      temp = array[ pivot ];

      array[ pivot ] = array[ i ];

      array[i] = temp;

      ++pivot;

    }

  }

  temp = array[ pivot ];

  array[pivot] = pivotValue;

  array[ end ] = temp;

  return pivot;

}

quickSort( array );

console.log( array )