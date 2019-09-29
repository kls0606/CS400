const splitSentence = function* (sentence){
    var words = sentence.split(" ");
    for (var index = 0; index < words.length ; index++) {
        yield words[index]
    }
}

const sentence = "All I know is something like a bird within her sang";
var words = sentence.split(" ")

const split = n => splitSentence(sentence)
splitted = split()

let counter = words.length;
while (counter --> 0) {
    console.log(splitted.next().value);
}


