import './header.styles.scss';

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
      </div>
    </header>
  )
}