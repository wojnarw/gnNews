import { useEffect, useState } from "react";
import Post from "../components/Article";
import { getTopPosts } from "../api/requests";
import Panel from "../components/Panel";
import Loader from "../components/Loader";

const TopArticles = () => {
    let [posts, setPosts] = useState([]);
    let [loaderVisible, setLoaderVisible] = useState(true);
    
    useEffect(_ => {
        getTopPosts()
            .then(data => setPosts(data))
            .then(_ => setLoaderVisible(false))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <Panel title="TOP POSTS">Top 10 most viewed posts</Panel>
            {loaderVisible && <Loader />}
            {posts && posts.map((post, index) => <Post key={index} author={post.author} title={post.title} date={post.publishedAt} source={post.source} url={post.url} />)}
        </div>
    );
}

export default TopArticles;