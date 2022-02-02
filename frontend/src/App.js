import BlogList from "./components/BlogList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditorPage from "./components/EditorPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<BlogList />}></Route>
                    <Route path="/edit/:id" element={<EditorPage />}></Route>
                    <Route path="/create" element={<div>Create</div>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
