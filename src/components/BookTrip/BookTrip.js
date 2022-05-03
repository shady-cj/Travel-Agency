import React from "react";
import "./BookTrip.scss";
import { images } from "../../assets";

const BookTrip = () => {
    const bookings = [
        {
            info: "Iceland",
            title: "LOCATION",
            icon: images.mapPin,
        },
        {
            info: "4 Persons",
            title: "PERSONS",
            icon: images.userImg,
        },
        {
            info: "12 January 2022",
            title: "CHECK IN",
            icon: images.calendar,
        },
        {
            info: "18 January 2022",
            title: "CHECK OUT",
            icon: images.calendar,
        },
    ];
    return (
        <article className="booking-container">
            {bookings.map((booking, index) => (
                <section className="booking__card" key={index}>
                    <div className={`booking__card-title`}>
                        <img src={booking.icon} />
                        <span className="title__name">{booking.title}</span>
                    </div>
                    <div className="booking__card-info">
                        <span className="info__title">{booking.info}</span>
                        <img
                            className="info__icon"
                            src={images.caretDown}
                            alt=""
                        />
                    </div>
                </section>
            ))}
            <button>
                Book Trip <img src={images.plane} alt="" />
            </button>
        </article>
    );
};

export default BookTrip;
