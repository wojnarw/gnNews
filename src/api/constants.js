const URL = "uuu https://newsapi.org/v2/";
const KEY = "2f2f15db7aa0476493889dd12ffdc81e";

//endpoints:
const API = {
    KEY: KEY,
    POSTS: URL + "posts",
    LAST: URL + "posts/last",
    TOP: `${URL}top-headlines?country=pl&apiKey=${KEY}`,
    NEW: URL + "post/new",
    POST: URL + "post/",
    AUTHOR: URL + "author/"
}

export default API;