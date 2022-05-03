import React from "react";
import "./Resort.scss";
import { images } from "../../assets";
const Resort = () => {
    return (
        <section className="resort__places">
            <div className="resort__places-flex flex-large">
                <h4 className="resort__places-title">
                    The best resorts to chill
                    <br /> and relax
                </h4>
                <div
                    className="resort__places-flex-item"
                    style={{ backgroundImage: `url(${images.resort3})` }}
                >
                    <article className="item-description">
                        <h4 className="description-title">
                            Winter Landscape Chalet
                        </h4>
                        <p>Cambodia</p>
                        <button>Book Now</button>
                    </article>
                    <div
                        className="resort-overlay"
                        style={{
                            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.563442) 60.97%, rgba(0, 0, 0, 0.65) 100%), url(${images.resort1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                </div>
                <div
                    className="resort__places-flex-item"
                    style={{ backgroundImage: `url(${images.resort2})` }}
                >
                    <article className="item-description">
                        <h4 className="description-title">
                            Winter Landscape Chalet
                        </h4>
                        <p>Cambodia</p>
                        <button>Book Now</button>
                    </article>
                    <div
                        className="resort-overlay"
                        style={{
                            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.563442) 60.97%, rgba(0, 0, 0, 0.65) 100%), url(${images.resort1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                </div>
            </div>
            <div className="resort__places-flex">
                <div
                    className="resort__places-flex-item flex-item-main"
                    style={{
                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.563442) 60.97%, rgba(0, 0, 0, 0.65) 100%), url(${images.resort1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <article className="item-description">
                        <h4 className="description-title">
                            Winter Landscape Chalet
                        </h4>
                        <p>Cambodia</p>
                        <button>Book Now</button>
                    </article>
                </div>
                <div
                    className="resort__places-flex-item"
                    style={{ backgroundImage: `url(${images.resort4})` }}
                >
                    <article className="item-description">
                        <h4 className="description-title">
                            Winter Landscape Chalet
                        </h4>
                        <p>Cambodia</p>
                        <button>Book Now</button>
                    </article>

                    <div
                        className="resort-overlay"
                        style={{
                            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.563442) 60.97%, rgba(0, 0, 0, 0.65) 100%), url(${images.resort1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Resort;
