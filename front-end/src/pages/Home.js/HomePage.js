import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MedicineDetailsPopup from "../../components/MedicineDetailsPopup";
import PortalPopup from "../../components/PortalPopup";
import ForNotLoggedInUserDoctor from "../../components/ForNotLoggedInUserDoctor";
import LoginPopup from "../../components/LoginPopup";
import "./HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();
    const [isMedicineDetailsPopupOpen, setMedicineDetailsPopupOpen] =
        useState(false);
    const [isForNotLoggedInUserDoctorOpen, setForNotLoggedInUserDoctorOpen] =
        useState(false);
    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

    const onConsultationTextClick = useCallback(() => {
        navigate("/for-not-logged-in-user-book-appointment");
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

    const openForNotLoggedInUserDoctor = useCallback(() => {
        setForNotLoggedInUserDoctorOpen(true);
    }, []);

    const closeForNotLoggedInUserDoctor = useCallback(() => {
        setForNotLoggedInUserDoctorOpen(false);
    }, []);

    const onCONSULTATIONSTextClick = useCallback(() => {
        navigate("/for-not-logged-in-user-book-appointment");
    }, [navigate]);

    const openLoginPopup = useCallback(() => {
        setLoginPopupOpen(true);
    }, []);

    const closeLoginPopup = useCallback(() => {
        setLoginPopupOpen(false);
    }, []);

    return (
        <>
            <div className="home-page-div">
                <div className="footer-div6">
                    <div className="group-div127">
                        <div className="frame-div206">
                            <img
                                className="standard-collection-126"
                                alt=""
                                src="../standard-collection-126.svg"
                            />
                            <div className="medilab-div6">MediLab</div>
                        </div>
                        <div className="frame-div207">
                            <div className="group-div128">
                                <b className="quick-links-b6">Quick Links</b>
                                <div className="frame-div208">
                                    <div className="home-div11">Home</div>
                                    <div
                                        className="consultation-div6"
                                        onClick={onConsultationTextClick}
                                    >
                                        Consultation
                                    </div>
                                    <div className="home-div11">About Us</div>
                                    <div className="home-div11">Contact Us</div>
                                </div>
                            </div>
                            <div className="group-div129">
                                <div className="group-div130">
                                    <b className="hours-b6">Hours</b>
                                    <div className="monday-div6">{`Monday:            `}</div>
                                    <div className="div56">9:00 - 18:00</div>
                                    <div className="div57">9:00 - 18:00</div>
                                    <div className="div58">9:00 - 18:00</div>
                                    <div className="div59">9:00 - 18:00</div>
                                    <div className="div60">9:00 - 18:00</div>
                                    <div className="thursday-div6">
                                        Thursday:
                                    </div>
                                    <div className="friday-div6">Friday:</div>
                                    <div className="tuesday-div6">{`Tuesday:            `}</div>
                                    <div className="wednesday-div6">
                                        Wednesday:
                                    </div>
                                </div>
                            </div>
                            <div className="group-div131">
                                <div className="group-div130">
                                    <div className="group-div130">
                                        <b className="hours-b6">Contact</b>
                                        <div className="div61">000-000-000</div>
                                        <div className="infoemailcom-div6">
                                            info@email.com
                                        </div>
                                        <div className="kalutara-south-div6">
                                            Kalutara South
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className="vector-icon6"
                                    alt=""
                                    src="../vector6.svg"
                                />
                                <img
                                    className="phone-alt-icon6"
                                    alt=""
                                    src="../phonealt6.svg"
                                />
                                <img
                                    className="location-arrow-icon5"
                                    alt=""
                                    src="../locationarrow5.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="ellipse-icon14"
                    alt=""
                    src="../ellipse-23.svg"
                />
                <div className="hero-section-div3">
                    <div className="frame-div209">
                        <div className="frame-div210">
                            <b className="empowering-people-to-improve-t1">
                                Empowering People to Improve Their Lives
                            </b>
                            <div className="lorem-media-is-a-full-service3">
                                Lorem Media is a full-service social media
                                agency. We offer businesses innovative solutions
                                that deliver the right type of audience to you
                                in the most effective strategies possible.
                            </div>
                        </div>
                        <button
                            className="frame-button1"
                            autoFocus
                            onClick={onFrameButtonClick}
                        >
                            <button className="browse-more-button1" autoFocus>
                                Browse More
                            </button>
                            <img
                                className="arrow-right-1-icon9"
                                alt=""
                                src="../arrowright-12.svg"
                            />
                        </button>
                    </div>
                    <img
                        className="doctorscuate-icon1"
                        alt=""
                        src="../doctorscuate1.svg"
                    />
                </div>
                <div className="popular-products-div2">
                    <div className="popular-products-div3">
                        Popular Products
                    </div>
                    <div className="frame-div211">
                        <div className="frame-div212">
                            <div className="group-div134">
                                <div className="rectangle-div91" />
                                <img
                                    className="image-1-icon2"
                                    alt=""
                                    src="../image-11@2x.png"
                                />
                                <div className="frame-div213">
                                    <div className="frame-div214">
                                        <div className="advil-ibuprofin-div1">
                                            Advil Ibuprofin
                                        </div>
                                        <div className="advil-ibuprofin-div1">
                                            tablets 200mg
                                        </div>
                                    </div>
                                    <div className="frame-div215">
                                        <div className="medilab-div6">₹</div>
                                        <div className="medilab-div6">100</div>
                                    </div>
                                </div>
                                <div
                                    className="group-div135"
                                    onClick={openMedicineDetailsPopup}
                                >
                                    <div className="rectangle-div92" />
                                    <img
                                        className="arrow-right-1-icon10"
                                        alt=""
                                        src="../arrowright-110.svg"
                                    />
                                </div>
                            </div>
                            <div className="group-div136">
                                <div className="rectangle-div93" />
                                <div className="frame-div216">
                                    <div className="frame-div214">
                                        <div className="advil-ibuprofin-div1">
                                            Crocin 650,
                                        </div>
                                        <div className="advil-ibuprofin-div1">
                                            Paracetamol...
                                        </div>
                                    </div>
                                    <div className="frame-div218">
                                        <div className="medilab-div6">₹</div>
                                        <div className="medilab-div6">90</div>
                                    </div>
                                </div>
                                <div className="group-div137">
                                    <div className="rectangle-div94" />
                                    <img
                                        className="arrow-right-1-icon11"
                                        alt=""
                                        src="../arrowright-111.svg"
                                    />
                                </div>
                                <img
                                    className="image-3-icon1"
                                    alt=""
                                    src="../image-3@2x.png"
                                />
                            </div>
                            <div className="group-div138">
                                <div className="rectangle-div95" />
                                <div className="frame-div219">
                                    <div className="frame-div214">
                                        <div className="advil-ibuprofin-div1">
                                            Tylenol,
                                        </div>
                                        <div className="advil-ibuprofin-div1">
                                            Acetaminophen
                                        </div>
                                    </div>
                                    <div className="frame-div221">
                                        <div className="medilab-div6">₹</div>
                                        <div className="medilab-div6">120</div>
                                    </div>
                                </div>
                                <div className="group-div139">
                                    <div className="rectangle-div96" />
                                    <img
                                        className="arrow-right-1-icon12"
                                        alt=""
                                        src="../arrowright-15.svg"
                                    />
                                </div>
                                <img
                                    className="image-4-icon1"
                                    alt=""
                                    src="../image-4@2x.png"
                                />
                            </div>
                            <div className="group-div138">
                                <div className="rectangle-div95" />
                                <img
                                    className="image-5-icon1"
                                    alt=""
                                    src="../image-5@2x.png"
                                />
                                <div className="frame-div219">
                                    <div className="frame-div214">
                                        <div className="advil-ibuprofin-div1">
                                            Calpol Infant
                                        </div>
                                        <div className="advil-ibuprofin-div1">
                                            Suspension
                                        </div>
                                    </div>
                                    <div className="frame-div221">
                                        <div className="medilab-div6">₹</div>
                                        <div className="medilab-div6">200</div>
                                    </div>
                                </div>
                                <div className="group-div139">
                                    <div className="rectangle-div96" />
                                    <img
                                        className="arrow-right-1-icon12"
                                        alt=""
                                        src="../arrowright-113.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="frame-div225">
                            <div className="group-div142">
                                <div className="rectangle-div99" />
                                <div className="frame-div226">
                                    <div className="frame-div214">
                                        <div className="advil-ibuprofin-div1">
                                            Ratiopharm
                                        </div>
                                        <div className="advil-ibuprofin-div1">
                                            Paracetamol
                                        </div>
                                    </div>
                                    <div className="frame-div215">
                                        <div className="medilab-div6">₹</div>
                                        <div className="medilab-div6">120</div>
                                    </div>
                                </div>
                                <div className="group-div143">
                                    <div className="rectangle-div92" />
                                    <img
                                        className="arrow-right-1-icon10"
                                        alt=""
                                        src="../arrowright-17.svg"
                                    />
                                </div>
                                <img
                                    className="image-6-icon1"
                                    alt=""
                                    src="../image-6@2x.png"
                                />
                            </div>
                            <div className="group-div144">
                                <div className="rectangle-div101" />
                                <div className="frame-div229">
                                    <div className="frame-div214">
                                        <div className="advil-ibuprofin-div1">
                                            Citrem Plus
                                        </div>
                                        <div className="advil-ibuprofin-div1">
                                            Levocitrezine
                                        </div>
                                    </div>
                                    <div className="frame-div218">
                                        <div className="medilab-div6">₹</div>
                                        <div className="medilab-div6">100</div>
                                    </div>
                                </div>
                                <div className="group-div145">
                                    <div className="rectangle-div94" />
                                    <img
                                        className="arrow-right-1-icon11"
                                        alt=""
                                        src="../arrowright-115.svg"
                                    />
                                </div>
                                <img
                                    className="image-7-icon1"
                                    alt=""
                                    src="../image-7@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="anchor-popular-products1"
                        data-scroll-to="popularProductsContainer"
                    />
                </div>
                <div className="group-div146">
                    <div className="meet-our-doctors1">Meet Our Doctors</div>
                    <div className="group-div147">
                        <div className="rectangle-div103" />
                        <img
                            className="ellipse-icon15"
                            alt=""
                            src="../ellipse-38@2x.png"
                        />
                        <div className="dr-guy-hawkins2">Dr. Guy Hawkins</div>
                        <div className="ent-specialist-div2">
                            ENT Specialist
                        </div>
                        <div className="mobile-number-98567412306">{`Mobile Number -> 9856741230`}</div>
                        <button
                            className="frame-button2"
                            autoFocus
                            onClick={openForNotLoggedInUserDoctor}
                        >
                            <div className="see-details-div6">See Details</div>
                        </button>
                    </div>
                    <div className="group-div148">
                        <div className="rectangle-div103" />
                        <img
                            className="ellipse-icon15"
                            alt=""
                            src="../ellipse-38@2x.png"
                        />
                        <div className="dr-guy-hawkins2">Dr. Guy Hawkins</div>
                        <div className="ent-specialist-div2">
                            ENT Specialist
                        </div>
                        <div className="mobile-number-98567412306">{`Mobile Number -> 9856741230`}</div>
                        <button className="frame-button2" autoFocus>
                            <div className="see-details-div6">See Details</div>
                        </button>
                    </div>
                    <div className="group-div149">
                        <div className="rectangle-div103" />
                        <img
                            className="ellipse-icon15"
                            alt=""
                            src="../ellipse-34@2x.png"
                        />
                        <div className="dr-wade-warren2">Dr. Wade Warren</div>
                        <div className="obstetrics-gynaecology-speci2">{`Obstetrics & Gynaecology Specialist`}</div>
                        <div className="mobile-number-98567412308">{`Mobile Number -> 9856741230`}</div>
                        <button className="frame-button2" autoFocus>
                            <div className="see-details-div6">See Details</div>
                        </button>
                    </div>
                    <div className="group-div150">
                        <div className="rectangle-div103" />
                        <img
                            className="ellipse-icon15"
                            alt=""
                            src="../ellipse-34@2x.png"
                        />
                        <div className="dr-wade-warren2">Dr. Wade Warren</div>
                        <div className="obstetrics-gynaecology-speci2">{`Obstetrics & Gynaecology Specialist`}</div>
                        <div className="mobile-number-98567412308">{`Mobile Number -> 9856741230`}</div>
                        <button className="frame-button2" autoFocus>
                            <div className="see-details-div6">See Details</div>
                        </button>
                    </div>
                    <div className="group-div151">
                        <div className="rectangle-div103" />
                        <img
                            className="ellipse-icon15"
                            alt=""
                            src="../ellipse-312@2x.png"
                        />
                        <div className="dr-jane-wilson2">Dr. Jane Wilson</div>
                        <div className="orthopedics-specialist-div2">
                            Orthopedics Specialist
                        </div>
                        <div className="mobile-number-98567412306">{`Mobile Number -> 9856741230`}</div>
                        <button className="frame-button2" autoFocus>
                            <div className="see-details-div6">See Details</div>
                        </button>
                    </div>
                    <div className="group-div152">
                        <div className="rectangle-div103" />
                        <img
                            className="ellipse-icon15"
                            alt=""
                            src="../ellipse-312@2x.png"
                        />
                        <div className="dr-jane-wilson2">Dr. Jane Wilson</div>
                        <div className="orthopedics-specialist-div2">
                            Orthopedics Specialist
                        </div>
                        <div className="mobile-number-98567412306">{`Mobile Number -> 9856741230`}</div>
                        <button className="frame-button2" autoFocus>
                            <div className="see-details-div6">See Details</div>
                        </button>
                    </div>
                </div>
                <div className="header-before-logging1">
                    <div className="rectangle-div109" />
                    <div className="frame-div232">
                        <div className="frame-div233">
                            <img
                                className="group-icon7"
                                alt=""
                                src="../group-99496.svg"
                            />
                            <div className="frame-div234">
                                <div className="frame-div235">
                                    <b className="home-div11">HOME</b>
                                    <div className="line-div6" />
                                </div>
                                <div
                                    className="consultations-div3"
                                    onClick={onCONSULTATIONSTextClick}
                                >
                                    CONSULTATIONS
                                </div>
                                <div className="advil-ibuprofin-div1">
                                    ABOUT
                                </div>
                                <div className="advil-ibuprofin-div1">
                                    CONTACT US
                                </div>
                            </div>
                        </div>
                        <div className="frame-button8">
                            <div className="frame-div236">
                                <img
                                    className="search-line-1-icon6"
                                    alt=""
                                    src="../searchline-16.svg"
                                />
                                <div className="search-div6">Search</div>
                            </div>
                            <button
                                className="frame-button9"
                                onClick={openLoginPopup}
                            >
                                <div className="login-div1">LOGIN</div>
                            </button>
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
            {isForNotLoggedInUserDoctorOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.6)"
                    placement="Centered"
                    onOutsideClick={closeForNotLoggedInUserDoctor}
                >
                    <ForNotLoggedInUserDoctor
                        onClose={closeForNotLoggedInUserDoctor}
                    />
                </PortalPopup>
            )}
            {isLoginPopupOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.6)"
                    placement="Centered"
                    onOutsideClick={closeLoginPopup}
                >
                    <LoginPopup onClose={closeLoginPopup} />
                </PortalPopup>
            )}
        </>
    );
};

export default HomePage;
