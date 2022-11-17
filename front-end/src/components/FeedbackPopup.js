import "./FeedbackPopup.css";

const FeedbackPopup = ({ onClose }) => {
    return (
        <div className="feedback-popup-div">
            <div className="group-div78">
                <img
                    className="rectangle-icon5"
                    alt=""
                    src="../rectangle-371.svg"
                />
                <img
                    className="close-big-1-icon1"
                    alt=""
                    src="../close-big-11.svg"
                />
                <div className="group-div79">
                    <div className="give-feedback-div">Give Feedback</div>
                    <div className="group-div80">
                        <div className="rectangle-div60" />
                        <div className="write-something">
                            Write something ...
                        </div>
                    </div>
                    <div className="frame-div142">
                        <b className="submit">SUBMIT</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackPopup;
