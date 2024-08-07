import { LandingAbout } from '../../components/landing-about/landing-about.component';
import './homepage.styles.scss';

export const HomePage = () => {
  return (
    <div className="homepage">
      {/* Landing About */}
      <LandingAbout />
    </div>
  )
}