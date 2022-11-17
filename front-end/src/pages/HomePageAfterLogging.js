import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MedicineDetailsPopup from "../components/MedicineDetailsPopup";
import PortalPopup from "../components/PortalPopup";
import ForLoggedInUserDoctorsD from "../components/ForLoggedInUserDoctorsD";
import "./HomePageAfterLogging.css";

const HomePageAfterLogging = () => {
    const navigate = useNavigate();
    const [isMedicineDetailsPopupOpen, setMedicineDetailsPopupOpen] =
        useState(false);
    const [isForLoggedInUserDoctorsDOpen, setForLoggedInUserDoctorsDOpen] =
        useState(false);

    const onConsultationTextClick = useCallback(() => {
        navigate("/for-logged-in-user-book-appointment");
    }, [navigate]);

    const onFrameButtonClick = useCallback(() => {
        const anchor = document.querySelector(
            "[data-scroll-to='popularProductsContainer']"
        );
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }, []);

    const openMedicineDetailsPopup = useCallback(() => {
        setMedicineDetailsPopupOpen(true);
    }, []);

    const closeMedicineDetailsPopup = useCallback(() => {
        setMedicineDetailsPopupOpen(false);
    }, []);

    const openForLoggedInUserDoctorsD = useCallback(() => {
        setForLoggedInUserDoctorsDOpen(true);
    }, []);

    const closeForLoggedInUserDoctorsD = useCallback(() => {
        setForLoggedInUserDoctorsDOpen(false);
    }, []);

    const onCONSULTATIONSTextClick = useCallback(() => {
        navigate("/for-logged-in-user-book-appointment");
    }, [navigate]);

    const onAPPOINTMENTSTextClick = useCallback(() => {
        navigate("/appointments-upcoming");
    }, [navigate]);

    return (
        <>
            <div className="home-page-after-logging">
                <div className="footer-div5">
                    <div className="group-div101">
                        <div className="frame-div168">
                            <img
                                className="standard-collection-125"
                                alt=""
                                src="../standard-collection-125.svg"
                            />
                            <div className="medilab-div5">MediLab</div>
                        </div>
                        <div className="frame-div169">
                            <div className="group-div102">
                                <b className="quick-links-b5">Quick Links</b>
                                <div className="frame-div170">
                                    <div className="home-b">Home</div>
                                    <div
                                        className="consultation-div5"
                                        onClick={onConsultationTextClick}
                                    >
                                        Consultation
                                    </div>
                                    <div className="home-b">Appointments</div>
                                    <div className="home-b">About Us</div>
                                    <div className="home-b">Contact Us</div>
                                </div>
                            </div>
                            <div className="group-div103">
                                <div className="group-div104">
                                    <b className="hours-b5">Hours</b>
                                    <div className="monday-div5">{`Monday:            `}</div>
                                    <div className="div38">9:00 - 18:00</div>
                                    <div className="div39">9:00 - 18:00</div>
                                    <div className="div40">9:00 - 18:00</div>
                                    <div className="div41">9:00 - 18:00</div>
                                    <div className="div42">9:00 - 18:00</div>
                                    <div className="thursday-div5">
                                        Thursday:
                                    </div>
                                    <div className="friday-div5">Friday:</div>
                                    <div className="tuesday-div5">{`Tuesday:            `}</div>
                                    <div className="wednesday-div5">
                                        Wednesday:
                                    </div>
                                </div>
                            </div>
                            <div className="group-div105">
                                <div className="group-div104">
                                    <div className="group-div104">
                                        <b className="hours-b5">Contact</b>
                                        <div className="div43">000-000-000</div>
                                        <div className="infoemailcom-div5">
                                            info@email.com
                                        </div>
                                        <div className="kalutara-south-div5">
                                            Kalutara South
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="vector-input"
                                    type="checkbox"
                                    readOnly
                                />
                                <img
                                    className="phone-alt-icon5"
                                    alt=""
                                    src="../phonealt5.svg"
                                />
                                <button
                                    className="location-arrow-button"
                                    autoFocus
                                >
                                    <img
                                        className="vector-icon5"
                                        alt=""
                                        src="../vector5.svg"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="ellipse-icon7" alt="" src="../ellipse-23.svg" />
                <div className="hero-section-div2">
                    <div className="frame-div171">
                        <div className="frame-div172">
                            <b className="empowering-people-to-improve-t">
                                Empowering People to Improve Their Lives
                            </b>
                            <div className="lorem-media-is-a-full-service2">
                                Lorem Media is a full-service social media
                                agency. We offer businesses innovative solutions
                                that deliver the right type of audience to you
                                in the most effective strategies possible.
                            </div>
                        </div>
                        <button
                            className="frame-button"
                            autoFocus
                            onClick={onFrameButtonClick}
                        >
                            <button className="browse-more-button" autoFocus>
                                Browse More
                            </button>
                            <img
                                className="arrow-right-1-icon2"
                                alt=""
                                src="../arrowright-12.svg"
                            />
                        </button>
                    </div>
                    <img
                        className="doctorscuate-icon"
                        alt=""
                        src="../doctorscuate.svg"
                    />
                </div>
                <div className="popular-products-div">
                    <div className="popular-products-div1">
                        Popular Products
                    </div>
                    <div className="frame-div173">
                        <div className="frame-div174">
                            <div className="group-div108">
                                <div className="rectangle-div72" />
                                <img
                                    className="image-1-icon1"
                                    alt=""
                                    src="../image-11@2x.png"
                                />
                                <div className="frame-div175">
                                    <div className="frame-div176">
                                        <div className="advil-ibuprofin-div">
                                            Advil Ibuprofin
                                        </div>
                                        <div className="advil-ibuprofin-div">
                                            tablets 200mg
                                        </div>
                                    </div>
                                    <div className="frame-div177">
                                        <div className="medilab-div5">₹</div>
                                        <div className="medilab-div5">100</div>
                                    </div>
                                </div>
                                <div
                                    className="group-div109"
                                    onClick={openMedicineDetailsPopup}
                                >
                                    <div className="rectangle-div73" />
                                    <img
                                        className="arrow-right-1-icon3"
                                        alt=""
                                        src="../arrowright-13.svg"
                                    />
                                </div>
                            </div>
                            <div className="group-div110">
                                <div className="rectangle-div74" />
                                <div className="frame-div178">
                                    <div className="frame-div176">
                                        <div className="advil-ibuprofin-div">
                                            Crocin 650,
                                        </div>
                                        <div className="advil-ibuprofin-div">
                                            Paracetamol...
                                        </div>
                                    </div>
                                    <div className="frame-div180">
                                        <div className="medilab-div5">₹</div>
                                        <div className="medilab-div5">90</div>
                                    </div>
                                </div>
                                <div className="group-div111">
                                    <div className="rectangle-div75" />
                                    <img
                                        className="arrow-right-1-icon4"
                                        alt=""
                                        src="../arrowright-14.svg"
                                    />
                                </div>
                                <img
                                    className="image-3-icon"
                                    alt=""
                                    src="../image-3@2x.png"
                                />
                            </div>
                            <div className="group-div112">
                                <div className="rectangle-div76" />
                                <div className="frame-div181">
                                    <div className="frame-div176">
                                        <div className="advil-ibuprofin-div">
                                            Tylenol,
                                        </div>
                                        <div className="advil-ibuprofin-div">
                                            Acetaminophen
                                        </div>
                                    </div>
                                    <div className="frame-div183">
                                        <div className="medilab-div5">₹</div>
                                        <div className="medilab-div5">120</div>
                                    </div>
                                </div>
                                <div className="group-div113">
                                    <div className="rectangle-div77" />
                                    <img
                                        className="arrow-right-1-icon5"
                                        alt=""
                                        src="../arrowright-15.svg"
                                    />
                                </div>
                                <img
                                    className="image-4-icon"
                                    alt=""
                                    src="../image-4@2x.png"
                                />
                            </div>
                            <div className="group-div112">
                                <div className="rectangle-div76" />
                                <img
                                    className="image-5-icon"
                                    alt=""
                                    src="../image-5@2x.png"
                                />
                                <div className="frame-div181">
                                    <div className="frame-div176">
                                        <div className="advil-ibuprofin-div">
                                            Calpol Infant
                                        </div>
                                        <div className="advil-ibuprofin-div">
                                            Suspension
                                        </div>
                                    </div>
                                    <div className="frame-div183">
                                        <div className="medilab-div5">₹</div>
                                        <div className="medilab-div5">200</div>
                                    </div>
                                </div>
                                <div className="group-div113">
                                    <div className="rectangle-div77" />
                                    <img
                                        className="arrow-right-1-icon5"
                                        alt=""
                                        src="../arrowright-16.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="frame-div187">
                            <div className="group-div116">
                                <div className="rectangle-div80" />
                                <div className="frame-div188">
                                    <div className="frame-div176">
                                        <div className="advil-ibuprofin-div">
                                            Ratiopharm
                                        </div>
                                        <div className="advil-ibuprofin-div">
                                            Paracetamol
                                        </div>
                                    </div>
                                    <div className="frame-div177">
                                        <div className="medilab-div5">₹</div>
                                        <div className="medilab-div5">120</div>
                                    </div>
                                </div>
                                <div className="group-div117">
                                    <div className="rectangle-div73" />
                                    <img
                                        className="arrow-right-1-icon3"
                                        alt=""
                                        src="../arrowright-17.svg"
                                    />
                                </div>
                                <img
                                    className="image-6-icon"
                                    alt=""
                                    src="../image-6@2x.png"
                                />
                            </div>
                            <div className="group-div118">
                                <div className="rectangle-div82" />
                                <div className="frame-div191">
                                    <div className="frame-div176">
                                        <div className="advil-ibuprofin-div">
                                            Citrem Plus
                                        </div>
                                        <div className="advil-ibuprofin-div">
                                            Levocitrezine
                                        </div>
                                    </div>
                                    <div className="frame-div180">
                                        <div className="medilab-div5">₹</div>
                                        <div className="medilab-div5">100</div>
                                    </div>
                                </div>
                                <div className="group-div119">
                                    <div className="rectangle-div75" />
                                    <img
                                        className="arrow-right-1-icon4"
                                        alt=""
                                        src="../arrowright-18.svg"
                                    />
                                </div>
                                <img
                                    className="image-7-icon"
                                    alt=""
                                    src="../image-7@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="anchor-popular-products"
                        data-scroll-to="popularProductsContainer"
                    />
                </div>
                <div className="group-div120">
                    <div className="meet-our-doctors">Meet Our Doctors</div>
                    <div className="group-div121">
                        <div className="rectangle-div84" />
                        <img
                            className="ellipse-icon8"
                            alt=""
                            src="../ellipse-32@2x.png"
                        />
                        <div className="dr-guy-hawkins">Dr. Guy Hawkins</div>
                        <div className="ent-specialist-div">ENT Specialist</div>
                        <div className="mobile-number-9856741230">{`Mobile Number -> 9856741230`}</div>
                        <div
                            className="frame-div194"
                            onClick={openForLoggedInUserDoctorsD}
                        >
                            <div className="see-details-div">See Details</div>
                        </div>
                    </div>
                    <div className="group-div122">
                        <div className="rectangle-div84" />
                        <img
                            className="ellipse-icon8"
                            alt=""
                            src="../ellipse-32@2x.png"
                        />
                        <div className="dr-guy-hawkins">Dr. Guy Hawkins</div>
                        <div className="ent-specialist-div">ENT Specialist</div>
                        <div className="mobile-number-9856741230">{`Mobile Number -> 9856741230`}</div>
                        <div className="frame-div195">
                            <div className="see-details-div">See Details</div>
                        </div>
                    </div>
                    <div className="group-div123">
                        <div className="rectangle-div84" />
                        <img
                            className="ellipse-icon8"
                            alt=""
                            src="../ellipse-34@2x.png"
                        />
                        <div className="dr-wade-warren">Dr. Wade Warren</div>
                        <div className="obstetrics-gynaecology-speci">{`Obstetrics & Gynaecology Specialist`}</div>
                        <div className="mobile-number-98567412302">{`Mobile Number -> 9856741230`}</div>
                        <div className="frame-div195">
                            <div className="see-details-div">See Details</div>
                        </div>
                    </div>
                    <div className="group-div124">
                        <div className="rectangle-div84" />
                        <img
                            className="ellipse-icon8"
                            alt=""
                            src="../ellipse-34@2x.png"
                        />
                        <div className="dr-wade-warren">Dr. Wade Warren</div>
                        <div className="obstetrics-gynaecology-speci">{`Obstetrics & Gynaecology Specialist`}</div>
                        <div className="mobile-number-98567412302">{`Mobile Number -> 9856741230`}</div>
                        <div className="frame-div195">
                            <div className="see-details-div">See Details</div>
                        </div>
                    </div>
                    <div className="group-div125">
                        <div className="rectangle-div84" />
                        <img
                            className="ellipse-icon8"
                            alt=""
                            src="../ellipse-36@2x.png"
                        />
                        <div className="dr-jane-wilson">Dr. Jane Wilson</div>
                        <div className="orthopedics-specialist-div">
                            Orthopedics Specialist
                        </div>
                        <div className="mobile-number-9856741230">{`Mobile Number -> 9856741230`}</div>
                        <div className="frame-div195">
                            <div className="see-details-div">See Details</div>
                        </div>
                    </div>
                    <div className="group-div126">
                        <div className="rectangle-div84" />
                        <img
                            className="ellipse-icon8"
                            alt=""
                            src="../ellipse-36@2x.png"
                        />
                        <div className="dr-jane-wilson">Dr. Jane Wilson</div>
                        <div className="orthopedics-specialist-div">
                            Orthopedics Specialist
                        </div>
                        <div className="mobile-number-9856741230">{`Mobile Number -> 9856741230`}</div>
                        <div className="frame-div195">
                            <div className="see-details-div">See Details</div>
                        </div>
                    </div>
                </div>
                <div className="header-after-logging4">
                    <div className="rectangle-div90" />
                    <div className="frame-div200">
                        <div className="frame-div201">
                            <img
                                className="group-icon6"
                                alt=""
                                src="../group-99495.svg"
                            />
                            <div className="frame-div202">
                                <div className="frame-div203">
                                    <b className="home-b">HOME</b>
                                    <div className="line-div5" />
                                </div>
                                <div
                                    className="consultations-div2"
                                    onClick={onCONSULTATIONSTextClick}
                                >
                                    CONSULTATIONS
                                </div>
                                <div
                                    className="consultations-div2"
                                    onClick={onAPPOINTMENTSTextClick}
                                >
                                    APPOINTMENTS
                                </div>
                                <div className="advil-ibuprofin-div">ABOUT</div>
                                <div className="advil-ibuprofin-div">
                                    CONTACT US
                                </div>
                            </div>
                        </div>
                        <div className="frame-div204">
                            <div className="frame-div205">
                                <img
                                    className="search-line-1-icon5"
                                    alt=""
                                    src="../searchline-15.svg"
                                />
                                <div className="search-div5">Search</div>
                            </div>
                            <img
                                className="rectangle-icon8"
                                alt=""
                                src="../rectangle@2x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {isMedicineDetailsPopupOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeMedicineDetailsPopup}
                >
                    <MedicineDetailsPopup onClose={closeMedicineDetailsPopup} />
                </PortalPopup>
            )}
            {isForLoggedInUserDoctorsDOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeForLoggedInUserDoctorsD}
                >
                    <ForLoggedInUserDoctorsD
                        onClose={closeForLoggedInUserDoctorsD}
                    />
                </PortalPopup>
            )}
        </>
    );
};

export default HomePageAfterLogging;
