import classes from '../styles/Popup.module.css';

const Popup = (props) => {

    return (
        <div className={classes.popupBg} onClick={props.hidePopup}>
            <div className={classes.popup}>
                <div onClick={props.hidePopup} className={classes.closeBtn}>X</div>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Popup;