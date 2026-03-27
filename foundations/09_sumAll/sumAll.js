const sumAll = function(...args) {
let sum = 0;
let neg = args.some((num)=>num<0);
let hasInt = args.some((int) => !Number.isInteger(int))
if(neg!=true&&hasInt!=true){
if(args[0]>args[1]){
for (let i=args[1];i<args[0]+1;i++){
    sum += i}
    }
if(args[1]>args[0]){
  for (let i=args[0];i<args[1]+1;i++){
    sum += i}
  }
    return sum}
else {return "ERROR"}
};

// Do not edit below this line
module.exports = sumAll;
