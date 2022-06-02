var paragraph = "lorem ipsum dolor sit amet consectetur lorem ipsum et mihi quoniam et adipiscing elit.sed quoniam et advesperascit et mihi ad villam revertendum est nunc quidem hactenus ex rebus enim timiditas non ex vocabulis nascitur.nummus in croesi divitiis obscuratur pars est tamen divitiarum.nam quibus rebus efficiuntur voluptates eae non sunt in potestate sapientis.hoc mihi cum tuo fratre convenit.qui ita affectus beatum esse numquam probabis duo reges constructio interrete.de hominibus dici non necesse est.eam si varietatem diceres intellegerem ut etiam non dicente te intellego parvi enim primo ortu sic iacent tamquam omnino sine animo sint.ea possunt paria non esse.quamquam tu hanc copiosiorem etiam soles dicere.de quibus cupio scire quid sentias.universa enim illorum ratione cum tota vestra confligendum puto.ut nemo dubitet eorum omnia officia quo spectare quid sequi quid fugere debeant nunc vero a primo quidem mirabiliter occulta natura est nec perspici nec cognosci potest.videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur sunt enim prima elementa naturae quibus auctis virtutis quasi germen efficitur.nam ut sint illa vendibiliora haec uberiora certe sunt.cur deinde metrodori liberos commendas.mihi inquam qui te id ipsum rogavi nam adhuc meo fortasse vitio quid ego quaeram non perspicis.quibus ego vehementer assentior.cur iustitia laudatur mihi enim satis est ipsis non satis.quid est enim aliud esse versutum nobis heracleotes ille dionysius flagitiose descivisse videtur a stoicis propter oculorum dolorem.diodorus eius auditor adiungit ad honestatem vacuitatem doloris.nos quidem virtutes sic natae sumus ut tibi serviremus aliud negotii nihil habemus.";

var words = paragraph.split(/[.\s]/);

var sentences = paragraph.split(".").filter((sentence) => sentence.trim() != '');

var longestWord = words.reduce((previousLongest, nextWord) => previousLongest.length > nextWord.length ? previousLongest : nextWord);

function getFrequencyHashMap(wordsArray) {
    return wordsArray.reduce((element, word) => {
        element[word] = (element[word] || 0) + 1;
        return element;
    }, {});
}

function getFrequentWords(stringArray, amount) {
    var frequencyHashmap = getFrequencyHashMap(stringArray)

    var mostFrequent = new Set();

    Object.keys(frequencyHashmap).reduce((previousHighest, nextValue) => {
        if (frequencyHashmap[previousHighest] > frequencyHashmap[nextValue]) {
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

function getFrequencyPercentage(stringArray, frequency) {
    var frequencyHashmap = getFrequencyHashMap(stringArray)

    var wordsOfFrequency = Object.keys(frequencyHashmap).filter((key) => key !== " " && frequencyHashmap[key] === frequency)

    var percentageFrequency = 100*(wordsOfFrequency.length/stringArray.length)

    return (percentageFrequency.toFixed(2))
}

var totalWords = words.length;
var totalSentences = sentences.length;
var longestWordLength = longestWord.length;
var sixMostFrequentWords = getFrequentWords(words, 6);
var uniqueWordsPercentage = getFrequencyPercentage(words, 1);
var averageWordsPerSentence = (totalWords / totalSentences).toFixed();

console.log(`The total number of words are: ${totalWords}`);
console.log(`The total number of sentences are: ${totalSentences}`);
console.log(`The longest word has: ${longestWordLength} characters`);
console.log(`The six most frequent words are: ${sixMostFrequentWords}`);
console.log(`The percentage of unique words are: ${uniqueWordsPercentage}`);
console.log(`The average number of words in a sentence is: ${averageWordsPerSentence}`);
