## 리액트가 rendering 하는 경우

-   Props가 변경되었을 때
-   State가 변경되었을 때
-   forceUpdate() 를 실행하였을 때
-   부모 컴포넌트가 렌더링되었을 때

부모 컴포넌트에서 렌더링이 발생 했을 때 자식 컴포넌트에서도 렌더링이 발생한다. 자식 컴포넌트의
rendering이 필요하지 않은 경우 rendering을 방지해 성능을 최적화 시킬 수 있다.

## solution 1)

```javascript
function shouldComponentUpdate() { }
shouldComponentUpdate(nextProps, nextState, nextContext){}
//shouldComponentUpdate의 nextProps를 사용해 렌더링을 막아준다.
```

해당 리턴이 참인 경우 렌더링 실행
세세한 설정 가능

```javascript
shouldComponentUpdate(nextProps){
    return this.props.message !== nextProps.message
}
```

## solution 2)

리액트 모듈에서 제공하는 pureComponent(class), memo(hooks)를 사용
-> 기본적인 shouldComponentUpdate의 기능을 수행
