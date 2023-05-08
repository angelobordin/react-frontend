import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Header from "../components/Header/Header";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getSessionStorage } from "../util/functions/SessionStorage";

export default function AppRouter() {
    let userToken = getSessionStorage('token');
    const [userLogged, setUserLogged] = useState(userToken != null);

    return (
        <Router>
            {userLogged ?
                <>
                    <Header />
                    <Routes>
                        <Route path="home" element={<Home />} />
                    </Routes>
                </>
            : <Login />}
        </Router>
    );
}