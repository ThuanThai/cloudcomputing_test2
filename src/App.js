import Search from "./components/students/Search";
import Table from "./components/students/Table";
import { Route, Routes } from "react-router-dom";
import Addpage from "./page/Addpage";
import Editpage from "./page/Editpage";

function App() {
    return (
        <div className="py-10 page-container">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Table></Table>
                        </>
                    }></Route>
                <Route path="/add" element={<Addpage></Addpage>}></Route>
                <Route path="/edit/:id" element={<Editpage></Editpage>}></Route>
            </Routes>
        </div>
    );
}

export default App;
