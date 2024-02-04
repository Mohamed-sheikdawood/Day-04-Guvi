titleCase = (str) => {
    for (var i = 0; i < str.length; i++) {
        str[i]=str[i][0].toUpperCase()+str[i].substring(1).toLowerCase();
    } 
    return str;
  }  

  console.log(titleCase(["abc","bcd","cde","def","efg"]));