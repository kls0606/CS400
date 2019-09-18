const part1 = (str,char) => {
    var array = str.split(char);
    for( var count = 1; count < array.length; count++){
        array[count] = char + array[count];
    }
    return	array;
}

const part2 = (str) =>{
    var counter=0;
    for(var count=0; count<str.length; count++){
        if(str.charAt(count) == 'a'){
            counter++;
        }
    }
    const modstr = str.replace(/a/g,'A');
    const numReplaced = counter;
    const len = str.length;
    return "{\noriginalString: " + str + ",\nmodifiedString: " + modstr + ",\nnumberReplaced: " + numReplaced + ",\nlength:" + len + "\n}";
}

console.log(part1('supercalifragilisticexpialidocious','c'));
console.log(part2('supercalifragilisticexpialidocious'));