sum = (array)=>{
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
    sum = sum + array[i];
    }
    return sum;
}

console.log(sum([1,2,3,4,5]));