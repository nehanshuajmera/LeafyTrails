import { Feature } from '../../components/feature/feature.component';
import { LandingAbout } from '../../components/landing-about/landing-about.component';
import './homepage.styles.scss';

export const HomePage = () => {
  return (
    <div className="homepage">
      {/* Landing About */}
      <LandingAbout />

      {/* Feature Section */}
      <Feature />
    </div>
  )
}