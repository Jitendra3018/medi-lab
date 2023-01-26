import React, { useCallback, useState } from "react";
import ForLoggedInUserDoctorsD from "../ForLoggedInUserDoctorsD";
import ForNotLoggedInUserDoctor from "../ForNotLoggedInUserDoctor";
import PortalPopup from "../PortalPopup";
import "./Doctors.css";

function Doctors({ login }) {
    const [isForNotLoggedInUserDoctorOpen, setForNotLoggedInUserDoctorOpen] =
        useState(false);
    const [isForLoggedInUserDoctorOpen, setForLoggedInUserDoctorOpen] =
        useState(false);

    const openForNotLoggedInUserDoctor = useCallback(() => {
        setForNotLoggedInUserDoctorOpen(true);
    }, []);

    const openForLoggedInUserDoctorD = useCallback(() => {
        setForLoggedInUserDoctorOpen(true);
    }, []);

    const closeForNotLoggedInUserDoctor = useCallback(() => {
        setForNotLoggedInUserDoctorOpen(false);
    }, []);

    const closeForLoggedInUserDoctor = useCallback(() => {
        setForLoggedInUserDoctorOpen(false);
    }, []);

    return (
        <>
            <div className="group-div146">
                <div className="meet-our-doctors1">Meet Our Doctors</div>
                <div className="group-div147">
                    <div className="rectangle-div103" />
                    <img
                        className="ellipse-icon15"
                        alt=""
                        src="../assets/ellipse-38@2x.png"
                    />
                    <div className="dr-guy-hawkins2">Dr. Guy Hawkins</div>
                    <div className="ent-specialist-div2">ENT Specialist</div>
                    <div className="mobile-number-98567412306">{`Mobile Number -> 9856741230`}</div>
                    {!login ? (
                        <button
                            className="frame-button2"
                            autoFocus
                            onClick={openForNotLoggedInUserDoctor}
                        >
                            <div className="see-details-div6">See Details</div>
                        </button>
                    ) : (
                        <button
                            className="frame-button2"
                            autoFocus
                            onClick={openForLoggedInUserDoctorD}
                        >
                            <div className="see-details-div6">See Details</div>
                        </button>
                    )}
                </div>
                <div className="group-div148">
                    <div className="rectangle-div103" />
                    <img
                        className="ellipse-icon15"
                        alt=""
                        src="../assets/ellipse-38@2x.png"
                    />
                    <div className="dr-guy-hawkins2">Dr. Guy Hawkins</div>
                    <div className="ent-specialist-div2">ENT Specialist</div>
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
                        src="../assets/ellipse-34@2x.png"
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
                        src="../assets/ellipse-34@2x.png"
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
                        src="../assets/ellipse-312@2x.png"
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
                        src="../assets/ellipse-312@2x.png"
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
            {isForLoggedInUserDoctorOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.6)"
                    placement="Centered"
                    onOutsideClick={closeForLoggedInUserDoctor}
                >
                    <ForLoggedInUserDoctorsD
                        onClose={closeForLoggedInUserDoctor}
                    />
                </PortalPopup>
            )}
        </>
    );
}

export default Doctors;
