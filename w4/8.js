

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        let splitS=s.split('')
        let reversedS=splitS.reverse('')
        let joinS=reversedS.join('')
        console.log(joinS)
    }
    catch(error){
        console.log(error.message);
        console.log(s);
    }
    // console.log(s);
    
}

