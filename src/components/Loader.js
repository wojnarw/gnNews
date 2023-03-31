import classes from '../styles/Loader.module.css';

const Loader = () => {

    return (
        <div className={classes.spinnerContainer}>
            <div className={classes.loadingSpinner}>
            </div>
        </div>
    )
}

export default Loader;