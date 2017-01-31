class TicTacToe {
    constructor() {
        this.size = 3;
        this.current_player = 'x';
        this.board = [];
        for (var i = 0; i < this.size; i++) {
            this.board[i] = [];
            for (var j = 0; j < this.size; j++) {
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
            this.current_player = (this.current_player == 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw();
    }

    getWinner() {
        var main_diag_count = 0;
        var secondary_diag_count = 0;
        for(var i = 0; i < this.size; i++) {
            var row_count = 0;
            var col_count = 0;
            for(var j = 0; j < this.size; j++) {
                if (this.board[i][j] == this.board[i][0]) {
                    row_count++;
                    if (row_count == this.size && this.board[i][j] !== null) {
                        return this.board[i][j];
                    }
                }
                if (this.board[j][i] == this.board[0][i]) {
                    col_count++;
                    if (col_count == this.size && this.board[j][i] !== null) {
                        return this.board[j][i];
                    }
                }
                if (j == i) {
                    if (this.board[i][j] == this.board[0][0]) {
                        main_diag_count++;
                        if (main_diag_count == this.size && this.board[i][j] !== null) {
                            return this.board[i][j];
                        }
                    }
                }
                if (j == (this.size  - i - 1)) {
                    if (this.board[i][j] == this.board[0][this.size - 1]) {
                        secondary_diag_count++;
                        if (secondary_diag_count == this.size && this.board[i][j] !== null) {
                            return this.board[i][j];
                        }
                    }
                }
            }
        }
        return null;
    }

    noMoreTurns() {
        for (var i = 0; i < this.size; i++) {
            if (this.board[i].includes(null))
                return false;
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
