import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
} from "react-router-dom";
import HomePage from "./pages/Home.js/HomePage";
import ForNotLoggedInUserBookA from "./pages/ForNotLoggedInUserBookA";
import LoginAlert from "./pages/LoginAlert";
import BookAppointment from "./pages/BookAppointment";
import ForLoggedInUserBookAppoi from "./pages/ForLoggedInUserBookAppoi";
import AppointmentsFinished from "./pages/AppointmentsFinished";
import AppointmentsUpcoming from "./pages/AppointmentsUpcoming";
// import RegisterPopup from "./pages/RegisterPopup";
import HomePageAfterLogging from "./pages/HomePageAfterLogging";
import { useEffect } from "react";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (action !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [action]);

    useEffect(() => {
        let title = "";
        let metaDescription = "";

        //TODO: Update meta titles and descriptions below
        switch (pathname) {
            case "/":
                title = "";
                metaDescription = "";
                break;
            case "/for-not-logged-in-user-book-appointment":
                title = "";
                metaDescription = "";
                break;
            case "/login-alert":
                title = "";
                metaDescription = "";
                break;
            case "/book-appointment":
                title = "";
                metaDescription = "";
                break;
            case "/for-logged-in-user-book-appointment":
                title = "";
                metaDescription = "";
                break;
            case "/appointments-finished":
                title = "";
                metaDescription = "";
                break;
            case "/appointments-upcoming":
                title = "";
                metaDescription = "";
                break;
            case "/register-popup":
                title = "";
                metaDescription = "";
                break;
            case "/home-page-after-logging":
                title = "";
                metaDescription = "";
                break;
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag = document.querySelector(
                'head > meta[name="description"]'
            );
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
                path="/for-not-logged-in-user-book-appointment"
                element={<ForNotLoggedInUserBookA />}
            />

            <Route path="/login-alert" element={<LoginAlert />} />

            <Route path="/book-appointment" element={<BookAppointment />} />

            <Route
                path="/for-logged-in-user-book-appointment"
                element={<ForLoggedInUserBookAppoi />}
            />

            <Route
                path="/appointments-finished"
                element={<AppointmentsFinished />}
            />

            <Route
                path="/appointments-upcoming"
                element={<AppointmentsUpcoming />}
            />

            {/* <Route path="/register-popup" element={<RegisterPopup />} /> */}

            <Route
                path="/home-page-after-logging"
                element={<HomePageAfterLogging />}
            />
        </Routes>
    );
}
export default App;
