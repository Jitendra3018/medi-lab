import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookAppointment.css";

const BookAppointment = () => {
    const navigate = useNavigate();

    const onFrameContainer3Click = useCallback(() => {
        navigate("/home-page-after-logging");
    }, [navigate]);

    const onHOMETextClick = useCallback(() => {
        navigate("/home-page-after-logging");
    }, [navigate]);

    const onAPPOINTMENTSTextClick = useCallback(() => {
        navigate("/appointments-upcoming");
    }, [navigate]);

    return (
        <div className="book-appointment-div">
            <div className="footer-div1">
                <div className="group-div14">
                    <div className="frame-div29">
                        <img
                            className="standard-collection-121"
                            alt=""
                            src="../standard-collection-121.svg"
                        />
                        <div className="medilab-div1">MediLab</div>
                    </div>
                    <div className="frame-div30">
                        <div className="group-div15">
                            <b className="quick-links-b1">Quick Links</b>
                            <div className="frame-div31">
                                <div className="appointments-div">Home</div>
                                <div className="appointments-div">
                                    Consultation
                                </div>
                                <div className="appointments-div">
                                    Appointments
                                </div>
                                <div className="appointments-div">About Us</div>
                                <div className="appointments-div">
                                    Contact Us
                                </div>
                            </div>
                        </div>
                        <div className="group-div16">
                            <div className="group-div17">
                                <b className="hours-b1">Hours</b>
                                <div className="monday-div1">{`Monday:            `}</div>
                                <div className="div9">9:00 - 18:00</div>
                                <div className="div10">9:00 - 18:00</div>
                                <div className="div11">9:00 - 18:00</div>
                                <div className="div12">9:00 - 18:00</div>
                                <div className="div13">9:00 - 18:00</div>
                                <div className="thursday-div1">Thursday:</div>
                                <div className="friday-div1">Friday:</div>
                                <div className="tuesday-div1">{`Tuesday:            `}</div>
                                <div className="wednesday-div1">Wednesday:</div>
                            </div>
                        </div>
                        <div className="group-div18">
                            <div className="group-div17">
                                <div className="group-div17">
                                    <b className="hours-b1">Contact</b>
                                    <div className="div14">000-000-000</div>
                                    <div className="infoemailcom-div1">
                                        info@email.com
                                    </div>
                                    <div className="kalutara-south-div1">
                                        Kalutara South
                                    </div>
                                </div>
                            </div>
                            <img
                                className="vector-icon1"
                                alt=""
                                src="../vector1.svg"
                            />
                            <img
                                className="phone-alt-icon1"
                                alt=""
                                src="../phonealt1.svg"
                            />
                            <img
                                className="location-arrow-icon1"
                                alt=""
                                src="../locationarrow1.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img className="ellipse-icon1" alt="" src="../ellipse-21.svg" />
            <b className="thank-you-b">THANK YOU</b>
            <b className="for-booking-the-appointment">
                for booking the appointment
            </b>
            <div className="frame-div32" onClick={onFrameContainer3Click}>
                <div className="back-to-home">Back to Home</div>
                <img
                    className="arrow-right-2-icon1"
                    alt=""
                    src="../arrowright-21.svg"
                />
            </div>
            <img
                className="tick-circle-1-icon"
                alt=""
                src="../tickcircle-1.svg"
            />
            <div className="header-after-logging">
                <div className="rectangle-div7" />
                <div className="frame-div33">
                    <div className="frame-div34">
                        <img
                            className="group-icon1"
                            alt=""
                            src="../group-99491.svg"
                        />
                        <div className="frame-div35">
                            <div
                                className="home-div3"
                                onClick={onHOMETextClick}
                            >
                                HOME
                            </div>
                            <div className="frame-div36">
                                <b className="appointments-div">
                                    CONSULTATIONS
                                </b>
                                <div className="line-div1" />
                            </div>
                            <div
                                className="home-div3"
                                onClick={onAPPOINTMENTSTextClick}
                            >
                                APPOINTMENTS
                            </div>
                            <div className="back-to-home">ABOUT</div>
                            <div className="back-to-home">CONTACT US</div>
                        </div>
                    </div>
                    <div className="frame-div37">
                        <div className="frame-div38">
                            <img
                                className="search-line-1-icon1"
                                alt=""
                                src="../searchline-11.svg"
                            />
                            <div className="search-div1">Search</div>
                        </div>
                        <img
                            className="rectangle-icon"
                            alt=""
                            src="../rectangle@2x.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;
