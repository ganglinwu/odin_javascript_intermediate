// code for tic tac toe game

const tictactoe = (() => {
    // nodelist of tictactoe boxes
    const _tttBoxNodeList = document.querySelectorAll('.box');

    // span to announce result of game
    const resultSpan = document.querySelector('.result');

    // reset button
    const resetBtn = document.getElementsByTagName('button')[0];
    
    // initialize gameboard
    let _gBoard = new Array(9).fill(null);

    // initialize win condition values
    let _r1 , _r2, _r3, _c1, _c2, _c3, _d1, _d2, _rowColumnDiagonalArr;
    
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

    // add click event listening for each box
    Array.from(_tttBoxNodeList).forEach((box)=> {
        box.addEventListener('click', (e)=> {
            let indexNum = _getBoxIndex(e);
            if (_tttBoxNodeList[indexNum].innerHTML) {
                // if innerHTML is not empty string, it means this box has 
                // already been marked with x or o
                e.preventDefault();
            } else {
                _tttBoxNodeList[indexNum].innerHTML = 'x';
                _player1Move(indexNum);
                _updateValues();
                if (_determine() === 1) {
                    resultSpan.innerText = 'Player wins!';
                } else if (_determine() === -1) {
                    resultSpan.innerText = 'Computer wins!';
                } else if (_determine() === 2) {
                    resultSpan.innerText = 'It\'s a draw!';
                } 
            }
        })
    })

    // add click event listening for reset button
    resetBtn.addEventListener('click', _resetBoard)

    // get index number of box from mouse click event
    const _getBoxIndex = (evt) => {
        return evt.target.id.slice(3);
    }
    
    // private method to initialize an array with 9 slots
    function _resetBoard() {
        _gBoard = new Array(9).fill(null);
        Array.from(_tttBoxNodeList).forEach(box=> box.innerText = '');
        resultSpan.innerText = '';
    }


    // helper function to check sum of values in array
    function _gBoardSum(a,b,c) {
        return _gBoard[a]+_gBoard[b]+_gBoard[c];
    }

    // helper function to update win condition values
    function _updateValues() {
        /* variables that check horizontal win condition*/
        _r1 = _gBoardSum(0,1,2);
        _r2 = _gBoardSum(3,4,5);
        _r3 = _gBoardSum(6,7,8);
    
        /* variables that check vertical win condition*/
        _c1 = _gBoardSum(0,3,6);
        _c2 = _gBoardSum(1,4,7);
        _c3 = _gBoardSum(2,5,8);
    
        /* variables that check diagnonal win condition*/
        _d1 = _gBoardSum(0,4,8);
        _d2 = _gBoardSum(6,4,2);
    
        _rowColumnDiagonalArr = [_r1, _r2, _r3, _c1, _c2, _c3, _d1, _d2];
    }


    // players can make a move
    // i.e. occupy a spot on the tic tac toe board
    // we store this is the _gBoard array
    function _player1Move(i) {
        _gBoard.splice(i,1,_p1.getMark());
    }

    // computer can also make a move
    // but this will be a private function
    const _comMove = (i) => {
        _gBoard.splice(i,1,_com.getMark());
    }

    // determine winner
    function _determine() {
        if (_rowColumnDiagonalArr.includes(3)) {
            return 1; // player win
        } else if (_rowColumnDiagonalArr.includes(-3)) {
            return -1; // computer win 
        } else if (_gBoard.some(element => element===null)) {
            return 0; // there are still empty boxes, game has not ended
        } else {
            return 2; // game ended, no more boxes to click
        }    
    }

    // start game
    const start = () => {
        _resetBoard();
        _updateValues();
    }

    // return public methods or variables
    return {start}

})();

window.addEventListener('DOMContentLoaded', tictactoe.start);
