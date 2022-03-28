import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDo("");
        setToDos((curr) => [...curr, toDo]);
    };
    console.log(toDos);

    return (
        <div>
            <h1>ToDo-list({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    type="text"
                    onChange={onChange}
                    placeholder="Write a todo.."
                />
                <button>제출</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default App;
