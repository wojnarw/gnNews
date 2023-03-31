import classes from '../styles/MiddlePanel.module.css';

const MiddlePanel = ({ children }) => {

    return (
        <div className={classes.main}>
            { children }
        </div>
    )
}

export default MiddlePanel;