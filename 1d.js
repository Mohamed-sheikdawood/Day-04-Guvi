var arr = [2,3,4,5,6,7,8,9,10,11];
var flag = true;
for(var i=0; i<arr.length;i++){
    flag = true;
    for(var j=2;j<=arr[i]/2;j++){
        if(arr[i]%j==0){
            flag = false;
            break;
        }
    }
    if(flag==true)
        console.log(arr[i]);
}