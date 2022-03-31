import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={`${process.env.PUBLIC_URL}/`}
                    element={<Home />}
                ></Route>
                <Route path="/movie/:id" element={<Detail />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
