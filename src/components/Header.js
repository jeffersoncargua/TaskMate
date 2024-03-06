import Logo from '../assets/logo.png';

import './Header.css';

export const Header = () => {
  return (
    <header>
        <img className='logo' src={Logo} alt="loco" />
        <a href="/">Home</a>
    </header>
  )
}
