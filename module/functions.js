function one(){
  return 1; //리턴이 숫자
}

function twoReturnString(){ //무엇이 들어갔든 스트링이다
  return "1"; //리턴이 문자
}

//two()==="1";

function isthree(){ //불리언(true,false 쓸때 함수명에 is를 쓴다 )
  return true; 
}
//리턴만 알면 대부분의 함수를 쓸 수 있다

function four(){ //four라는 함수는 호출하고나서는 객체
  return {
    a:1,
    b:"2",
    c: true
  }
}

function five(){
  let a=1+1; //리턴이 없지만 1+1을 a에 담은 것이 실행이 된다, 리턴을 필요로 하지않는 함수도 실행(실행함수)=동작만을 위한 함수 ex)for문
}

