function analyzeArray(arr) {
    length = arr.length;
    
    min = arr.reduce(function(previousValue, currentValue) {
        return Math.min(previousValue, currentValue);
    }, Infinity);

    max = arr.reduce(function(previousValue, currentValue) {
        return Math.max(previousValue, currentValue);
    }, -Infinity);

    average = arr.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);
    average /= length;

    return {average, min, max, length};
};

module.exports = analyzeArray;