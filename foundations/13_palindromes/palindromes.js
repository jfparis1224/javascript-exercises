const palindromes = function (str){
let rep = str.toLowerCase().replace(/\s/g,'')
let arr = rep.split("");
while (arr.includes(",")||arr.includes("!")||arr.includes(".")){
  let pos=arr.indexOf(",");
  let pos1=arr.indexOf("!");
  let pos2=arr.indexOf(".");
  if (arr.includes(",")){
  arr.splice(pos,1);
    }
  if(arr.includes("!")){
  arr.splice(pos1,1);
    }
  if(arr.includes(".")){
  arr.splice(pos2,1);
    }
  }
let arrJ= arr.join("");
let rev=[...arr].reverse().join("");
if (arrJ===rev){
  return true
  }
  return false
}
// Do not edit below this line
module.exports = palindromes;
