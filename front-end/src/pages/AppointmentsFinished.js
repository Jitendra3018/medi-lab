import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FeedbackPopup from "../components/FeedbackPopup";
import PortalPopup from "../components/PortalPopup";
import "./AppointmentsFinished.css";

const AppointmentsFinished = () => {
    const navigate = useNavigate();
    const [isFeedbackPopupOpen, setFeedbackPopupOpen] = useState(false);

    const onFrameContainer4Click = useCallback(() => {
        const anchor = document.querySelector(
            "[data-scroll-to='appointmentsContainer']"
        );
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }, []);

    const onFrameContainer6Click = useCallback(() => {
        navigate("/for-logged-in-user-book-appointment");
    }, [navigate]);

    const onFrameContainer7Click = useCallback(() => {
        navigate("/appointments-upcoming");
    }, [navigate]);

    const openFeedbackPopup = useCallback(() => {
        setFeedbackPopupOpen(true);
    }, []);

    const closeFeedbackPopup = useCallback(() => {
        setFeedbackPopupOpen(false);
    }, []);

    return (
        <>
            <div className="appointments-finished-div">
                <div className="footer-div3">
                    <div className="group-div41">
                        <div className="frame-div70">
                            <img
                                className="standard-collection-123"
                                alt=""
                                src="../standard-collection-123.svg"
                            />
                            <div className="medilab-div3">MediLab</div>
                        </div>
                        <div className="frame-div71">
                            <div className="group-div42">
                                <b className="quick-links-b3">Quick Links</b>
                                <div className="frame-div72">
                                    <div className="book-an-new-appointment-now">
                                        Home
                                    </div>
                                    <div className="book-an-new-appointment-now">
                                        Consultation
                                    </div>
                                    <div className="book-an-new-appointment-now">
                                        Appointments
                                    </div>
                                    <div className="book-an-new-appointment-now">
                                        About Us
                                    </div>
                                    <div className="book-an-new-appointment-now">
                                        Contact Us
                                    </div>
                                </div>
                            </div>
                            <div className="group-div43">
                                <div className="group-div44">
                                    <b className="hours-b3">Hours</b>
                                    <div className="monday-div3">{`Monday:            `}</div>
                                    <div className="div25">9:00 - 18:00</div>
                                    <div className="div26">9:00 - 18:00</div>
                                    <div className="div27">9:00 - 18:00</div>
                                    <div className="div28">9:00 - 18:00</div>
                                    <div className="div29">9:00 - 18:00</div>
                                    <div className="thursday-div3">
                                        Thursday:
                                    </div>
                                    <div className="friday-div3">Friday:</div>
                                    <div className="tuesday-div3">{`Tuesday:            `}</div>
                                    <div className="wednesday-div3">
                                        Wednesday:
                                    </div>
                                </div>
                            </div>
                            <div className="group-div45">
                                <div className="group-div44">
                                    <div className="group-div44">
                                        <b className="hours-b3">Contact</b>
                                        <div className="div30">000-000-000</div>
                                        <div className="infoemailcom-div3">
                                            info@email.com
                                        </div>
                                        <div className="kalutara-south-div3">
                                            Kalutara South
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className="vector-icon3"
                                    alt=""
                                    src="../vector3.svg"
                                />
                                <img
                                    className="phone-alt-icon3"
                                    alt=""
                                    src="../phonealt3.svg"
                                />
                                <img
                                    className="location-arrow-icon3"
                                    alt=""
                                    src="../locationarrow3.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <img className="ellipse-icon4" alt="" src="../ellipse-23.svg" />
                <div className="hero-section-div">
                    <div className="frame-div73">
                        <div className="frame-div74">
                            <b className="providing-care-changing-a-lif">
                                Providing care, changing a life
                            </b>
                            <div className="lorem-media-is-a-full-service">
                                Lorem Media is a full-service social media
                                agency. We offer businesses innovative solutions
                                that deliver the right type of audience to you
                                in the most effective strategies possible.
                            </div>
                        </div>
                        <div
                            className="frame-div75"
                            onClick={onFrameContainer4Click}
                        >
                            <div className="browse-more-div">Browse More</div>
                            <img
                                className="arrow-right-1-icon"
                                alt=""
                                src="../arrowright-1.svg"
                            />
                        </div>
                    </div>
                    <img
                        className="gynecology-consultationcuate-icon"
                        alt=""
                        src="../gynecologyconsultationcuate.svg"
                    />
                </div>
                <div className="frame-div76" onClick={onFrameContainer6Click}>
                    <b className="book-an-new-appointment-now">
                        Book an New Appointment now
                    </b>
                </div>
                <div
                    className="appointments-div5"
                    data-scroll-to="appointmentsContainer"
                >
                    <div className="frame-div77">
                        <div className="medilab-div3">Appointments</div>
                        <div className="frame-div78">
                            <div
                                className="frame-div79"
                                onClick={onFrameContainer7Click}
                            >
                                <div className="upcoming-div">Upcoming</div>
                            </div>
                            <div className="frame-div80">
                                <div className="finished-div">Finished</div>
                            </div>
                        </div>
                    </div>
                    <div className="group-div48">
                        <div className="rectangle-div15" />
                        <div className="group-div49">
                            <div className="group-div50">
                                <div className="rectangle-div16" />
                                <div className="frame-div81">
                                    <div className="frame-div82">
                                        <div className="group-div51">
                                            <div className="group-div52">
                                                <div className="rectangle-div17" />
                                                <div className="rectangle-div18" />
                                                <b className="b">10</b>
                                                <div className="nov-div">
                                                    Nov
                                                </div>
                                                <div className="rectangle-div19" />
                                                <div className="rectangle-div20" />
                                            </div>
                                            <div className="checkups-div">
                                                Checkups
                                            </div>
                                        </div>
                                        <div className="amet-minim-mollit-non-deserunt">
                                            Amet minim mollit non deserunt
                                            ullamco est sit aliqua dolor do amet
                                            sint.
                                        </div>
                                    </div>
                                    <div
                                        className="frame-div83"
                                        onClick={openFeedbackPopup}
                                    >
                                        <b className="book-an-new-appointment-now">
                                            Give Feedback
                                        </b>
                                    </div>
                                </div>
                            </div>
                            <div className="group-div53">
                                <div className="rectangle-div16" />
                                <div className="frame-div81">
                                    <div className="frame-div82">
                                        <div className="group-div51">
                                            <div className="group-div52">
                                                <div className="rectangle-div17" />
                                                <div className="rectangle-div18" />
                                                <b className="b">10</b>
                                                <div className="nov-div">
                                                    Nov
                                                </div>
                                                <div className="rectangle-div19" />
                                                <div className="rectangle-div20" />
                                            </div>
                                            <div className="checkups-div">
                                                Checkups
                                            </div>
                                        </div>
                                        <div className="amet-minim-mollit-non-deserunt">
                                            Amet minim mollit non deserunt
                                            ullamco est sit aliqua dolor do amet
                                            sint.
                                        </div>
                                    </div>
                                    <div className="frame-div86">
                                        <b className="book-an-new-appointment-now">
                                            Give Feedback
                                        </b>
                                    </div>
                                </div>
                            </div>
                            <div className="group-div56">
                                <div className="rectangle-div16" />
                                <div className="frame-div81">
                                    <div className="frame-div88">
                                        <div className="group-div51">
                                            <div className="group-div52">
                                                <div className="rectangle-div17" />
                                                <div className="rectangle-div18" />
                                                <b className="b2">15</b>
                                                <div className="nov-div">
                                                    Nov
                                                </div>
                                                <div className="rectangle-div19" />
                                                <div className="rectangle-div20" />
                                            </div>
                                            <div className="checkups-div">
                                                Checkups
                                            </div>
                                        </div>
                                        <div className="amet-minim-mollit-non-deserunt">
                                            Amet minim mollit non deserunt
                                            ullamco est sit aliqua dolor do amet
                                            sint.
                                        </div>
                                    </div>
                                    <div className="frame-div86">
                                        <b className="book-an-new-appointment-now">
                                            Give Feedback
                                        </b>
                                    </div>
                                </div>
                            </div>
                            <div className="group-div59">
                                <div className="rectangle-div16" />
                                <div className="frame-div81">
                                    <div className="frame-div88">
                                        <div className="group-div51">
                                            <div className="group-div52">
                                                <div className="rectangle-div17" />
                                                <div className="rectangle-div18" />
                                                <b className="b2">15</b>
                                                <div className="nov-div">
                                                    Nov
                                                </div>
                                                <div className="rectangle-div19" />
                                                <div className="rectangle-div20" />
                                            </div>
                                            <div className="checkups-div">
                                                Checkups
                                            </div>
                                        </div>
                                        <div className="amet-minim-mollit-non-deserunt">
                                            Amet minim mollit non deserunt
                                            ullamco est sit aliqua dolor do amet
                                            sint.
                                        </div>
                                    </div>
                                    <div className="frame-div86">
                                        <b className="book-an-new-appointment-now">
                                            Give Feedback
                                        </b>
                                    </div>
                                </div>
                            </div>
                            <div className="group-div62">
                                <div className="rectangle-div16" />
                                <div className="frame-div93">
                                    <div className="frame-div94">
                                        <div className="group-div63">
                                            <div className="group-div52">
                                                <div className="rectangle-div17" />
                                                <div className="rectangle-div18" />
                                                <b className="b4">1</b>
                                                <div className="dec-div">
                                                    Dec
                                                </div>
                                                <div className="rectangle-div19" />
                                                <div className="rectangle-div20" />
                                            </div>
                                            <div className="checkups-div4">
                                                Checkups
                                            </div>
                                        </div>
                                        <div className="amet-minim-mollit-non-deserunt">
                                            Amet minim mollit non deserunt
                                            ullamco est sit aliqua dolor do amet
                                            sint.
                                        </div>
                                    </div>
                                    <div className="frame-div86">
                                        <b className="book-an-new-appointment-now">
                                            Give Feedback
                                        </b>
                                    </div>
                                </div>
                            </div>
                            <div className="group-div65">
                                <div className="rectangle-div16" />
                                <div className="frame-div93">
                                    <div className="frame-div94">
                                        <div className="group-div63">
                                            <div className="group-div52">
                                                <div className="rectangle-div17" />
                                                <div className="rectangle-div18" />
                                                <b className="b4">1</b>
                                                <div className="dec-div">
                                                    Dec
                                                </div>
                                                <div className="rectangle-div19" />
                                                <div className="rectangle-div20" />
                                            </div>
                                            <div className="checkups-div4">
                                                Checkups
                                            </div>
                                        </div>
                                        <div className="amet-minim-mollit-non-deserunt">
                                            Amet minim mollit non deserunt
                                            ullamco est sit aliqua dolor do amet
                                            sint.
                                        </div>
                                    </div>
                                    <div className="frame-div86">
                                        <b className="book-an-new-appointment-now">
                                            Give Feedback
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-after-logging2">
                    <div className="rectangle-div46" />
                    <div className="frame-div99">
                        <div className="frame-div100">
                            <img
                                className="group-icon3"
                                alt=""
                                src="../group-99493.svg"
                            />
                            <div className="frame-div101">
                                <div className="consultations-div">HOME</div>
                                <div className="consultations-div">
                                    CONSULTATIONS
                                </div>
                                <div className="frame-div102">
                                    <b className="book-an-new-appointment-now">
                                        APPOINTMENTS
                                    </b>
                                    <div className="line-div3" />
                                </div>
                                <div className="consultations-div">ABOUT</div>
                                <div className="consultations-div">
                                    CONTACT US
                                </div>
                            </div>
                        </div>
                        <div className="frame-div103">
                            <div className="frame-div104">
                                <img
                                    className="search-line-1-icon3"
                                    alt=""
                                    src="../searchline-13.svg"
                                />
                                <div className="search-div3">Search</div>
                            </div>
                            <img
                                className="rectangle-icon3"
                                alt=""
                                src="../rectangle@2x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {isFeedbackPopupOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeFeedbackPopup}
                >
                    <FeedbackPopup onClose={closeFeedbackPopup} />
                </PortalPopup>
            )}
        </>
    );
};

export default AppointmentsFinished;
