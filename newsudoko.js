let board =
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
//6x6 
board[0][0] = 1;
board[2][3] = 5;
board[5][5] = 7;
function display() {
    for (let row = 0; row < 6; row++) {
        console.log(board[row]);
    }
}
function isvalid(row, col, num) {
    for (let i = 0; i < 6; i++) {
        if (board[row][i] === num || board[i][col] === num) {
            return false;
        }
    }
    return true;
}
function placeNum(row, col, num) {
    if (isvalid(row, col, num)) {
        board[row][col] = num;
        console.log("number inserted\n");
    }
    else {
        console.log("Oops! number can't insert\n");
    }
    display();
}