"use client"
import React from "react";

const ShortDate = () => {
  const currentDate = new Date();
  
  // Set timezone to Indian Standard Time
  const options = {
    timeZone: 'Asia/Kolkata',
    // weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  };

  const formattedDate = currentDate
    .toLocaleString("en-IN", options)
    .replace(",", "")
    .toUpperCase();

  return <div className="nav-date !text-sm !md:text-base ">{formattedDate}</div>;
};

export default ShortDate;
