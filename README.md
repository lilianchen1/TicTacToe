## Tic Tac Toe

Play against the unbeatable computer.

[live link][live]

[live]: http://lilianchen1.github.io/TicTacToe/index.html

### Computer AI

TicTacToeNode object is implemented to store the current state of the board as well as the "children" of the current board.

Children of a board are boards that are one move away.

When it's the computer's turn to make a move:

1. A node object is created and passed in the current state of the game and board.
2. All of the node's children are obtained.
3. Loop through the children to find an appropriate node.
  - first loop checks for any winning child.
  - second loop is run if first loop doesn't return anything. Second loop checks for any non-losing child.
4. Position is obtained from the node.
  - When a node returns true for winning (or not losing), position is obtained from that node.

The methods that check for winning/losing nodes are called recursively. Each child's children are also looked at until the very end (when the board is full or someone wins). This means each move is looked at for how the game can be played out. Thus, the computer will never pick a losing move.


#### Note

If the computer is going to win, it will not necessarily choose the fastest winning route. However, it will still win. This is because a node can be a winning node (thus it will be returned), even if winning won't happen at the very next turn.
