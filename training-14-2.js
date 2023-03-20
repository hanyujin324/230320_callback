/* const exampleArray=[5,2,7,3,9,324,66,43]; */
/* 1.
function minValue(array, callback){
  let min=array[0];
  for(let i=1; i<array.length;i++){ //1부터 array.length이므로 7까지
    if(array[i]<min){ // 만약 array[1]<array[0] /2<5
      // console.dir(array[i]);
      min=array[i]; //min은 array[i]다.
    }else{
      console.dir("아닌 것")
    }
  }
  return callback(min);
}
 */


/*2.
function minValue(array, callback){
  let min=array[0];
  for(let i=1; i<array.length;i++){ //1부터 array.length이므로 7까지
    if(array[i]<min){ // 만약 array[1]<array[0] /2<5
      min=array[i];
    }else{
      console.dir("아닌 것")
    }
  }
  return callback(min);
}
 */

/* 
const minValueExample=minValue(exampleArray,function(result){
  return result*2;
});
console.log(minValueExample); */
const exampleArray=[5,2,7,3,9,324,66,43];
//max값 구하기
function maxValue(array, callback){
  let max=array[0];
  for(let i=1; i<array.length;i++){ //1부터 array.length이므로 7까지
    if(array[i]>max){ 
      max=array[i];
    }
  }
  return callback(max);
}



const maxValueExample=maxValue(exampleArray,function(result){
  return result*1;
});
console.log(maxValueExample);
