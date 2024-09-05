import "./by-me.styles.scss";
import { Link } from "react-router-dom";

export const ByNehanshu = () => {
  return (
    <div className="by-nehanshu">
      <span className="my-footer--1">
        Presenting{" "}
        <Link to="https://leafytrails.netlify.app/" target="_blank">
          {" "}
          Leafy Trails{" "}
        </Link>{" "}
        By&nbsp;
      </span>
      <h2 className="heading-secondary">
        <Link to="https://github.com/nehanshuajmera" target="_blank">
          {" "}
          Nehanshu Ajmera{" "}
        </Link>
      </h2>
    </div>
  );
};
