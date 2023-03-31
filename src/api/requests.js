import API from "./constants";
import * as country from "../resources/dummyData";

const getPost = async (id) => {
    return await fetch(API.POST + id)
        .then(data => data.json());
}


const getTopPosts = async (countryCode) => {
    if(countryCode && countryCode.length === 2 && Object.hasOwn(country, countryCode)) {
        if (country[countryCode]) {
            console.log("used cache");
            console.log(country[countryCode]);
            return Promise.resolve(country[countryCode])
        }
        return Promise.resolve(country["us"]);
    }

    // return await fetch(API.TOP)
    // .then(data => data.json())
    // .then(data => {
    //     console.log(data);
    //     cache = data.articles;
    //     return data.articles;
    // })
}

const getAllPosts = async (code) => {
    return await fetch(API.POSTS + "?country=" + code)
        .then(data => data.json());
}

const getPostsByAuthor = async (author) => {
    return await fetch(API.AUTHOR + author)
        .then(data => data.json());
}

const getLastPosts = async () => {
    return await fetch(API.LAST)
        .then(data => data.json());
}

export { getPost, getAllPosts, getTopPosts, getLastPosts, getPostsByAuthor };