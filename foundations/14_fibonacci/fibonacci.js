const fibonacci = function(n){
    let arr= [1,1];
    let num = 0;
    let na=0;
    let nb=1;
    let i=Number(n)
    if(i>1){
    while (i!==arr.length){
    num=arr[na]+arr[nb];
    arr.push(num);
    na++;
    nb++
        }
        return arr[arr.length-1]
    }
    if(n<0){
    return "OOPS"
    }
    if(i===1){
    return arr[1]}
return 0
  }

// Do not edit below this line
module.exports = fibonacci;
