class BinaryTree {
  /**
   * @param { any } data 
   * @param { BinaryTree } left 
   * @param { BinaryTree } right 
   */
  constructor( data, left, right ) {

    this.data = data;
    this.left = left;
    this.right = right;

  }
}

let tree = new BinaryTree();

/**
 * @param { BinaryTree } tree 
 * @param { number } data 
 */
function binaryInsert( tree, data ) {
  if( tree.data === undefined ) {
    tree.data = data;
  } else {

    if( data < tree.data ) {

      if( tree.left ) {
        binaryInsert( tree.left, data )
      } else {
        tree.left = new BinaryTree( data );
      }

    }

    if( data > tree.data ) {

      if( tree.right ) {
        binaryInsert( tree.right, data );
      } else {
        tree.right = new BinaryTree( data );
      }

    }

  }
}

binaryInsert( tree, 5 );
binaryInsert( tree, 4 );
binaryInsert( tree, 6 );
binaryInsert( tree, 3 );

console.log( tree )

console.log( binarySearch(tree, 6) );
console.log( binarySearch(tree, 3) );
console.log( binarySearch(tree, 0) );
console.log( binarySearch(tree, 9) );

/**
 * @param { BinaryTree } tree 
 * @param { number } data 
 */
function binarySearch( tree, data ) {

  if( tree.data === data ) {
    return tree;
  } else if( data < tree.data ) {

    if( tree.left ) {
      return binarySearch( tree.left, data );
    }
    
  } else if( data > tree.data ) {

    if( tree.right ) {
      return binarySearch( tree.right, data );
    }
  }

  return null
  
}