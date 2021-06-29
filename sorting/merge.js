let array = [ 4,5,6,3,2,1,3,2,7,0 ];

/**
 * @param { Array< number > } array 
 */
function mergeSort( array ) {

  if( array.length > 1 ) {

    let halfIndex = Math.floor( array.length / 2 );

    let a1 = array.slice( 0, halfIndex );
    let a2 = array.slice( halfIndex, array.length );
    mergeSort( a1 );
    mergeSort( a2 );
  
    merge( a1, a2, array );

  }

}

/**
 * @param { Array< number > } a1 
 * @param { Array< number > } a2 
 * @param { Array< number > } array 
 */
function merge( a1, a2, array ) {

  let i1 = 0;
  let i2 = 0;

  for(let i = 0; i < array.length; ++i ) {

    let e1 = a1[ i1 ];
    let e2 = a2[ i2 ];

    if( e1 === undefined ) {

      mergeRest( array, i, a2, i2 );

      break;

    } else if( e2 === undefined ) {

      mergeRest( array, i, a1, i1 );

      break;

    }

    if( e2 < e1 ) {
      array[ i ] = e2;
      ++i2;
    } else {
      array[ i ] = e1;
      ++i1;
    }

  }

}

/**
 * 
 * @param { Array< number > } target 
 * @param { number } startIndex 
 * @param { Array< number > } source
 * @param { number } sourceStartIndex
 */
function mergeRest( target, startIndex, source, sourceStartIndex ) {
  for(; startIndex < target.length; ++startIndex ) {

    target[ startIndex ] = source[sourceStartIndex++]

  }
}

mergeSort( array );

console.log( array )