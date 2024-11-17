import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Forget_password from "./pages/Forget_password";
import Reset_password from "./pages/Reset_password";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/forget_password" element={<Forget_password/>}/>
                    <Route path="/reset_password" element={<Reset_password/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
