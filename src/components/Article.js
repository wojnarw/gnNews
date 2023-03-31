import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Article.module.css";

const Article = (props) => {

    const {
        article: {
            title: articleTitle,
            description: articleDescription,
            author: articleAuthor,
            url: articleUrl,
            urlToImage: imageUrl,
            publishedAt: articleDatetime,
            source: {
                name: sourceName
            }},
    } = props;

    let articleFooter;
    if (articleAuthor && sourceName) articleFooter = `By ${articleAuthor} - ${sourceName}`;
    else if (articleAuthor) articleFooter = `By ${articleAuthor}`;
    else if (sourceName) articleFooter = `Source: ${sourceName}`;

    return (
        <div className={classes.card}>

            {imageUrl && <Link target="_blank" className={classes.invisibleLink} to={articleUrl}><div className={classes.articleImage}><img src={imageUrl} /></div></Link>}

            <div className={classes.content}>
                <Link target="_blank" className={classes.invisibleLink} to={articleUrl}>
                    <h4>{articleTitle}</h4>
                    <div className={classes.timestamp}>
                        <span>{articleDatetime}</span></div>

                    {articleDescription && <div>{articleDescription}</div>}<br />
                    {/* {props.article.content && <div>{props.article.content}</div>} */}
                </Link>

                {articleFooter && <div className={classes.authors}>{articleFooter}</div>}
            </div>
            {/* {articleAuthor && <Link className={classes.invisibleLink} to={"author/" + articleAuthor}><span>{articleAuthor}</span></Link>} */}

        </div>
    );
}

export default Article;