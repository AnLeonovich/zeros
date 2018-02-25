module.exports = function getZerosCount(number) {
    var arr = [];
    var zeros = 0;
  
    for (var i = 0; i < 11; i++){ //т.к number <= 10^8
        arr[i] = Math.pow(5, i+1);
    }
  
    for(i = 0; i < arr.length; i++ ){
        zeros += Math.floor(number/arr[i]);
    }

  return zeros;
}
