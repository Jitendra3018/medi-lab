import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentsUpcoming.css";

const AppointmentsUpcoming = () => {
    const navigate = useNavigate();

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

    const onFrameContainer8Click = useCallback(() => {
        navigate("/appointments-finished");
    }, [navigate]);

    return (
        <div className="appointments-upcoming-div">
            <div className="footer-div4">
                <div className="group-div68">
                    <div className="frame-div105">
                        <img
                            className="standard-collection-124"
                            alt=""
                            src="../standard-collection-124.svg"
                        />
                        <div className="covid-related-div">MediLab</div>
                    </div>
                    <div className="frame-div106">
                        <div className="group-div69">
                            <b className="quick-links-b4">Quick Links</b>
                            <div className="frame-div107">
                                <div className="home-div8">Home</div>
                                <div className="home-div8">Consultation</div>
                                <div className="home-div8">Appointments</div>
                                <div className="home-div8">About Us</div>
                                <div className="home-div8">Contact Us</div>
                            </div>
                        </div>
                        <div className="group-div70">
                            <div className="group-div71">
                                <b className="hours-b4">Hours</b>
                                <div className="monday-div4">{`Monday:            `}</div>
                                <div className="div31">9:00 - 18:00</div>
                                <div className="div32">9:00 - 18:00</div>
                                <div className="div33">9:00 - 18:00</div>
                                <div className="div34">9:00 - 18:00</div>
                                <div className="div35">9:00 - 18:00</div>
                                <div className="thursday-div4">Thursday:</div>
                                <div className="friday-div4">Friday:</div>
                                <div className="tuesday-div4">{`Tuesday:            `}</div>
                                <div className="wednesday-div4">Wednesday:</div>
                            </div>
                        </div>
                        <div className="group-div72">
                            <div className="group-div71">
                                <div className="group-div71">
                                    <b className="hours-b4">Contact</b>
                                    <div className="div36">000-000-000</div>
                                    <div className="infoemailcom-div4">
                                        info@email.com
                                    </div>
                                    <div className="kalutara-south-div4">
                                        Kalutara South
                                    </div>
                                </div>
                            </div>
                            <img
                                className="vector-icon4"
                                alt=""
                                src="../vector3.svg"
                            />
                            <img
                                className="phone-alt-icon4"
                                alt=""
                                src="../phonealt4.svg"
                            />
                            <img
                                className="location-arrow-icon4"
                                alt=""
                                src="../locationarrow4.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img className="ellipse-icon5" alt="" src="../ellipse-24.svg" />
            <div className="hero-section-div1">
                <div className="frame-div108">
                    <div className="frame-div109">
                        <b className="providing-care-changing-a-lif1">
                            Providing care, changing a life
                        </b>
                        <div className="lorem-media-is-a-full-service1">
                            Lorem Media is a full-service social media agency.
                            We offer businesses innovative solutions that
                            deliver the right type of audience to you in the
                            most effective strategies possible.
                        </div>
                    </div>
                    <div
                        className="frame-div110"
                        onClick={onFrameContainer4Click}
                    >
                        <div className="browse-more-div1">Browse More</div>
                        <img
                            className="arrow-right-1-icon1"
                            alt=""
                            src="../arrowright-1.svg"
                        />
                    </div>
                </div>
                <img
                    className="gynecology-consultationcuate-icon1"
                    alt=""
                    src="../gynecologyconsultationcuate1.svg"
                />
            </div>
            <div className="frame-div111" onClick={onFrameContainer6Click}>
                <b className="home-div8">Book an New Appointment now</b>
            </div>
            <div
                className="appointments-div8"
                data-scroll-to="appointmentsContainer"
            >
                <div className="frame-div112">
                    <div className="covid-related-div">Appointments</div>
                    <div className="frame-div113">
                        <div className="frame-div114">
                            <div className="upcoming-div1">Upcoming</div>
                        </div>
                        <div
                            className="frame-div115"
                            onClick={onFrameContainer8Click}
                        >
                            <div className="finished-div1">Finished</div>
                        </div>
                    </div>
                </div>
                <div className="frame-div116">
                    <div className="frame-div117">
                        <div className="frame-div118">
                            <div className="frame-div119">
                                <div className="frame-div120">
                                    <div className="group-div75">
                                        <div className="rectangle-div47" />
                                        <div className="rectangle-div48" />
                                        <b className="b6">10</b>
                                        <div className="nov-div4">Nov</div>
                                        <div className="rectangle-div49" />
                                        <div className="rectangle-div50" />
                                    </div>
                                    <div className="frame-div121">
                                        <div className="covid-related-div">
                                            Covid related
                                        </div>
                                        <div className="amet-minim-mollit-non-deserunt6">
                                            Amet minim mollit non deserunt
                                            ullamco est sit aliqua dolor.
                                        </div>
                                    </div>
                                </div>
                                <div className="frame-div122">
                                    <div className="frame-div123">
                                        <img
                                            className="edit-2-icon"
                                            alt=""
                                            src="../edit-2.svg"
                                        />
                                        <img
                                            className="edit-2-icon"
                                            alt=""
                                            src="../edit-1.svg"
                                        />
                                    </div>
                                    <div className="am-div2">9:45 AM</div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-div118">
                            <div className="frame-div119">
                                <div className="frame-div120">
                                    <div className="group-div75">
                                        <div className="rectangle-div47" />
                                        <div className="rectangle-div48" />
                                        <b className="b7">15</b>
                                        <div className="nov-div5">Nov</div>
                                        <div className="rectangle-div49" />
                                        <div className="rectangle-div50" />
                                    </div>
                                    <div className="frame-div121">
                                        <div className="covid-related-div">
                                            Regular Checkups
                                        </div>
                                        <div className="amet-minim-mollit-non-deserunt7">
                                            Amet minim mollit non deserunt
                                            ullamco est sit aliqua dolor. Amet
                                            minim mollit non deserunt ullamco
                                            est sit aliqua dolor.
                                        </div>
                                    </div>
                                </div>
                                <div className="frame-div122">
                                    <div className="frame-div123">
                                        <img
                                            className="edit-2-icon"
                                            alt=""
                                            src="../edit-2.svg"
                                        />
                                        <img
                                            className="edit-2-icon"
                                            alt=""
                                            src="../edit-11.svg"
                                        />
                                    </div>
                                    <div className="am-div2">11:15 AM</div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-div118">
                            <div className="frame-div119">
                                <div className="frame-div120">
                                    <div className="group-div75">
                                        <div className="rectangle-div47" />
                                        <div className="rectangle-div48" />
                                        <b className="b8">1</b>
                                        <div className="nov-div5">Dec</div>
                                        <div className="rectangle-div49" />
                                        <div className="rectangle-div50" />
                                    </div>
                                    <div className="frame-div121">
                                        <div className="covid-related-div">
                                            Eye Checkup
                                        </div>
                                        <div className="amet-minim-mollit-non-deserunt7">
                                            Amet minim mollit non deserunt
                                            ullamco est sit aliqua dolor. Amet
                                            minim mollit non deserunt ullamco
                                            est sit aliqua dolor.
                                        </div>
                                    </div>
                                </div>
                                <div className="frame-div122">
                                    <div className="frame-div123">
                                        <img
                                            className="edit-2-icon"
                                            alt=""
                                            src="../edit-22.svg"
                                        />
                                        <img
                                            className="edit-2-icon"
                                            alt=""
                                            src="../edit-11.svg"
                                        />
                                    </div>
                                    <div className="am-div2">2:30 AM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-after-logging3">
                <div className="rectangle-div59" />
                <div className="frame-div136">
                    <div className="frame-div137">
                        <img
                            className="group-icon4"
                            alt=""
                            src="../group-99494.svg"
                        />
                        <div className="frame-div138">
                            <div className="am-div2">HOME</div>
                            <div className="am-div2">CONSULTATIONS</div>
                            <div className="frame-div139">
                                <b className="home-div8">APPOINTMENTS</b>
                                <div className="line-div4" />
                            </div>
                            <div className="am-div2">ABOUT</div>
                            <div className="am-div2">CONTACT US</div>
                        </div>
                    </div>
                    <div className="frame-div140">
                        <div className="frame-div141">
                            <img
                                className="search-line-1-icon4"
                                alt=""
                                src="../searchline-14.svg"
                            />
                            <div className="search-div4">Search</div>
                        </div>
                        <img
                            className="rectangle-icon4"
                            alt=""
                            src="../rectangle@2x.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsUpcoming;
