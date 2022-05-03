import React from "react";
import "./sponsor.scss";
import { images } from "../../assets";
const Sponsor = () => {
    const sponsors = [
        {
            src: images.nike,
            index: 1,
        },
        {
            src: images.apple,
            index: 2,
        },
        {
            src: images.silverStar,
            index: 3,
        },
        {
            src: images.intrax,
            index: 4,
        },
        {
            src: images.mastercard,
            index: 5,
        },
    ];
    return (
        <div className="sponsor-container">
            {sponsors.map((sponsor) => (
                <div className="sponsor-card" key={sponsor.index}>
                    <img src={sponsor.src} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Sponsor;
