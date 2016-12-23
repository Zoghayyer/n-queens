/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findSolutions = function(n) {
  var result = [];
  var findRooks = function (board, row) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (row === n - 1) {
        if (!board.hasAnyRooksConflicts()) {
          result.push(JSON.parse(JSON.stringify(board.rows())));
        }
      } else {
        findRooks(board, row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  findRooks (new Board({n: n}), 0);
  // if (result.length = 0) {
  //   result = [result];
  // }
  return result;
};
window.findSolutions1 = function(n) {
  var result = [];
  var findRooks = function (board, row) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (row === n - 1) {
        if (!board.hasAnyQueensConflicts()) {
          result.push(JSON.parse(JSON.stringify(board.rows())));
        }
      } else {
        findRooks(board, row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  findRooks (new Board({n: n}), 0);
  // if (result.length = 0) {
  //   result = [result];
  // }
  return result;
};

window.findNRooksSolution = function(n) {
  var solution = findSolutions(n)[0];

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = findSolutions(n).length; //fixme
  

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = findSolutions1(n)[0];

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
  // console.log(findSolutions(n));
  // if (n === 0) {
  //   return new Board({n: n});
  // }
  // var result = findSolutions(n)[0];
  // //console.log('Single solution for ' + n + ' queens:', JSON.stringify(result));
  // return result;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
var solutionCount = findSolutions1(n).length; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
