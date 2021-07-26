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

let t = new BinaryTree(
  'A',
  new BinaryTree(
    'B',
    new BinaryTree('D'),
    new BinaryTree('E')
  ),
  new BinaryTree(
    'C',
    new BinaryTree('F'),
    new BinaryTree('G')
  )
)

/**
 * 按层遍历
 * @param { BinaryTree } t 
 */
function traverseByLayer(t) {

  let queue = [t];

  while( queue.length > 0 ) {

    let node = queue.shift();

    console.log( node.data );

    if( node.left ) {
      queue.push( node.left );
    }

    if( node.right ) {
      queue.push( node.right );
    }

  }

}

traverseByLayer( t );