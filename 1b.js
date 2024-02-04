var str = ["abc","bcd","cde","def","efg"];
for(i=0;i<str.length;i++){
    str[i]=str[i][0].toUpperCase()+str[i].substring(1).toLowerCase();
}
console.log(str);