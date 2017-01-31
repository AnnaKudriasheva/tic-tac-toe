class TicTacToe {
    constructor() {
        this.current_player = 'x';
        this.board = [];
        for (var i = 0; i < 3; i++) {
            this.board[i] = [];
            for (var j = 0; j < 3; j++) {
                this.board[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.current_player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[rowIndex][columnIndex] == null) {
            this.board[rowIndex][columnIndex] = this.current_player;
            (this.current_player == 'x') ? this.current_player = 'o' : this.current_player = 'x';
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        }
        return false;
    }

    getWinner() {
        for (var i = 0; i < 3; i++) {
            var row_count = 0;
            for (var j = 0; j < 3; j++) {
                if (this.board[i][j] === this.board[i][0]) {
                    row_count++;
                    if (row_count == 3 && this.board[i][j] != null) {
                        return this.board[i][j];
                    }
                }
            }
        }
        for (var j = 0; j < 3; j++) {
            var col_count = 0;
            for (var i = 0; i < 3; i++) {
                if (this.board[i][j] == this.board[0][j]) {
                    col_count++;
                    if (col_count == 3 && this.board[i][j] != null) {
                        return this.board[i][j];
                    }
                }
            }

        }
        var main_diag_count = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (j == i) {
                    if (this.board[i][j] == this.board[0][0]) {
                        main_diag_count++;
                        if (main_diag_count == 3 && main_diag_count != null) {
                            return this.board[i][j];
                        }
                    }
                }
            }

        }
        var secondary_diag_count = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (j == (2 - i)) {
                    if (this.board[i][j] == this.board[0][2]) {
                        secondary_diag_count++;
                        if (secondary_diag_count == 3 && secondary_diag_count != null) {
                            return this.board[i][j];
                        }
                    }
                }
            }
        }
        return null;
    }

    noMoreTurns() {
        var flag = true;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.board[i][j] == null) {
                    flag = false;
                }
            }
        }
        return flag;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
