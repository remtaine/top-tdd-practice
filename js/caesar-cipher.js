function caesarCipher(str) {
    const letters = str.split('');
    const SHIFT = 1;

    const shiftedLetters = letters.map(function(x) {
        caseShift = 0;
        let place = x.charCodeAt(0);

        if ("abcdefghijklmnopqrstuvwxyz".includes(x)) caseShift = 97;
        else if ("abcdefghijklmnopqrstuvwxyz".toUpperCase().includes(x)) caseShift = 65;
        else return x;

        place -= caseShift;
        place = (place + SHIFT) % 26;
        place += caseShift;

        return String.fromCharCode(place);
    });

    return shiftedLetters.join('');
};

module.exports = caesarCipher;