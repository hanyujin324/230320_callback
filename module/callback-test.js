/*1. 
function six(number,append){
  if(typeof(number)==="number"&&typeof(append)==="number"){ //함수는 복잡해졌지만 버그는 잡았다
    return number+append; 
  }else{
    console.error('이 매개변수는 숫자여야 동작합니다')
  }
}
 */
/* 1.
const a=six(1,2);
console.log(a); //데이터가 변한다 */

function six(number, append){ //선언
  return number+append; //2. 리턴 (정적) ->+말고 다른 걸로 쓰고 싶다(동적으로 바꾸기)
}

function seven(number, append){
  return number-append;
}

function eight(number,append,callback){ //3.동적으로 바꾸기 (a,b, callback(마지막에는 callback이라고 쓴다!)), 실체가 없는 형태, 매개변수가 숫자일 필요가 없다.
  //3.2 동적
  let a=number+1;
  let b=append+2;
  // 3.return callback(number,append); //인자를 전달 받았다
  return callback(a,b); //3.2
}


//3.
console.log(eight(1,2,function(a,b){
  return a+b;
}))

// console.log(eight(3,4,seven)); 