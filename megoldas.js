function divisors(integer) {
    var divisors = [];
    for (var i = 2; i < integer - 1; i++){
        if (integer % i === 0) divisors.push(i);
    }
    if (divisors.length === 0) return '' + integer + ' is prime';
    return divisors;
}

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}

function hasUniqueChars(str){
    let arr = str.split('').sort();
    let res = true;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            res = false;
        }
    }
    return res;
}

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    return vowelsCount;
}