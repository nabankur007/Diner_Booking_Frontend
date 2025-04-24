import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Footer from "./pages/Footer";
import PrivacyPolicy from "./pages/Privacy";
import TermsOfService from "./pages/ToS";
import WorkInProgress from "./pages/WorkInProgress";
import RestaurantDetail from "./components/RestaurantDetail";
import Forget_password from "./pages/Forget_password";
import Reset_password from "./pages/Reset_password";
import Close_reset_password from "./pages/Close_reset_password";
import Res_Profile from "./restaurant/Res_Profile";
import Res_menu_operationDetails from "./restaurant/Res_menu_operationDetails";
import Res_partnership from "./restaurant/Res_partnership";
import Res_registration from "./restaurant/Res_registration";
import Res_document_form from "./restaurant/Res_document_form";
import Res_preview from "./restaurant/Res_preview";
import ExploreRestaurant from "./pages/ExploreRestaurant";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserBookings from "./pages/UserBookings";

function App() {
    const location = useLocation();
    const hideNavbarPaths = ["/reset_password", "/close_reset_password"];
    const hideFooterPaths = [
        "/reset_password",
        "/close_reset_password",
        "/signup",
        "/login",
    ];

    // Add transition class to body on route change
    useEffect(() => {
        document.body.classList.add("page-transition");
        const timer = setTimeout(() => {
            document.body.classList.remove("page-transition");
        }, 300);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <div className="page-container">
                {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
                
                <div className="page-content">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                        <Route path="/tos" element={<TermsOfService />} />
                        <Route path="/forget_password" element={<Forget_password />} />
                        <Route path="/reset_password" element={<Reset_password />} />
                        <Route path="/close_reset_password" element={<Close_reset_password />} />
                        <Route path="/res_document_form" element={<Res_document_form />} />
                        <Route path="/res_menu_operationDetails" element={<Res_menu_operationDetails />} />
                        <Route path="/res_partnership" element={<Res_partnership />} />
                        <Route path="/res_profile" element={<Res_Profile />} />
                        <Route path="/res_registration" element={<Res_registration />} />
                        <Route path="/res_preview" element={<Res_preview />} />
                        <Route path="/work_in_progress" element={<WorkInProgress />} />
                        <Route path="/explore_restaurant" element={<ExploreRestaurant />} />
                        <Route path="/restaurant/:restaurantName" element={<RestaurantDetail />} />
                        <Route path="/user_bookings" element={<UserBookings />} />
                    </Routes>
                </div>

                {!hideFooterPaths.includes(location.pathname) && <Footer />}
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;