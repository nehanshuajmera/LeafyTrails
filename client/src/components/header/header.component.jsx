import './header.styles.scss';
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="/logo (2).png" alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading__primary">
          <span className="heading__primary--main">Outdoors</span>
          <span className="heading__primary--sub">is where life happens</span>
        </h1>
        <Link to="#" className='btn btn--white btn--animated'>Discover our tours</Link>
      </div>
    </header>
  )
} 