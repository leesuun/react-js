## useReducer

-   리액트 컴포넌트의 state가 많을 때 object 형식으로 state를 선언하고,
    해당 state가 취할 action을 함수로 만들어서 state를 관리한다.

```javascript
const SET_NAME = "SET_NAME";

const initialArg = {
    name: "lee",
    age: 10,
};
const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAME: {
            return {
                ...state,
                name: action.name,
            };
        }
    }
};

const [state, dispatch] = useReducer(reducer, initialArg);

const yourCompoent = () => {
    dispatch({ type: SET_NAME, name: "kim" });

    return <></>;
};
```

-   dispatch는 setState의 역할을 대신한다. 다만 setState가 비동기적으로 실행된다.
-   dispatch를 통해 상태를 변경 할 때 기존 state에 직접 변경하지 않는다. (얕은복사 사용)
