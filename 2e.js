Palindrome = (arr) =>
{
    var res =[];
    arr.forEach(e => {
        var rev = parseInt(e.toString().split('').reverse().join(''));
        if(e==rev){
            res.push(e);
        }
    });
    return res;
}

console.log(Palindrome([232,343,456,654,888]));