//write a function that compares two array and retuen true if the value of one has it square in the other the frequency must thesame

function same(arr1,arr2){

    if(arr1.length !== arr2.length){
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {};
    for(let val of arr1){
        freqCounter1[val] =(freqCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }
    
    console.log(freqCounter1);
    console.log(freqCounter2);
    
    for(let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){ 
            return false;
        }

        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            return false;
        }
    }
    return true;
}

//console.log(same([1,2,3,4,5,6],[4,25,36,16,9,4]));

//anagrams
/**Given two strings ,write a function to determine if the second string is an anagram of the first.  */

function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {};
    for(val of str1){
        freqCounter1[val] =(freqCounter1[val] || 0) + 1;
    }
    for(val of str2){
        freqCounter2[val] =(freqCounter2[val] || 0) + 1;
    }

    for(key in freqCounter1){
        if(!(key in freqCounter2)){
            return false;
        }
        if(freqCounter1[key]!== freqCounter2[key]){
            return false;
        }
    }
    return true
}

console.log(anagram("aaz","zzav"));