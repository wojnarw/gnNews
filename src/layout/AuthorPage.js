import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsByAuthor } from "../api/requests";
import Loader from "../components/Loader";
import Panel from "../components/Panel";
import Post from "../components/Article";

const AuthorPage = () => {
    let [posts, setPosts] = useState([]);
    let [loaderVisible, setLoaderVisible] = useState(true);
    let [errorMsg, setErrorMsg] = useState();
    let { authorName } = useParams();
    const maxPostLength = 256;

    useEffect(_ => {
        getPostsByAuthor(authorName)
            .then(data => {
                setLoaderVisible(false);
                setPosts(data);
            })
            .catch(err => {
                console.error(err);
                setErrorMsg("err");
            });
    }, []);

    return (
        <div>
            <Panel title={authorName}>Posts written by {authorName}</Panel>
            {loaderVisible && <Loader />}
            {errorMsg && <Panel title="Error">{errorMsg}</Panel>}
            {posts && posts.map(post => {
                const trimmedContent = post.content.substring(0, maxPostLength) + (post.content.length > 256 ? "..." : "")

                return <Post key={post.id} content={trimmedContent}
                    date={post.postDate} views={post.viewCount} linkId={post.id} />
            })}
        </div>
    )
}

export default AuthorPage;