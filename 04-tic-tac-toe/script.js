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
    let _rowColumnDiagonalScores;
    
    // private method to create Player objects
    const _Player = (name, value) => {
        const getName = () => name;
        const getValue = () => value;
        return {getName, getValue}
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
            if (!_tttBoxNodeList[indexNum].innerText && _gameOver === false) {
                // if game is not over and it's player's turn

                _player1Move(indexNum);
                // mark player1's move on html page
                // log player1's value into gBoardValues Array

                _rowColumnDiagonalScores = _updateValues(_gBoardValue);
                // update array which holds: row sum, column sum, diagonal sum
                
                // and check if win draw or continue
                // (since losing requires com to make a move we need not check for loss)
                let _result = _determine(_rowColumnDiagonalScores, _gBoardValue);

                if (_result === 1) {
                    _resultSpan.innerText = `${_p1.getName()} wins!`;
                    _gameOver = true;
                } else if (_result === 2) {
                    _resultSpan.innerText = 'It\'s a draw!';
                    _gameOver= true;
                }

                // it's the computer's turn to make a move
                // but we first ensure game is not over
                // also ensure _com is 1 move behind _player
                while (_gameOver === false && _playerMoveCount > _comMoveCount) { 
                    
                    // we assign a random index number 
                    // check if the box with that index is already occupied
                    // let _comChoiceIndexNum = _getRandomInt();
                    // while (_tttBoxNodeList[_comChoiceIndexNum].innerText) {
                    //     _comChoiceIndexNum = _getRandomInt();
                    // }

                    let _comChoiceIndexNum;
                    let minScoreAchievable = Infinity;
                    for (let j=0; j<9; j++) {
                        const boardCopy = _gBoardValue;
                        if (boardCopy[j]===null) {
                            boardCopy.splice(j,1,-1);
                            const score = _miniMax(boardCopy, true);
                            if (score < minScoreAchievable) {
                                minScoreAchievable = score;
                                _comChoiceIndexNum = j
                            }
                            boardCopy.splice(j,1,null);
                        }
                    }
                    
                    _comMove(_comChoiceIndexNum);
                    // mark computer's move on html page
                    // log computer's value into gBoardValues Array
                    
                    _rowColumnDiagonalScores = _updateValues(_gBoardValue);
                    // update row, column diagonal sum
                    // check if computer win
                    // (we need not check for player win or draw!)
                    
                    if (_determine(_rowColumnDiagonalScores, _gBoardValue) === -1) {
                        _resultSpan.innerText = 'Computer wins!';
                        _gameOver = true;
                    }
                }
            } else {
                // if innerText is not empty string, it means this box has 
                // already been marked with x or o
                // OR
                // the _gameOver value is true
                // no marking of boxes allowed
                
                e.preventDefault();
            }
        })
        })
    

    // add click event listening for reset button
    _resetBtn.addEventListener('click', resetGame)

    // get index number of box from mouse click event
    function _getBoxIndex(evt) {
        return evt.target.id.slice(3);
        // id of boxes are sequentially named
        // box0, box1, box2...
        // by slicing id string from index 3 we get the box's index no.
    }
    
    // reset game
    function resetGame() {
        _gBoardValue = new Array(9).fill(null);
        Array.from(_tttBoxNodeList).forEach(box=> box.innerText = '');
        _resultSpan.innerText = '';
        _gameOver = false;
        _rowColumnDiagonalScores = _updateValues(_gBoardValue);
        _playerMoveCount = 0;
        _comMoveCount = 0;
    }


    // helper function to check sum of values in board array
    function _boardValueSum(board,a,b,c) {
        let _sum = board[a]+board[b]+board[c];
        if (_sum === 3 || _sum === -3) {
            return _sum*10;
        } else return _sum;
    }

    // helper function to update win condition values
    function _updateValues(board) {
        /* variables that check horizontal win condition*/
        let _r1 = _boardValueSum(board,0,1,2);
        let _r2 = _boardValueSum(board,3,4,5);
        let _r3 = _boardValueSum(board,6,7,8);
    
        /* variables that check vertical win condition*/
        let _c1 = _boardValueSum(board,0,3,6);
        let _c2 = _boardValueSum(board,1,4,7);
        let _c3 = _boardValueSum(board,2,5,8);
    
        /* variables that check diagnonal win condition*/
        let _d1 = _boardValueSum(board,0,4,8);
        let _d2 = _boardValueSum(board,6,4,2);
    
        let arr = [_r1, _r2, _r3, _c1, _c2, _c3, _d1, _d2];

        return arr;
    }


    // players can make a move
    // i.e. occupy a spot on the tic tac toe board
    // we store this in the _gBoardValue array
    // then we mark the spot with an x on the html page
    function _player1Move(indexNum) {
        _gBoardValue.splice(indexNum,1,_p1.getValue());
        _tttBoxNodeList[indexNum].innerHTML = 'x';
        _playerMoveCount++;
    }

    // computer can also make a move
    // but this will be a private function
    function _comMove(indexNum) {
        _gBoardValue.splice(indexNum,1,_com.getValue());
        _tttBoxNodeList[indexNum].innerHTML = 'o';
        _comMoveCount++;
    }

    // miniMax function
    function _miniMax(board, isMaximizingPlayer) {
        const boardCopy = board;
        const scoresArray = _updateValues(boardCopy);
        const tempResult = _determine(scoresArray, boardCopy);
        if (tempResult === 0 && isMaximizingPlayer) {
            let bestScore = -Infinity;
            for (let k = 0; k < 9; k++) {
                if (boardCopy[k]===null) {
                    boardCopy.splice(k,1,1);
                    const score = _miniMax(boardCopy, false);
                    bestScore = Math.max(bestScore, score);
                    boardCopy.splice(k,1,null)
                }
            }
            return bestScore;
        } else if (tempResult === 0 && !isMaximizingPlayer) {
            let bestScore = Infinity;
            for (let k = 0; k < 9; k++) {
                if (boardCopy[k]===null) {
                    boardCopy.splice(k,1,-1);
                    const score = _miniMax(boardCopy, true);
                    bestScore = Math.min(bestScore, score);
                    boardCopy.splice(k,1,null)
                }
            }
            return bestScore;
         } else return _arrSum(scoresArray);
        // else either _determine returned non-zero value, 
        // indicating either a winner or tie is produced
    }

    // determine winner
    function _determine(scoresArray, board) {
        if (scoresArray.includes(30)) {
            return 1; // player win
        } else if (scoresArray.includes(-30)) {
            return -1; // computer win 
        } else if (board.some(element => element===null)) {
            return 0; // there are still empty boxes, game has not ended
        } else {
            return 2; // game ended, no more boxes to click
        }    
    }

    // helper function for random int from 0 to 8
    function _getRandomInt() {
        return Math.floor(Math.random()*9);
    }

    // helper function to sum an array
    function _arrSum(arr) {
        let sum = 0;
        arr.forEach(element => sum+=element)
        return sum
    }

    // return public methods or variables
    return {resetGame}

})();

window.addEventListener('DOMContentLoaded', tictactoe.resetGame);
