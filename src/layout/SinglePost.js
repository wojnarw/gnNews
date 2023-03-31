import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/requests";
import Post from "../components/Article";

const SinglePost = () => {
    let [post, setPost] = useState();
    let { id } = useParams();

    useEffect(_ => {
        getPost(id)
            .then(data => setPost(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            {post && <Post key={post.id} author={post.author} content={post.content}
                date={post.postDate} views={post.viewCount} />}
        </div>
    )
}

export default SinglePost;