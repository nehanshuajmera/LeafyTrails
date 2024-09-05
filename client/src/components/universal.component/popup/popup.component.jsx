import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AnimatedButton } from "../animated-button/animated-button.component";
import "./popup.styles.scss";

export const Popup = ({ isOpen, onClose, title, heading, content, images }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(
        () => setIsTransitioning(true),
        10
      ); /* Delay for smooth transition */
    } else {
      setIsTransitioning(false);
      setTimeout(
        () => setIsVisible(false),
        300
      ); /* Delay for smooth transition out */
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className={`popup ${isTransitioning ? "popup--open" : ""}`}>
      <div
        className={`popup__content ${
          isTransitioning ? "popup__content--open" : ""
        }`}
      >
        <div className="popup__left">
          {images &&
            images
              .slice(0, 2)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`tour ${index}`}
                  className="popup__img"
                />
              ))}
        </div>
        <div className="popup__right">
          <Link onClick={onClose} className="popup__close">
            &times;
          </Link>
          <h2 className="heading-secondary utility-margin-btm-small">
            {title}
          </h2>
          <h3 className="heading-tertiary utility-margin-btm-small">
            {heading}
          </h3>
          <p className="popup__text utility-margin-btm-md-2">{content}</p>
          <AnimatedButton to='/booking' color="blue">Book Now</AnimatedButton>
        </div>
      </div>
    </div>
  );
};
