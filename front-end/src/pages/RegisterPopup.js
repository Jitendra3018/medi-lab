import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPopup.css";

const RegisterPopup = () => {
    const navigate = useNavigate();

    const onFrameContainer6Click = useCallback(() => {
        navigate("/home-page-after-logging");
    }, [navigate]);

    return (
        <div className="register-popup-div">
            <div className="frame-div154">
                <div className="register-as-patient">Register as Patient</div>
                <div className="frame-div155">
                    <div className="frame-div156">
                        <div className="frame-div157">
                            <div className="group-div90">
                                <div className="rectangle-div61" />
                                <div className="email-div">Name</div>
                            </div>
                            <div className="group-div91">
                                <div className="rectangle-div62" />
                                <div className="email-div">Email</div>
                            </div>
                        </div>
                        <div className="frame-div157">
                            <div className="frame-div159">
                                <div className="group-div92">
                                    <div className="rectangle-div63" />
                                    <div className="phone-number-div">
                                        Phone Number
                                    </div>
                                </div>
                                <div className="group-div93">
                                    <div className="rectangle-div64" />
                                    <div className="gender-div">Gender</div>
                                </div>
                            </div>
                            <div className="group-div91">
                                <div className="rectangle-div62" />
                                <div className="phone-number-div">Address</div>
                            </div>
                        </div>
                        <div className="frame-div157">
                            <div className="group-div90">
                                <div className="rectangle-div61" />
                                <div className="phone-number-div">Password</div>
                            </div>
                            <div className="group-div91">
                                <div className="rectangle-div62" />
                                <div className="phone-number-div">
                                    Confirm Password
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group-div97">
                        <div className="rectangle-div68" />
                        <div className="i-agree-to-all-the-terms-and-c">
                            <span>{`I agree to all the `}</span>
                            <span className="terms-and-conditions">
                                Terms and Conditions
                            </span>
                        </div>
                    </div>
                </div>
                <div className="frame-div161">
                    <div
                        className="frame-div162"
                        onClick={onFrameContainer6Click}
                    >
                        <b className="sign-up-b">Sign Up</b>
                    </div>
                    <div className="already-a-user-login-now">
                        {`Already a user? `}
                        <span className="login-now-span">Login Now</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPopup;
