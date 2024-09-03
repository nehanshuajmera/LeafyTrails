import React, { useState } from "react";
import "./booknow-offers.styles.scss";
import copy from "../../../assets/copy.png";

export const BooknowOffers = () => {
  const [isCopied, setIsCopied] = useState(false);

  /* Function to copy coupon code and show popup */
  const copyToClipboard = async () => {
    const couponCode = "FunFamily30";

    try {
      await navigator.clipboard.writeText(couponCode);
      setIsCopied(true); /* Show popup */
      setTimeout(
        () => setIsCopied(false),
        3000
      ); /* Hide the popup after 3 seconds */
    } catch (error) {
      alert("Failed to copy the coupon code.");
    }
  };

  return (
    <div className="booknow-offers">
      <div className="booknow-offers__container">
        <div className="booknow-offers__container--box">
          <div className="offer--name">Limited Time Offer</div>
          <div className="offer--title">
            Family Fun, <br />
            Discounted Fun!
          </div>
          <div className="offer--content">
            Book Your Family Adventure Today and Enjoy 30% Off All Tours. Create
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
              FunFamily30 &nbsp;
              <span className="copy-coupon" onClick={copyToClipboard}>
                <img src={copy} alt="copy icon" />
              </span>
            </span>
          </div>
        </div>
        {/* Popup Notification */}
        {isCopied && (
          <div className="copy-popup">Coupon code copied to clipboard!</div>
        )}
      </div>
    </div>
  );
};
