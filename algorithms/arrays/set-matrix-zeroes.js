var setZeroes = function(matrix) {
    const zeroRows = new Set();
    const zeroColumns = new Set();

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                zeroRows.add(r);
                zeroColumns.add(c);
            }
        }
    }

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (zeroRows.has(r) || zeroColumns.has(c)) {
                matrix[r][c] = 0;
            }
        }
    }

    return matrix;
};
