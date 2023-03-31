import { useState } from "react";
import { Link } from "react-router-dom";
import classes from '../styles/MainNavigation.module.css';
import Logo from "./Logo";
import Popup from "./Popup";

const PageHeader = () => {
    let [popupVisible, setPopupVisible] = useState(false);

    const showAboutPage = () => {
        setPopupVisible(true);
    }

    return (
        <div className={classes.header}>
            <Link to="/"className={classes.invisibleLink}><Logo /></Link>
            <ul>
                <li><Link to="/">Change view</Link></li>
                <li onClick={showAboutPage}><div title="About" className={classes.about}>i</div></li>
            </ul>
            { popupVisible && <Popup title="About" text="some text" hidePopup={ _ => setPopupVisible(false) } /> }
        </div>
    )
}

export default PageHeader;