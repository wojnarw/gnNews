import { Link } from 'react-router-dom';
import { countries } from '../resources/countries';
import classes from "../styles/Countries.module.css";

const Country = ({ countryCode }) => {

    return (
        <div>
            <Link to={"/country/" + countryCode} ><img className={classes.flag} src={"/flags/" + countryCode + ".png"} />{countries[countryCode]}</Link>
        </div>
    )
}

export default Country;