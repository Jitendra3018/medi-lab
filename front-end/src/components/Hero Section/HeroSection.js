import React, { useCallback } from "react";
import "./HeroSection.css";

function HeroSection() {
    const onFrameButtonClick = useCallback(() => {
        const anchor = document.querySelector(
            "[data-scroll-to='popularProductsContainer']"
        );
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }, []);

    return (
        <div className="hero-section-div3">
            <div className="frame-div209">
                <div className="frame-div210">
                    <b className="empowering-people-to-improve-t1">
                        Empowering People to Improve Their Lives
                    </b>
                    <div className="lorem-media-is-a-full-service3">
                        Lorem Media is a full-service social media agency. We
                        offer businesses innovative solutions that deliver the
                        right type of audience to you in the most effective
                        strategies possible.
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
    );
}

export default HeroSection;
