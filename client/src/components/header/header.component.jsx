import './header.styles.scss';
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src="https://cdn-icons-png.flaticon.com/512/7893/7893979.png" alt="Logo" className="logo" />
      </div>
      <div className="hero-text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
        <Link to="#" className='btn btn-white'>Discover Now</Link>
      </div>
    </header>
  )
}