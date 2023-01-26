import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
    const navigate = useNavigate();
    const onConsultationTextClick = useCallback(() => {
        navigate("/for-not-logged-in-user-book-appointment");
    }, [navigate]);

    return (
        <>
            <div className="footer-div6">
                <div className="group-div127">
                    <div className="frame-div206">
                        <img
                            className="standard-collection-126"
                            alt=""
                            src="../assets/standard-collection-126.svg"
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
                                <div className="thursday-div6">Thursday:</div>
                                <div className="friday-div6">Friday:</div>
                                <div className="tuesday-div6">{`Tuesday:            `}</div>
                                <div className="wednesday-div6">Wednesday:</div>
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
                                src="../assets/vector6.svg"
                            />
                            <img
                                className="phone-alt-icon6"
                                alt=""
                                src="../assets/phonealt6.svg"
                            />
                            <img
                                className="location-arrow-icon5"
                                alt=""
                                src="../assets/locationarrow5.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="ellipse-icon14" alt="" src="../ellipse-23.svg" />; */}
        </>
    );
}

export default Footer;
