module.exports = function toReadable (number) {
    let numbersToTwenty = [
        '', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten', 
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    
    let tenth = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ]

    if (number < 20) {
        // console.log(numbersToTwenty[number]);
        if (number === 0) {
            return 'zero';
        }

        return numbersToTwenty[number];
    } else {
        let MatchedResults = ('0000000' + number.toString()).slice(-7).match(/(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})/);
        // let MatchedResults = ('000' + number.toString()).slice(-3).match(/^(\d{1})(\d{2})$/);

        // console.log(MatchedResults[5]);
        
        let NumbersToWord = MatchedResults[4] != 0 ? (
            numbersToTwenty[Number(MatchedResults[4])] || `${tenth[Number(MatchedResults[4][1])]} ${numbersToTwenty[Number(MatchedResults[4][0])]}`
            ) + ' hundred ' : '';

        NumbersToWord += MatchedResults[5] != 0 ? (
            numbersToTwenty[Number(MatchedResults[5])] || `${tenth[Number(MatchedResults[5][0])]} ${numbersToTwenty[Number(MatchedResults[5][1])]}`
            ) : '';
        
        // console.log(`${NumbersToWord}`)
        return NumbersToWord.replace(/\s$/, '');
    }

}
