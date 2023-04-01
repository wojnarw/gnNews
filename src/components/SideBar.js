import classes from '../styles/Sidebar.module.css';
import { countries } from '../api/countries';
import Country from './Country';
import { useSelector } from 'react-redux';

const SideBar = () => {
    const mobileMenu = useSelector(state => state.mobileMenu);

    return (
        <div className={mobileMenu ? classes.mobileSidebar : classes.sidebar}>
            <ul>
                <li>Top Headlines</li>
                {Object.keys(countries).map((countryCode, index) => <li key={index}><Country key={countryCode} countryCode={countryCode} /></li>)}
            </ul>
        </div>
    )
}

export default SideBar;