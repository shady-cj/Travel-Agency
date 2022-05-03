import React from "react";
import "./ExploreIntro.scss";
import { images } from "../../assets";
const ExploreIntro = () => {
    return (
        <section
            className="explore-intro"
            style={{
                backgroundImage: `url(${images.map})`,
                backgroundSize: "95% 72%",
                backgroundPosition: "center bottom",
                backgroundRepeat: "no-repeat",
            }}
        >
            <h3>
                Creating the best <span>ice-cold!</span> experience
                <br /> you would never forget.
            </h3>
            <p>
                Would you explore nature paradise in the world, find the <br />
                best destination in the world with us.
            </p>
            <h4>View Regions available</h4>
            <img src={images.arrow} alt="" />
        </section>
    );
};

export default ExploreIntro;
