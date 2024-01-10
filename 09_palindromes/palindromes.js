const palindromes = function (characters) {
    const lowerCase = characters.toLowerCase();
    const array = Array.from(lowerCase);
    const cleanArray = array.filter(char => char != '!' && 
                                            char != ',' &&
                                            char != '.' &&
                                            char != ' '
                                            );
    const length = cleanArray.length - 1;
    let isPalindrome = true;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        let currentFront = cleanArray[i];
        let currentBack = cleanArray[(length) - i];
        if (currentFront !== currentBack) {
            isPalindrome = false;
            break;
        }  
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
