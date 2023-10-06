// code for tic tac toe game
// we use values to calculate win conditions and to implement minimax
// player will have a value of 1 assigned to each box he occupies
// whilst com will have a value of -1
// we can check for 3 or -3 to detect if a win has been achieved


const tictactoe = (() => {
    // nodelist of tictactoe boxes
    const _tttBoxNodeList = document.querySelectorAll('.box');

    // is game over? boolean
    let _gameOver = false;

    // player move count and computer move count
    // helps to determine whose turn is next
    let _playerMoveCount = 0;
    let _comMoveCount = 0;


    // span to announce result of game
    const _resultSpan = document.querySelector('.result');

    // reset button
    const _resetBtn = document.getElementById('resetBtn');
    
    // initialize gameboard array to determine win condition and game status
    let _gBoardValue = new Array(9).fill(null);

    // initialize win condition values
    let _r1 , _r2, _r3, _c1, _c2, _c3, _d1, _d2, _rowColumnDiagonalArr;
    
    // private method to create Player objects
    const _Player = (name, mark) => {
        const getName = () => name;
        const getMark = () => mark;
        return {getName, getMark}
    }
    
    // initialize player 1 and computer Objects
    // player 1's mark will have a value of 1
    // computer's mark will have a value of -1
    // this will facilitate determining win condition
    const _p1 = _Player('Player', 1);
    const _com = _Player('Computer', -1);

    // add click event listening for each box
    Array.from(_tttBoxNodeList).forEach((box)=> {
        box.addEventListener('click', (e)=> {
            let indexNum = _getBoxIndex(e);
            if (_tttBoxNodeList[indexNum].innerText) {
                // if innerText is not empty string, it means this box has 
                // already been marked with x or o
                
                e.preventDefault();
            } else {
                if (_gameOver === false) {
                    // if game is not over and it's player's turn

                    _player1Move(indexNum);
                    // mark player1's move on html page
                    // log player1's value into gBoardValues Array

                    _updateValues();
                    // update all Values, row sum, column sum, diagonal sum
                    // and check if win draw or continue
                    // (since losing requires com to make a move we need not check for loss)
                    
                    if (_determine() === 1) {
                        _resultSpan.innerText = `${_p1.getName()} wins!`;
                        _gameOver = true;
                    } else if (_determine() === 2) {
                        _resultSpan.innerText = 'It\'s a draw!';
                        _gameOver= true;
                    }
                    while (_gameOver === false) { 

                    // it's the computer's turn to malke a move
                    // we assign a random index number 
                    // check if the box with that index is already occupied
                    let _comChoiceIndexNum = _getRandomInt();
                    while (_tttBoxNodeList[_comChoiceIndexNum].innerText) {
                        _comChoiceIndexNum = _getRandomInt();
                    }

                    _comMove(_comChoiceIndexNum);
                    // mark computer's move on html page
                    // log computer's value into gBoardValues Array

                    _updateValues();
                    // update row, column diagonal sum
                    // check if computer win
                    // (we need not check for player win or draw!)

                    if (_determine() === -1) {
                    _resultSpan.innerText = 'Computer wins!';
                    _gameOver = true;
                    }
                    }
                    } else {
                    // else the _gameOver value is true
                    // no marking of boxes allowed

                    e.preventDefault();
                }
            }
        })
    })

    // add click event listening for reset button
    _resetBtn.addEventListener('click', _resetGame)

    // get index number of box from mouse click event
    function _getBoxIndex(evt) {
        return evt.target.id.slice(3);
        // id of boxes are sequentially named
        // box0, box1, box2...
        // by slicing id string from index 3 we get the box's index no.
    }
    
    // reset game
    function _resetGame() {
        _gBoardValue = new Array(9).fill(null);
        Array.from(_tttBoxNodeList).forEach(box=> box.innerText = '');
        _resultSpan.innerText = '';
        _gameOver = false;
        _playerMoveCount = 0;
        _comMoveCount = 0;
    }


    // helper function to check sum of values in array
    function _gBoardValueSum(a,b,c) {
        return _gBoardValue[a]+_gBoardValue[b]+_gBoardValue[c];
    }

    // helper function to update win condition values
    function _updateValues() {
        /* variables that check horizontal win condition*/
        _r1 = _gBoardValueSum(0,1,2);
        _r2 = _gBoardValueSum(3,4,5);
        _r3 = _gBoardValueSum(6,7,8);
    
        /* variables that check vertical win condition*/
        _c1 = _gBoardValueSum(0,3,6);
        _c2 = _gBoardValueSum(1,4,7);
        _c3 = _gBoardValueSum(2,5,8);
    
        /* variables that check diagnonal win condition*/
        _d1 = _gBoardValueSum(0,4,8);
        _d2 = _gBoardValueSum(6,4,2);
    
        _rowColumnDiagonalArr = [_r1, _r2, _r3, _c1, _c2, _c3, _d1, _d2];
    }


    // players can make a move
    // i.e. occupy a spot on the tic tac toe board
    // we store this in the _gBoardValue array
    // then we mark the spot with an x on the html page
    function _player1Move(indexNum) {
        _gBoardValue.splice(indexNum,1,_p1.getMark());
        _tttBoxNodeList[indexNum].innerHTML = 'x';
        _playerMoveCount++;
    }

    // computer can also make a move
    // but this will be a private function
    function _comMove(indexNum) {
        _gBoardValue.splice(indexNum,1,_com.getMark());
        _tttBoxNodeList[indexNum].innerHTML = 'o';
        _comMoveCount++;
    }

    // determine winner
    function _determine() {
        if (_rowColumnDiagonalArr.includes(3)) {
            return 1; // player win
        } else if (_rowColumnDiagonalArr.includes(-3)) {
            return -1; // computer win 
        } else if (_gBoardValue.some(element => element===null)) {
            return 0; // there are still empty boxes, game has not ended
        } else {
            return 2; // game ended, no more boxes to click
        }    
    }

    // helper function for random int from 0 to 8
    function _getRandomInt() {
        return Math.floor(Math.random()*9);
    }

    // start game
    const start = () => {
        _resetGame();
        _updateValues();
    }

    // return public methods or variables
    return {start}

})();

window.addEventListener('DOMContentLoaded', tictactoe.start);
