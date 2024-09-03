import React from "react";
import "./booknow-offers.styles.scss";
import copy from "../../../assets/copy.png";

export const BooknowOffers = () => {
  /* Function to copy coupon code */ 
  const copyToClipboard = () => {
    const couponCode = "FamilyFun30";
    navigator.clipboard.writeText(couponCode).then(
      () => {
        alert("Coupon code copied to clipboard!");
      },
      () => {
        alert("Failed to copy the coupon code.");
      }
    );
  };

  return (
    <div className="booknow-offers">
      <div className="booknow-offers__container">
        <div className="booknow-offers__container--box">
          <div className="offer--name">Limited Time Offer</div>
          <div className="offer--title">Family Fun, Discounted Fun!</div>
          <div className="offer--content">
            Book Your Family Adventure Today and Enjoy 30% Off All Tours Create
            unforgettable memories with your loved ones. Explore breathtaking
            destinations, experience thrilling adventures, and discover new
            cultures together. Our family tours are designed to cater to all
            ages and interests, ensuring a fun-filled and enriching experience
            for everyone.
          </div>
          <div className="offer--conclusion">
            Limited time offer. Book now to secure your spot.
          </div>
          <div className="offer--coupon-code">
            <span className="coupon-text">Use Coupon Code:</span>
            <span className="coupon-code">
              FamilyFun30 &nbsp;
              <span className="copy-coupon" onClick={copyToClipboard}>
                <img src={copy} alt="copy icon" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
