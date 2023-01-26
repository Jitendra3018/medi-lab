import { useState, useCallback } from "react";
import LoginPopup from "../components/LoginPopup";
import PortalPopup from "../components/PortalPopup";
import "./ForNotLoggedInUserBookA.css";

const ForNotLoggedInUserBookA = () => {
    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

    const openLoginPopup = useCallback(() => {
        setLoginPopupOpen(true);
    }, []);

    const closeLoginPopup = useCallback(() => {
        setLoginPopupOpen(false);
    }, []);

    return (
        <>
            <div className="for-not-logged-in-user-book-a">
                <div className="footer-div">
                    <div className="group-div">
                        <div className="frame-div">
                            <img
                                className="standard-collection-12"
                                alt=""
                                src="../standard-collection-12.svg"
                            />
                            <div className="medilab-div">MediLab</div>
                        </div>
                        <div className="frame-div1">
                            <div className="group-div1">
                                <b className="quick-links-b">Quick Links</b>
                                <div className="frame-div2">
                                    <div className="home-div">Home</div>
                                    <div className="home-div">Consultation</div>
                                    <div className="home-div">About Us</div>
                                    <div className="home-div">Contact Us</div>
                                </div>
                            </div>
                            <div className="group-div2">
                                <div className="group-div3">
                                    <b className="hours-b">Hours</b>
                                    <div className="monday-div">{`Monday:            `}</div>
                                    <div className="div">9:00 - 18:00</div>
                                    <div className="div1">9:00 - 18:00</div>
                                    <div className="div2">9:00 - 18:00</div>
                                    <div className="div3">9:00 - 18:00</div>
                                    <div className="div4">9:00 - 18:00</div>
                                    <div className="thursday-div">
                                        Thursday:
                                    </div>
                                    <div className="friday-div">Friday:</div>
                                    <div className="tuesday-div">{`Tuesday:            `}</div>
                                    <div className="wednesday-div">
                                        Wednesday:
                                    </div>
                                </div>
                            </div>
                            <div className="group-div4">
                                <div className="group-div3">
                                    <div className="group-div3">
                                        <b className="hours-b">Contact</b>
                                        <div className="div5">000-000-000</div>
                                        <div className="infoemailcom-div">
                                            info@email.com
                                        </div>
                                        <div className="kalutara-south-div">
                                            Kalutara South
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className="vector-icon"
                                    alt=""
                                    src="../vector.svg"
                                />
                                <img
                                    className="phone-alt-icon"
                                    alt=""
                                    src="../phonealt.svg"
                                />
                                <img
                                    className="location-arrow-icon"
                                    alt=""
                                    src="../locationarrow.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <img className="ellipse-icon" alt="" src="../ellipse-2.svg" />
                <b className="book-an-appointment">Book an Appointment</b>
                <div className="frame-div3">
                    <div className="group-div7">
                        <div className="rectangle-div" />
                        <div className="jitendra-garg-div">+91-1234567890</div>
                        <div className="frame-div4">
                            <div className="phone-number">
                                <span>{`Phone Number `}</span>
                                <span className="span">*</span>
                            </div>
                        </div>
                    </div>
                    <div className="group-div7">
                        <div className="rectangle-div" />
                        <div className="div7">__ / __ / ____</div>
                        <img
                            className="calendar-1-icon"
                            alt=""
                            src="../calendar-1.svg"
                        />
                        <div className="frame-div4">
                            <div className="phone-number">
                                <span>{`Date `}</span>
                                <span className="span">*</span>
                            </div>
                        </div>
                    </div>
                    <div className="group-div7">
                        <div className="rectangle-div" />
                        <div className="div7">__ : __</div>
                        <div className="frame-div6">
                            <div className="frame-div7">
                                <div className="phone-number">AM</div>
                            </div>
                            <div className="frame-div8">
                                <div className="phone-number">PM</div>
                            </div>
                        </div>
                        <div className="frame-div4">
                            <div className="phone-number">
                                <span>{`Time `}</span>
                                <span className="span">*</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame-div10">
                    <div className="frame-div11">
                        <div className="group-div7">
                            <div className="rectangle-div" />
                            <div className="jitendra-garg-div">
                                Jitendra Garg
                            </div>
                            <div className="frame-div4">
                                <div className="phone-number">
                                    <span>{`Name `}</span>
                                    <span className="span">*</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-div11">
                        <div className="group-div7">
                            <div className="rectangle-div" />
                            <div className="jitendra-garg-div">
                                Dr. John Wick
                            </div>
                            <div className="frame-div4">
                                <div className="phone-number">
                                    <span>{`Doctor’s Name `}</span>
                                    <span className="span">*</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-div11">
                        <div className="group-div7">
                            <div className="rectangle-div" />
                            <div className="jitendra-garg-div">abc@pqr.xyz</div>
                            <div className="frame-div4">
                                <div className="phone-number">
                                    <span>{`Email Id `}</span>
                                    <span className="span">*</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame-div17">
                    <div className="phone-number">Proceed to Payment</div>
                    <img
                        className="arrow-right-2-icon"
                        alt=""
                        src="../arrowright-2.svg"
                    />
                </div>
                <div className="frame-div18">
                    <div className="frame-div19">
                        <b className="home-div">
                            Please Login to book an appointment
                        </b>
                        <div className="frame-div20" onClick={openLoginPopup}>
                            <b className="login-b">LOGIN</b>
                        </div>
                    </div>
                </div>
                <div className="header-before-logging">
                    <div className="rectangle-div6" />
                    <div className="frame-div21">
                        <div className="frame-div22">
                            <img
                                className="group-icon"
                                alt=""
                                src="../group-9949.svg"
                            />
                            <div className="frame-div23">
                                <div className="phone-number">HOME</div>
                                <div className="frame-div24">
                                    <b className="home-div">CONSULTATIONS</b>
                                    <div className="line-div" />
                                </div>
                                <div className="phone-number">ABOUT</div>
                                <div className="phone-number">CONTACT US</div>
                            </div>
                        </div>
                        <div className="frame-div25">
                            <div className="frame-div26">
                                <img
                                    className="search-line-1-icon"
                                    alt=""
                                    src="../searchline-1.svg"
                                />
                                <div className="search-div">Search</div>
                            </div>
                            <div className="frame-div27">
                                <div className="phone-number">LOGIN</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isLoginPopupOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeLoginPopup}
                >
                    <LoginPopup onClose={closeLoginPopup} />
                </PortalPopup>
            )}
        </>
    );
};

export default ForNotLoggedInUserBookA;
