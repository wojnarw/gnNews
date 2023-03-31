import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLastPosts, getTopPosts } from "../api/requests";
import Loader from "../components/Loader";
import Panel from "../components/Panel";
import Post from "../components/Article";
import classes from "../styles/MainContent.module.css";

const MainContent = () => {
    let [articles, setArticles] = useState([]);
    let [loaderVisible, setLoaderVisible] = useState(true);
    let [errorMsg, setErrorMsg] = useState();
    let [isList, setIsList] = useState(true);
    const { countryCode } = useParams();

    const changeView = () => {
        setIsList(isList ? false : true)
    }

    useEffect(_ => {
        getTopPosts(countryCode)
            .then(data => {
                setErrorMsg();
                setLoaderVisible(false);
                console.log(1, data);
                if (Object.hasOwn(data, "error")) throw data;
                setArticles(data.articles);
            })
            .catch(err => {
                console.error(err);
                if(Object.hasOwn(err, "error")) setErrorMsg(err.error);
                else setErrorMsg("Unknown error, check console");
            });
    }, [countryCode]);

    return (
        <div className={isList ? classes.listView : classes.panelsView}>
            <div onClick={changeView}>AAAAAAAAAAAA</div>
            {loaderVisible && <Loader />}
            {errorMsg && <Panel title="Error">{errorMsg}</Panel>}
            {articles && articles.map((article, index) => {
                // const trimmedContent = post.content.substring(0, maxPostLength) + (post.content.length > 256 ? "..." : "")

                return <Post key={index} article={article} />
            })}
        </div>
    );
}

export default MainContent;