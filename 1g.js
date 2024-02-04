var arr = [1,2,3,4,5,4,3,2,1];
 
console.log(arr.filter((item, index) => arr.indexOf(item) === index));