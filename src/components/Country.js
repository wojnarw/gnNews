import { Link } from 'react-router-dom';
import { countries } from '../api/countries';
import classes from "../styles/Countries.module.css";

const Country = ({ countryCode }) => {

    return (
        <div className={classes.sountry}>
            <Link to={"/country/" + countryCode} ><img className={classes.flag} src={"/flags/" + countryCode + ".png"} />{countries[countryCode]}</Link>
        </div>
    )
}

export default Country;