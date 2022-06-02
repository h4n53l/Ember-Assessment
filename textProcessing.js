var paragraph = "lorem ipsum dolor sit amet consectetur lorem ipsum et mihi quoniam et adipiscing elit.sed quoniam et advesperascit et mihi ad villam revertendum est nunc quidem hactenus ex rebus enim timiditas non ex vocabulis nascitur.nummus in croesi divitiis obscuratur pars est tamen divitiarum.nam quibus rebus efficiuntur voluptates eae non sunt in potestate sapientis.hoc mihi cum tuo fratre convenit.qui ita affectus beatum esse numquam probabis duo reges constructio interrete.de hominibus dici non necesse est.eam si varietatem diceres intellegerem ut etiam non dicente te intellego parvi enim primo ortu sic iacent tamquam omnino sine animo sint.ea possunt paria non esse.quamquam tu hanc copiosiorem etiam soles dicere.de quibus cupio scire quid sentias.universa enim illorum ratione cum tota vestra confligendum puto.ut nemo dubitet eorum omnia officia quo spectare quid sequi quid fugere debeant nunc vero a primo quidem mirabiliter occulta natura est nec perspici nec cognosci potest.videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur sunt enim prima elementa naturae quibus auctis virtutis quasi germen efficitur.nam ut sint illa vendibiliora haec uberiora certe sunt.cur deinde metrodori liberos commendas.mihi inquam qui te id ipsum rogavi nam adhuc meo fortasse vitio quid ego quaeram non perspicis.quibus ego vehementer assentior.cur iustitia laudatur mihi enim satis est ipsis non satis.quid est enim aliud esse versutum nobis heracleotes ille dionysius flagitiose descivisse videtur a stoicis propter oculorum dolorem.diodorus eius auditor adiungit ad honestatem vacuitatem doloris.nos quidem virtutes sic natae sumus ut tibi serviremus aliud negotii nihil habemus.";

var words = paragraph.split(/[.\s]/);

var sentences = paragraph.split(".").filter((sentence) => sentence.trim() != '');

var longestWord = words.reduce((previousLongest, nextWord) => previousLongest.length > nextWord.length ? previousLongest : nextWord);

function getfrequencyMap(wordsArray, twoWords) {
    var frequencyMap = wordsArray.reduce((element, word, index) => {
        if(twoWords){
            element[`${word} ${wordsArray[index +1]}`] = (element[`${word} ${wordsArray[index +1]}`] || 0) + 1;
        }
        else{
        element[word] = (element[word] || 0) + 1;
    }
        return element;
    }, {});

    return frequencyMap
}

function getFrequentWords(stringArray, amount, twoWords=false) {
    var frequencyMap = getfrequencyMap(stringArray, twoWords)

    var mostFrequent = new Set();

    Object.keys(frequencyMap).reduce((previousHighest, nextValue) => {
        if (frequencyMap[previousHighest] > frequencyMap[nextValue]) {
            mostFrequent.add(previousHighest);
            return previousHighest;
        }
        else {
            mostFrequent.add(nextValue);
            return nextValue;
        }
    });
    return [...mostFrequent].slice(-amount)
};

function getFrequencyPercentage(stringArray, frequency, twoWords=false) {
    var frequencyMap = getfrequencyMap(stringArray, twoWords)

    var wordsOfFrequency = Object.keys(frequencyMap).filter((key) => key !== " " && frequencyMap[key] === frequency)

    var percentageFrequency = 100*(wordsOfFrequency.length/stringArray.length)

    return (percentageFrequency.toFixed(2))
}

function getProminence(stringArray, word) {
    var indexSum = stringArray.indexOf(word) == 0 ? 1 : 0;
    for(let index = 0; index < stringArray.length; index++){
        if (stringArray[index] === word)
        indexSum = indexSum + index;
        }

        var prominence = (stringArray.length - ((indexSum - 1) / (stringArray.indexOf(word) + 1))) * (100 / stringArray.length)

return  prominence
}


var totalWords = words.length;
var totalSentences = sentences.length;
var longestWordLength = longestWord.length;
var sixMostFrequentWords = getFrequentWords(words, 6);
var uniqueWordsPercentage = getFrequencyPercentage(words, 1);
var averageWordsPerSentence = (totalWords / totalSentences).toFixed();
var mostFrequentTwoWordPhrases =  getFrequentWords(words, 3, true);

console.log(`The total number of words are: ${totalWords}`);
console.log(`The total number of sentences are: ${totalSentences}`);
console.log(`The longest word has: ${longestWordLength} characters`);
console.log(`The six most frequent words are: ${sixMostFrequentWords}`);
console.log(`The percentage of unique words are: ${uniqueWordsPercentage}`);
console.log(`The average number of words in a sentence is: ${averageWordsPerSentence}`);
console.log(`The most frequent two word phrases are: ${mostFrequentTwoWordPhrases}`);
console.log(`The prominence of ${words[0]} is ${getProminence(words, words[0])}`)
console.log(`The prominence of ${words[1]} is ${getProminence(words, words[1])}`)
console.log(`The prominence of ${words[2]} is ${getProminence(words, words[2])}`)
console.log(`The prominence of ${words[3]} is ${getProminence(words, words[3])}`)
console.log(`The prominence of ${words[4]} is ${getProminence(words, words[4])}`)