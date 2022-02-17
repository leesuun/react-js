function shouldComponentUpdate() { }
shouldComponentUpdate(nextProps, nextState, nextContext){}

contextAPI는 자식 객체에 props를 전달해 줄 경우 전 단계를 거치지 않고 바로 전달해주는 api이다.(redux)
A <-- B <-- C <-- D <-- E 상속의 경우 A가 E에 props를 전달하려면  B C D를 거쳐야 하지만 contextAPI를
이용하면 A에서E로 props를 전달 할 수 있다. -> 불필요한 rendering 방지 
