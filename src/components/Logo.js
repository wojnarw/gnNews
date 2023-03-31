import classes from '../styles/MainNavigation.module.css';

const Logo = () => {
    return (
        // <div className={classes.logo}>
        //     <h1>gnNews</h1>
        //     <span>your daily news</span>
        // </div>
        <div>
            <img className={classes.logoImg} src="/logo/svg/logo-no-background.svg" />
        </div>
    );
}

export default Logo;