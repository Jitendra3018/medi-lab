import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
            <div className="footer-div2">
                <div className="group-div28">
                    <div className="frame-div47">
                        <img
                            className="standard-collection-122"
                            alt=""
                            src="../standard-collection-122.svg"
                        />
                        <div className="medilab-div2">MediLab</div>
                    </div>
                    <div className="frame-div48">
                        <div className="group-div29">
                            <b className="quick-links-b2">Quick Links</b>
                            <div className="frame-div49">
                                <div className="home-div4">Home</div>
                                <div className="home-div4">Consultation</div>
                                <div className="home-div4">Appointments</div>
                                <div className="home-div4">About Us</div>
                                <div className="home-div4">Contact Us</div>
                            </div>
                        </div>
                        <div className="group-div30">
                            <div className="group-div31">
                                <b className="hours-b2">Hours</b>
                                <div className="monday-div2">{`Monday:            `}</div>
                                <div className="div16">9:00 - 18:00</div>
                                <div className="div17">9:00 - 18:00</div>
                                <div className="div18">9:00 - 18:00</div>
                                <div className="div19">9:00 - 18:00</div>
                                <div className="div20">9:00 - 18:00</div>
                                <div className="thursday-div2">Thursday:</div>
                                <div className="friday-div2">Friday:</div>
                                <div className="tuesday-div2">{`Tuesday:            `}</div>
                                <div className="wednesday-div2">Wednesday:</div>
                            </div>
                        </div>
                        <div className="group-div32">
                            <div className="group-div31">
                                <div className="group-div31">
                                    <b className="hours-b2">Contact</b>
                                    <div className="div21">000-000-000</div>
                                    <div className="infoemailcom-div2">
                                        info@email.com
                                    </div>
                                    <div className="kalutara-south-div2">
                                        Kalutara South
                                    </div>
                                </div>
                            </div>
                            <img
                                className="vector-icon2"
                                alt=""
                                src="../vector.svg"
                            />
                            <img
                                className="phone-alt-icon2"
                                alt=""
                                src="../phonealt2.svg"
                            />
                            <img
                                className="location-arrow-icon2"
                                alt=""
                                src="../locationarrow2.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img className="ellipse-icon3" alt="" src="../ellipse-2.svg" />
            <b className="book-an-appointment2">Book an Appointment</b>
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
            <div className="frame-div56">
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
            <div className="frame-div63" onClick={onFrameContainer16Click}>
                <div className="phone-number1">Proceed to Payment</div>
                <img
                    className="arrow-right-2-icon2"
                    alt=""
                    src="../arrowright-22.svg"
                />
            </div>
            <div className="header-after-logging1">
                <div className="rectangle-div14" />
                <div className="frame-div64">
                    <div className="frame-div65">
                        <img
                            className="group-icon2"
                            alt=""
                            src="../group-99492.svg"
                        />
                        <div className="frame-div66">
                            <div
                                className="home-div5"
                                onClick={onHOMETextClick}
                            >
                                HOME
                            </div>
                            <div className="frame-div67">
                                <b className="home-div4">CONSULTATIONS</b>
                                <div className="line-div2" />
                            </div>
                            <div
                                className="home-div5"
                                onClick={onAPPOINTMENTSTextClick}
                            >
                                APPOINTMENTS
                            </div>
                            <div className="phone-number1">ABOUT</div>
                            <div className="phone-number1">CONTACT US</div>
                        </div>
                    </div>
                    <div className="frame-div68">
                        <div className="frame-div69">
                            <img
                                className="search-line-1-icon2"
                                alt=""
                                src="../searchline-12.svg"
                            />
                            <div className="search-div2">Search</div>
                        </div>
                        <img
                            className="rectangle-icon2"
                            alt=""
                            src="../rectangle@2x.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForLoggedInUserBookAppoi;
