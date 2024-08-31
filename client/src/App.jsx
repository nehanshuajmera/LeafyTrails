import "./App.scss";
import { Routes, Route } from "react-router-dom";

/* universal component import */
import { Header } from "./components/universal.component/header/header.component";
import { Footer } from "./components/universal.component/footer/footer.component";
import { ByNehanshu } from "./components/universal.component/by-me/by-me.component";

/* pages import */
import { HomePage } from "./pages/homepage/homepage-component";
import { AboutPage } from "./pages/about-page/about-page.component";
import { TourPage } from "./pages/tour-page/tour-page.component";
import { StoryPage } from "./pages/story-page/story-page.component";
import { BookingPage } from "./pages/booking-page/booking-page.component";

/* hooks and utility component import */
import useScrollToTop from "./hooks/scroll-to-top/scroll-to-top";

const App = () => {
  useScrollToTop();
  return (
    <div className="App">
      <Header />
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tours" element={<TourPage />} />
          <Route path="/stories" element={<StoryPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
      <Footer />
      <ByNehanshu />
    </div>
  );
};

export default App;
