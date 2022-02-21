## 리액트 라이프 사이클

렌더 함수 실행시 리액트가 jsx를 document에 삽입하는데 그 순간에 특정한 동작을 수행 할 수 있다.

## class 라이프 사이클

1. 컴포넌트가 첫 렌더링 된 후 (ex: 비동기 요청 시)
   componentDidMount(){}

2. 컴포넌트가 제거되기 직전 (ex: 부모가 자식 컴포넌트 제거, 비동기 요청 정리)
   componentWillUnMount(){}

3. 리렌더링 후
   componentDidUpdate(){}

실행 순서: constructor -> render -> ref -> componentDidMount

        1 (setState,Props 바뀔때) -> shouldComponentUpdate -> render -> componentDidUpdate
        2 부모가 자식 component 제거시 -> componentWillUnMount 실행 -> 소멸

## hooks 라이프 사이클

hooks의 useEffect()는 class의 componentDidMount, componentWillUnMount, componentDidUpdate 역할을
대신하지만 1대1로 대응하지는 않는다.

useEffect(함수, 클로저 문제 해결)
두번째 인자의 목록에 있는 값이 변경될 경우 활성화

## 비동기 작업 처리

완료되지 않은 비동기 처리는 componentWillUnMount함수에서 처리해줘야 한다.

-   메모리 누수 방지
-   무한 실행 방지

```javascript
let intervalId;
componentDidMount(){
    // setInterval취소 작업 안하면 component가 삭제되도 끝까지 실행됨.
    intervalId = setInterval(()=>{
        console.log("hi")
    },1000)
}

componentWillUnMount(){
    clearInterval(intervalId);
}
```
