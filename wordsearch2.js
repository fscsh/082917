function findWords(board, words) {
    let res = [];
    for (let i = 0; i < words.length; i++) {
        if (exist(board, words[i])) {
            // console.log('get exist str',words[i]);
            res.push(words[i]);
        }
    }
    let map = new Set(res);
    res = Array.from(map);
    return res;
}

function exist(board, word) {
    s = word[0];
    word = word.split('').slice();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === s) {
                // board[i][j] === '0';
                // console.log('enter findword ** i =', i, 'j = ', j);
                if (helper(i, j, word, board)) {
                    return true;
                }
            }
        }
    }
    return false;
}


function helper(i, j, word, grid) {
    // console.log('now word is', word, 'word.length =', word.length);
    // console.log('target =', word[0]);
    if (word.length === 0) {
        // console.log('now  is true');
        return true;
    }
    if (i < 0 || j < 0 || i === grid.length || j === grid[0].length || grid[i][j] !== word[0]) {
        return false;
    }
    // for (var i = 0; i < word.length; i++) {
    let tmp = grid[i][j];
    // console.log('i =', i, 'j = ', j);
    // console.log('grid[i][j] =', grid[i][j]);
    grid[i][j] = '0';
    let res = (helper(i, j + 1, word.slice(1), grid) ||
        helper(i, j - 1, word.slice(1), grid) ||
        helper(i + 1, j, word.slice(1), grid) ||
        helper(i - 1, j, word.slice(1), grid));
    grid[i][j] = tmp;
    return res;
}

let case1 = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v']
];
let words = ["oath", "pea", "eat", "rain"];
let case2 = ["a","a"];
let words2 = ["a"];
console.log(findWords(case2, words2));
