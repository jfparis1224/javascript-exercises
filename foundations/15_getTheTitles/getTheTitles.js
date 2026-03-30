const getTheTitles = function(books) {
  let arr = [];
    for (let n of books){
      let nArr=n;
      for (let v in nArr){
        arr.push(nArr[v]);
        break
        }
      }
  return arr
};

// Do not edit below this line
module.exports = getTheTitles;
