## hooks와 class 차이

class의 componentDidMount componentWillUnmount componentDidUpdate 함수들은
hooks의 useEffect를 통해 구현 할 수 있지만 1:1로 매칭하기는 어렵다.(devs..)

```javascript
useEffect(() => {
    // componentDidMount 발생

    return () => {
        // componentWillUnmount 발생
    };
    // devs에 state 존재시
    // componentDidMount(초기) componentDidUpdate(업데이트) 동시 실행
}, [value]);
```

## hooks 렌더링 과정시 발생하는 외부 참조 함수의 실행

hooks는 Component전체를 렌더링 하기 때문에 lotto-hooks를 실행하면
getWinNumbers함수가 지속적으로 호출된다.
getWinNumbers 함수의 실행시간이 긴 경우 성능에 문제가 발생한다.

_해결법_
useMemo 사용

-   useMemo의 사용으로 hooks가 getWinNumbers의 값을 기억(함수 실행 결과값 기억)-> 캐싱
-   렌더링시 함수 재실행 x

## useMemo와 useCallback의 차이점

-   useMemo는 함수 실행 값을 기억하고 useCallback은 함수 자체를 기억한다.
-   자식 component에 콜백 함수를 보낼 때 useCallback을 사용해야한다. 같은 함수라는 것을 인식해줘야함 (리렌더링 과정시 함수가 새로 생성되므로. )

## state를 조건문 또는 반복문에 넣지 말기

```javascript
// 금지
if (true) {
    const [val, setVal] = setState();
}
```

-   hooks는 최상위로 빼서 실행순서가 항상 같게 만드는 것이 좋다.

## hooks에서 componentDidUpdate에서만 작업을 수행하려는 경우

hooks의 useEffect는 기본적으로 componentDidMount를 실행하므로 flag를 세워
componentDidUpdate에서 동작을 수행하도록 만든다.

```javascript
function excuteUpdateMount() {
    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            // 동작 수행
        }
    }, []);
}
```
