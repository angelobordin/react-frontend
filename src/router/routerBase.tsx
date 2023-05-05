import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} />
                    <Route path="home" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}