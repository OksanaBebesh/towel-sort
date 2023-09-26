// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0) {
        return [];
    }
    let result = [];
    for (let i = 0; i <= matrix.length - 1; i++) {
        for (let j = 0; j <= matrix[i].length - 1; j++) {
            let indexId = i % 2 === 0 ? j : matrix[i].length - j - 1;
            if (matrix[i][indexId] !== undefined) {
                result.push(matrix[i][indexId]);
            }
        }
    }
    return result;
};
