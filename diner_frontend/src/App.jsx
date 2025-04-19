import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Restaurant from "./pages/Restaurant";
import Forget_password from "./pages/Forget_password";
import Reset_password from "./pages/Reset_password";
import Close_reset_password from "./pages/Close_reset_password";
import AddRestaurant from "./pages/AddRestaurant";
import Res_admin_home from "./restaurent_admin/Res_admin_home";
import Res_Registration from "./restaurent_admin/Res_registration";

function App() {
    const location = useLocation();

    const hideNavbarPaths = [
        "/reset_password",
        "/close_reset_password"
    ];

    return (
        <>
            {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/restaurant" element={<Restaurant />} /> 
                <Route path="/forget_password" element={<Forget_password />} />
                <Route path="/reset_password" element={<Reset_password />} />
                <Route path="/close_reset_password" element={<Close_reset_password />} />
                <Route path="/add_restaurent" element={<AddRestaurant />} />

                {/* restaurent section pages */}
                <Route path="/" element={<Res_admin_home />} />
                <Route path="/res_Registration" element={<Res_Registration/>}/>
            </Routes>
        </>
    );
}

export default App;
