// Challenge 1
function addTwo(num) {} {
    return num+2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {} {
    return word+'s';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    let newArr = [];
    for(let val of array){
      newArr.push(callback(val));
    }  
    return newArr;
  }
  
  

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for(let val of array){
      callback(val);
    }  
  }

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let newArr = [];
    array.forEach(value => newArr.push(callback(value)));
    return newArr;
  }

//Extension 2
function reduce(array, callback, initialValue) {
    for(let val of array){
      initialValue = callback(initialValue, val);
    }
    return initialValue;
  }
  

//Extension 3

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4


// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    return array1.reduce((acc, val, index) =>{
      if(array2[index] == callback(val)){
        acc[val] =array2[index];
      }
      return acc;
    },{});
  }

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    return arrVals.reduce((acc, val, index) =>{
      acc[val] = arrCallbacks.map(element => {
        return element(val);
      });
      return acc;
    },{});
  }
  

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
