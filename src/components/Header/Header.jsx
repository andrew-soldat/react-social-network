import { NavLink } from 'react-router-dom';
import logo from './../../logo.svg';
import s from './Header.module.css';

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src={logo} className={s.logo} alt="logo" />
			<div className={s.loginBlock}>
				{ props.isAuth ? <div>{props.login}<button onClick={props.logout} className={s.btn + " " + s.logout}>Log Out</button></div> : <NavLink to={'/login'}><button className={s.btn + " " + s.signin}>Sign in</button></NavLink> }
			</div>
		</header>
	);
}
export default Header;