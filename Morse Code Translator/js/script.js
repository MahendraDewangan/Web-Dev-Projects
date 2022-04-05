const crypt = new Map([
    ['a', '._'],
    ['b', '_...'],
    ['c', '_._.'],
    ['d', '_..'],
    ['e', '.'],
    ['f', '.._.'],
    ['g', '__.'],
    ['h', '....'],
    ['i', '..'],
    ['j', '.___'],
    ['k', '_._'],
    ['l', '._..'],
    ['m', '__'],
    ['n', '_.'],
    ['o', '___'],
    ['p', '.__.'],
    ['q', '__._'],
    ['r', '._.'],
    ['s', '...'],
    ['t', '_'],
    ['u', '.._'],
    ['v', '..._'],
    ['w', '.__'],
    ['x', '_.._'],
    ['y', '_.__'],
    ['z', '__..'],
    ['1', '.____'],
    ['2', '..___'],
    ['3', '...__'],
    ['4', '...._'],
    ['5', '.....'],
    ['6', '_....'],
    ['7', '__...'],
    ['8', '___..'],
    ['9', '____.'],
    ['0', '_____'],
    [' ', '/']
    
]);

const reversed = new Map([
    ['._', 'a'],
    ['_...','b'],
    ['_._.', 'c'],
    ['_..', 'd'],
    ['.', 'e'],
    ['.._.', 'f'],
    ['__.', 'g'],
    ['....', 'h'],
    ['..', 'i'],
    ['.___', 'j'],
    ['_._', 'k'],
    ['._..', 'l'],
    ['__', 'm'],
    [ '_.', 'n'],
    ['___', 'o'],
    ['.__.', 'p'],
    ['__._', 'q'],
    ['._.', 'r'],
    ['...', 's'],
    ['_', 't'],
    ['.._', 'u'],
    ['..._', 'v'],
    ['.__', 'w'],
    ['_.._', 'x'],
    ['_.__', 'y'],
    ['__..', 'z'],
    ['.____', '1'],
    ['..___', '2'],
    ['...__', '3'],
    ['...._', '4'],
    ['.....', '5'],
    ['_....', '6'],
    ['__...', '7'],
    ['___..', '8'],
    ['____.', '9'],
    ['_____', '0'],
    ['/', ' ']
    
]);


// translate word from english to morse code
function translate_Word(word){
    let firstletter = "";
    for(let i = 0; i<word.length-1; i++){
        firstletter += crypt.get(word[i].toLowerCase());
        firstletter += " ";
    }
    firstletter += crypt.get(word[word.length-1].toLowerCase());
    return firstletter;

}
//makes the translation apppear
function encryptWord(){
    let word = document.getElementById("inputWord").value;
    document.getElementById("translateWord").value = translate_Word(word);

}



//translate morse code to english word
function translate_code(code){
    translation = ""
    splitCode = code.split(" ")  //splits the code on the basis of " "(spaces)
    for(let i = 0; i<splitCode.length; i++){
        translation += reversed.get(splitCode[i]);
    }
    return translation;

}
// makes the english word appear
function encryptCode(){
    let word = document.getElementById("inputCode").value;
    document.getElementById("translateCode").value = translate_code(word);

}