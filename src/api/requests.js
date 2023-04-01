import API from "./constants";
import * as country from "../resources/dummyData";

const getArticles = async (countryCode = "us") => {

    if (countryCode.length !== API.COUNTRY_KEY_LENGTH) return;

    //UNCOMMENT TO USE DUMMY DATA (to save free API requests), couple countries's news available
    // if (country[countryCode]) {
    //     console.log("Used dummy data");
    //     console.debug(country[countryCode]);
    //     return Promise.resolve(country)
    // }
    // return Promise.resolve(country);
    //DUMMY

    console.debug("USING REAL API");
    return await fetch(API.TOP + "country=" + countryCode)
        .then(data => data.json());
}

export { getArticles };