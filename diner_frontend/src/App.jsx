import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import Forget_password from "./pages/Forget_password";
import Reset_password from "./pages/Reset_password";
import Close_reset_password from "./pages/Close_reset_password";
import AddRestaurant from "./pages/AddRestaurant";
import Res_Profile from "./restaurant/Res_Profile";
import Res_menu_operationDetails from "./restaurant/Res_menu_operationDetails";
import Res_partnership from "./restaurant/Res_partnership";
import Res_registration from "./restaurant/Res_registration";
import Res_document_form from "./restaurant/Res_document_form";
import Res_preview from "./restaurant/Res_preview";
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
                <Route path="/" element={<Home />} />
                
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                
                <Route path="/forget_password" element={<Forget_password />} />
                <Route path="/reset_password" element={<Reset_password />} />
                <Route path="/close_reset_password" element={<Close_reset_password />} />
                <Route path="/add_restaurent" element={<AddRestaurant />} />

                {/* restaurent registration */}
                <Route path="/res_document_form" element={<Res_document_form/>}/>
                <Route path="/res_menu_operationDetails" element={<Res_menu_operationDetails/>}/>
                <Route path="/res_partnership" element={<Res_partnership/>}/>
                <Route path="/res_profile" element={<Res_Profile/>}/>
                <Route path="/res_registration" element={<Res_registration/>}/>
                <Route path="/res_preview" element={<Res_preview />} />
                {/* <Route path="/restaurant-info" element={<RestaurantInfo />} />
                <Route path="/menu-details" element={<MenuDetails />} />
                <Route path="/documents" element={<Documents />} /> */}
            </Routes>
        </>
    );
}

export default App;
