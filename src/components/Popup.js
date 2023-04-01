import React from 'react';
import classes from '../styles/Popup.module.css';
import ConditionalLink from "./ConditionalLink";

const Popup = ({ title, text, subtext, url, imageUrl, hidePopup, footer, children }) => {

    return (
        <div className={classes.popupBg}>
            <div className={classes.popup}>
                <div onClick={hidePopup} className={classes.closeBtn}>X</div>
                <ConditionalLink target="_blank" className={classes.invisibleLink} url={url}>
                    <h3>{title}</h3>
                    {imageUrl && <div className={classes.articleImage}><img src={imageUrl} /></div>}

                    {subtext && <p>{subtext}</p>}
                    {text && <p>{text}</p>}

                    {children && children}
                    {footer && <div className={classes.footer}>{footer}</div>}
                </ConditionalLink>
            </div>
        </div>
    )
}

export default Popup;