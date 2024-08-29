import { useLocation, useNavigate } from "react-router-dom";

function DiscoverToursButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    // Check if we're on the home page
    if (location.pathname === "/") {
      // Navigate to the #tours section on the home page
      const element = document.getElementById("tours");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to /tours
      navigate("/tours");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="anchor__btn anchor__btn--white anchor__btn--animated"
    >
      Discover Our Tours
    </button>
  );
}

export default DiscoverToursButton;
