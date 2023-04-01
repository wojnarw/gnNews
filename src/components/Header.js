import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from '../styles/MainNavigation.module.css';
import Logo from "./Logo";
import About from "./About";
import { toggleView } from "../store/viewTypeReducer";
import { togleMobileMenu } from "../store/mobileMenuReducer";
import { useDispatch } from "react-redux";

const Header = () => {
    let [popupVisible, setPopupVisible] = useState(false);
    const dispatch = useDispatch();

    const showAboutPage = () => {
        setPopupVisible(true);
    }

    useEffect(_ => {
        dispatch(toggleView());
    }, []);

    return (
        <div className={classes.header}>
            <Link to="/"className={classes.invisibleLink}><Logo /></Link>
            <ul>
                <li onClick={_ => dispatch(togleMobileMenu())}><div title="Show menu" className={classes.menu}><div>&nbsp;</div></div></li>
                <li onClick={_ => dispatch(toggleView())}><div title="Change View" className={classes.changeView}><div>&nbsp;</div></div></li>
                <li onClick={showAboutPage}><div title="About" className={classes.about}>i</div></li>
            </ul>
            { popupVisible && <About hidePopup={ _ => setPopupVisible(false) } /> }
        </div>
    )
}

export default Header;