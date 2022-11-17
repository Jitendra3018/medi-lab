import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ForLoggedInUserDoctorsD.css";

const ForLoggedInUserDoctorsD = ({ onClose }) => {
    const navigate = useNavigate();

    const onFrameContainer5Click = useCallback(() => {
        navigate("/for-logged-in-user-book-appointment");
    }, [navigate]);

    return (
        <div className="for-logged-in-user-doctors-d">
            <div className="group-div21">
                <img
                    className="rectangle-icon1"
                    alt=""
                    src="../rectangle-37.svg"
                />
                <div className="group-div22">
                    <img
                        className="close-big-1-icon"
                        alt=""
                        src="../close-big-1.svg"
                    />
                    <div className="frame-div39">
                        <div className="frame-div40">
                            <img
                                className="ellipse-icon2"
                                alt=""
                                src="../ellipse-3@2x.png"
                            />
                            <div className="group-div23">
                                <div className="group-div24">
                                    <div className="fees-div">Fees :-</div>
                                    <div className="div15">₹450\-</div>
                                </div>
                                <div className="group-div25">
                                    <div className="name-div1">Name :-</div>
                                    <div className="guy-hawkins-div">
                                        Guy Hawkins
                                    </div>
                                </div>
                                <div className="group-div26">
                                    <div className="specializations-div">
                                        Specializations :-
                                    </div>
                                    <div className="frame-div41">
                                        <div className="frame-div42">
                                            <div className="heart-problems-div">
                                                Heart Problems
                                            </div>
                                        </div>
                                        <div className="frame-div42">
                                            <div className="ent-div">ENT</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-div27">
                                    <div className="about-div2">About :-</div>
                                    <div className="lorem-ipsum-dolor-sit-amet-co">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Duis sit amet est vel
                                        augue laoreet porttitor. Aenean erat
                                        orci, malesuada a est non, iaculis
                                        egestas risus.Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit. Duis
                                        sit amet est vel augue laoreet
                                        porttitor. Aenean erat orci, malesuada a
                                        est non, iaculis egestas risus.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-div44">
                            <div className="frame-div45">
                                <div className="cancel-div">Cancel</div>
                            </div>
                            <div
                                className="frame-div46"
                                onClick={onFrameContainer5Click}
                            >
                                <div className="cancel-div">
                                    Book an Appointment
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForLoggedInUserDoctorsD;
