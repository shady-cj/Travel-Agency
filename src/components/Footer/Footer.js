import React from "react";
import "./Footer.scss";
import { images } from "../../assets";

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="footer-subsection">
                <article className="top-subsection-col">
                    <div className="top-subsection-item-col">
                        <div className="app__logo-circle">
                            <img
                                className="app__logo"
                                src={images.aircraft}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="top-subsection-item-col">
                        <h4>Artic Travels</h4>
                        <p>
                            Book your trip in minutes, get full
                            <br /> control for much longer.
                        </p>
                    </div>
                    <div className="top-subsection-item-socials">
                        <div className="socials-circle">
                            <img
                                src={images.facebook}
                                alt=""
                                style={{ width: "7px" }}
                            />
                        </div>
                        <div className="socials-circle">
                            <img src={images.instagram} alt="" />
                        </div>
                        <div className="socials-circle">
                            <img src={images.twitter} alt="" />
                        </div>
                    </div>
                </article>
                <article className="bottom-subsection">
                    © 2022 Arctic Travels - All right reserved.
                </article>
            </div>
            <div className="footer-subsection">
                <article className="top-subsection-row">
                    <div className="top-subsection__item-row">
                        <h4>Company</h4>
                        <span>About</span>
                        <span>Careers</span>
                        <span>Mobile</span>
                    </div>
                    <div className="top-subsection__item-row">
                        <h4>Contact</h4>
                        <span>FAQ</span>
                        <span>Press</span>
                        <span>Affiliates</span>
                    </div>
                    <div className="top-subsection__item-row">
                        <h4>More</h4>
                        <span>Airlines</span>
                        <span>Airfees</span>
                        <span>Lowfare Tips</span>
                    </div>
                </article>
                <article className="bottom-subsection-row">
                    <span>Privacy Policy</span>
                    <span>Terms of Use</span>
                </article>
            </div>
        </section>
    );
};

export default Footer;
