import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./ForLoggedInUserBookAppoi.css";

const ForLoggedInUserBookAppoi = () => {
    const navigate = useNavigate();

    const onFrameContainer16Click = useCallback(() => {
        navigate("/book-appointment");
    }, [navigate]);

    const onHOMETextClick = useCallback(() => {
        navigate("/home-page-after-logging");
    }, [navigate]);

    const onAPPOINTMENTSTextClick = useCallback(() => {
        navigate("/appointments-upcoming");
    }, [navigate]);

    return (
        <div className="for-logged-in-user-book-appoi">
            <Footer />
            <b className="book-an-appointment2">Book an Appointment</b>

            {/* Phone Number */}
            <div className="group-div35">
                <div className="rectangle-div8" />
                <div className="div22">+91-1234567890</div>
                <div className="frame-div50">
                    <div className="phone-number1">
                        <span>{`Phone Number `}</span>
                        <span className="span6">*</span>
                    </div>
                </div>
            </div>

            {/* Date */}
            <div className="group-div36">
                <div className="rectangle-div8" />
                <div className="div23">__ / __ / ____</div>
                <img
                    className="calendar-1-icon1"
                    alt=""
                    src="../calendar-11.svg"
                />
                <div className="frame-div50">
                    <div className="phone-number1">
                        <span>{`Date `}</span>
                        <span className="span6">*</span>
                    </div>
                </div>
            </div>

            {/* Time */}
            <div className="group-div37">
                <div className="rectangle-div8" />
                <div className="div23">__ : __</div>
                <div className="frame-div52">
                    <div className="frame-div53">
                        <div className="phone-number1">AM</div>
                    </div>
                    <div className="frame-div54">
                        <div className="phone-number1">PM</div>
                    </div>
                </div>
                <div className="frame-div50">
                    <div className="phone-number1">
                        <span>{`Time `}</span>
                        <span className="span6">*</span>
                    </div>
                </div>
            </div>

            {/* Names */}
            <div className="frame-div56">
                {/* User's Name */}
                <div className="frame-div57">
                    <div className="group-div38">
                        <div className="rectangle-div8" />
                        <div className="div22">Jitendra Garg</div>
                        <div className="frame-div50">
                            <div className="phone-number1">
                                <span>{`Name `}</span>
                                <span className="span6">*</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Doctor's Name */}
                <div className="frame-div57">
                    <div className="group-div38">
                        <div className="rectangle-div8" />
                        <div className="div22">Dr. John Wick</div>
                        <div className="frame-div50">
                            <div className="phone-number1">
                                <span>{`Doctor’s Name `}</span>
                                <span className="span6">*</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Email Address of the User */}
                <div className="frame-div57">
                    <div className="group-div38">
                        <div className="rectangle-div8" />
                        <div className="div22">abc@pqr.xyz</div>
                        <div className="frame-div50">
                            <div className="phone-number1">
                                <span>{`Email Id `}</span>
                                <span className="span6">*</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Button */}
            <div className="frame-div63" onClick={onFrameContainer16Click}>
                <div className="phone-number1">Proceed to Payment</div>
                <img
                    className="arrow-right-2-icon2"
                    alt=""
                    src="../arrowright-22.svg"
                />
            </div>
            <Header login />
        </div>
    );
};

export default ForLoggedInUserBookAppoi;
