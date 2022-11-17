import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPopup.css";

const LoginPopup = ({ onClose }) => {
    const navigate = useNavigate();

    const onFrameContainer2Click = useCallback(() => {
        navigate("/home-page-after-logging");
    }, [navigate]);

    return (
        <div className="login-popup-div">
            <div className="frame-div163">
                <div className="login-as-patient">Login as Patient</div>
                <div className="frame-div164">
                    <div className="frame-div164">
                        <div className="group-div98">
                            <div className="rectangle-div69" />
                            <div className="email-div1">Email</div>
                        </div>
                        <div className="group-div98">
                            <div className="rectangle-div69" />
                            <div className="email-div1">Password</div>
                        </div>
                    </div>
                    <div className="group-div100">
                        <div className="rectangle-div71" />
                        <div className="i-agree-to-all-the-terms-and-c1">
                            <span>{`I agree to all the `}</span>
                            <span className="terms-and-conditions1">
                                Terms and Conditions
                            </span>
                        </div>
                    </div>
                </div>
                <div className="frame-div166">
                    <div
                        className="frame-div167"
                        onClick={onFrameContainer2Click}
                    >
                        <b className="login-b1">LOGIN</b>
                    </div>
                    <div className="new-user-register-now">
                        {`New user? `}
                        <span className="register-now-span">Register Now</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
