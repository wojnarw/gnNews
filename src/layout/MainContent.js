import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api/requests";
import Loader from "../components/Loader";
import Panel from "../components/Panel";
import Post from "../components/Article";
import classes from "../styles/MainContent.module.css";
import { addArticles } from "../store/newsReducer";
import API from "../api/constants";
import { useDispatch, useSelector } from "react-redux";

const MainContent = () => {
    const { countryCode = "us" } = useParams();
    const dispatch = useDispatch();
    let [loaderVisible, setLoaderVisible] = useState(true);
    let [errorMsg, setErrorMsg] = useState();

    const news = useSelector(state => state.news);
    const viewType = useSelector(state => state.viewType);
    let articles;

    useEffect(_ => {

        // check if store contains recent news for selected country
        if (Object.hasOwn(news, countryCode)) {
            let updatedAt = news[countryCode].updatedAt;

            updatedAt = new Date(updatedAt).getTime();
            const timeNow = new Date().getTime();

            if (timeNow - updatedAt <= API.CACHE_LIFE) {
                console.debug("Using cached articles");
                setErrorMsg(null);
                articles = news[countryCode].articles;
                return;
            };
        }

        getArticles(countryCode)
            .then(data => {
                setErrorMsg(null);
                setLoaderVisible(false);
                if (!data) return;
                if (Object.hasOwn(data, "error")) throw data;
                dispatch(addArticles({
                    countryCode: countryCode,
                    articles: [...data.articles]
                }));
            })
            .catch(err => {
                console.error(err);
                if (Object.hasOwn(err, "error")) setErrorMsg(err.error);
                else setErrorMsg("ERROR", err);
            });
    }, [countryCode]);

    return (
        <div className={viewType === "list" ? classes.listView : classes.panelsView}>
            {loaderVisible && <Loader />}
            {errorMsg && <Panel title="Error">{errorMsg}</Panel>}
            { (Object.hasOwn(news, countryCode) && news[countryCode].articles) && news[countryCode].articles.map((article, index) => <Post key={index} article={article} />)}
        </div>
    );
}

export default MainContent;