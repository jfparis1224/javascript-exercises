const removeFromArray = function() {
let conv = Array.from(arguments)
let arr = conv[0];
for (let i=0;i<arguments.length;i++){
  while (arr.includes(conv[i])){
    arr.splice(arr.indexOf(conv[i]),1)
    }
  }
return arr
};

// Do not edit below this line
module.exports = removeFromArray;
