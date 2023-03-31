import classes from '../styles/Sidebar.module.css';
import { countries } from '../resources/countries';
import Country from './Country';

const SideBar = () => {

    return (
        <div className={classes.sidebar}>
            <ul>
                <li>Top Headlines</li>
                {Object.keys(countries).map((countryCode, index) => {
                    console.warn(countryCode);
                return <li key={index}><Country key={countryCode} countryCode={countryCode} /></li>
})}
            </ul>
        </div>
    )
}

export default SideBar;