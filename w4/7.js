

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var j = s.length;
    for(var i=0;i<j;++i){
        if(s.charAt(i) == "a" || s.charAt(i) == "e" || s.charAt(i) == "i" || s.charAt(i) == "o" || s.charAt(i) == "u"){
            console.log(s.charAt(i));
        }
    }
    for(var i=0;i<j;++i){
        if(s.charAt(i) == "a" || s.charAt(i) == "e" || s.charAt(i) == "i" || s.charAt(i) == "o" || s.charAt(i) == "u"){
            continue;
        }else console.log(s.charAt(i));
    }
}

