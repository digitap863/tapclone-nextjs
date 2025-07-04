"use client"
import React from 'react'
import "../Services/Services.css"

const Knowmore = () => {

    const doPhoneCallClick = () => {
        window.open(`tel:${phoneNumber}`, '_blank');
    };

    return (
        <>
            <div className="knowMoreServices" style={{ marginTop: "4rem" }}>
                <span className="knowMoreText">
                    Need to <br /> Know More
                </span>
                <div className="callBtn" onClick={() => doPhoneCallClick()}>
                    <span>Contact Us</span>
                </div>
            </div>
            <div className="knowMoreLayer"></div>
        </>
    )
}

export default Knowmore