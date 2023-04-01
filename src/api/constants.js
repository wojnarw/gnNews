// Get API key here:
// https://newsapi.org/docs/get-started

const URL = "https://newsapi.org/v2/";
const KEY = "2f2f15db7aa0476493889dd12ffdc81e";

const API = {
    TOP: `${URL}top-headlines?apiKey=${KEY}&`,
    CACHE_LIFE: 30 * 60 * 1000, // 30 minutes, free APIs have very low requests limit
    COUNTRY_KEY_LENGTH: 2, // allowed country code length in URL
}

export default API;