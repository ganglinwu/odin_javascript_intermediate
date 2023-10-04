// code for tic tac toe game

const tictactoe = (() => {
    // initialize gameboard
    let _gBoard;
    
    // private method to initialize an array with 9 slots
    const _resetBoard = () => {
        _gBoard = new Array(9).fill(null);
        // clear DOM 
    }

    
    // private method to create Player objects
    const _Player = (name, mark) => {
        const getName = () => name;
        const getMark = () => mark;
        return {getName, getMark}
    }

    // initialize player 1 and computer
    // player 1's mark will have a value of 1
    // computer's mark will have a value of -1
    // this will facilitate determining win condition
    const _p1 = _Player('Player', 1);
    const _com = _Player('Computer', -1);


    // helper function to check sum of values in array
    const _gBoardSum = (a,b,c) => _gBoard[a]+_gBoard[b]+_gBoard[c];

    /* variables that check horizontal win condition*/
    let _r1 = _gBoardSum(0,1,2);
    let _r2 = _gBoardSum(3,4,5);
    let _r3 = _gBoardSum(6,7,8);

    /* variables that check vertical win condition*/
    let _c1 = _gBoardSum(0,3,6);
    let _c2 = _gBoardSum(1,4,7);
    let _c3 = _gBoardSum(2,5,8);

    /* variables that check diagnonal win condition*/
    let _d1 = _gBoardSum(0,4,8);
    let _d2 = _gBoardSum(6,4,2);

    let _rowColumnDiagonalArr = [_r1, _r2, _r3, _c1, _c2, _c3, _d1, _d2];

    // players can make a move
    // i.e. occupy a spot on the tic tac toe board
    // we store this is the _gBoard array
    const player1Move = (i) => {
        _gBoard.splice(i,1,_p1.getMark);
    }

    // computer can also make a move
    // but this will be a private function
    const _comMove = (i) => {
        _gBoard.splice(i,1,_com.getMark);
    }

    // determine winner
    const determine = () => {
        if (_rowColumnDiagonalArr.includes(3)) {
            return _p1.getName;
        } else if (_rowColumnDiagonalArr.includes(-3)) {
            return _com.getName;
        } else if (!_rowColumnDiagonalArr.includes(null)) {
            return 'draw';
        }
    }

    // start game
    const start = () => {
        _resetBoard();

    }

    // return public methods or variables
    return {player1Move, determine, start}

})();

tictactoe.start();