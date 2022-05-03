import React, { useState } from "react";
import "./Explore.scss";
import { images } from "../../assets";
const Explore = () => {
    const [openFullScreenId, setOpenFullScreenId] = useState(null);
    const tours = [
        {
            src: images.tour1,
            title: "Mountain Resort",

            id: 1,
        },
        {
            src: images.tour2,
            title: "Fuji Mountain",
            id: 2,
        },
        {
            src: images.tour3,
            title: "Freezing WaterLake",
            id: 3,
        },
    ];
    return (
        <section className="explore-container">
            <div
                className={`card-opacity ${
                    openFullScreenId !== 1 && openFullScreenId !== null
                        ? "card-visible"
                        : ""
                }`}
            >
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpenFullScreenId(null);
                    }}
                >
                    <img src={images.chevron} alt="" />
                    <img src={images.chevron} alt="" />
                </button>
            </div>
            {tours.map((tour) => (
                <div
                    key={tour.id}
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url(${tour.src})`,
                    }}
                    className={`explore-card ${
                        openFullScreenId !== null
                            ? tour.id === openFullScreenId
                                ? "card-fullscreen"
                                : "card-shrink"
                            : ""
                    } `}
                    onClick={() => setOpenFullScreenId(tour.id)}
                >
                    {tour.id === 1 && (
                        <div className="nav-circle">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenFullScreenId(null);
                                }}
                            >
                                <img src={images.chevron} alt="" />
                                <img src={images.chevron} alt="" />
                            </button>
                        </div>
                    )}

                    <h2>{tour.title}</h2>

                    <div className="explore-typo">
                        <p>
                            This is a place you would love to be to explore
                            <br />
                            nature paradise anywhere in the world
                        </p>
                        <button>Book Now</button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Explore;
