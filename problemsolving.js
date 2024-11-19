// write a function which take sin astring and return the number of counts in the string

 function charCount(str){
     let result = {};
     for(let char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
        result[char] > 0 ? result[char]++ : result[char] = 1;
    }
}
     return result;
}


console.log(charCount("ajustmeand  23Dyouthz"));