var arr = [232,343,456,654,888];
arr.forEach(e => {
    var rev = parseInt(e.toString().split('').reverse().join(''));
    if(e==rev){
        console.log(e);
    }
});