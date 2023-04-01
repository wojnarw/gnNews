import React, { useEffect, useState } from "react";
import Popup from "../components/Popup";
import { Link } from "react-router-dom";
import classes from "../styles/Article.module.css";
import { useSelector } from "react-redux";

const Article = (props) => {
    const [popupVisible, setPopupVisible] = useState(false);
    const viewType = useSelector(state => state.viewType);

    const {
        article: {
            title: articleTitle,
            description: articleDescription,
            author: articleAuthor,
            url: articleUrl,
            urlToImage: imageUrl,
            publishedAt: articleDatetime,
            content: articleContent,
            source: {
                name: sourceName
            } },
    } = props;

    const openPopup = () => {
        setPopupVisible(!popupVisible)
    }

    let articleShortText;
    if (articleDescription || articleContent) {
        articleShortText = articleDescription || articleContent;
        articleShortText = articleShortText.substring(0, 80).trim() + "...";
    }

    let articleFooter;
    if (articleAuthor && sourceName) articleFooter = `By ${articleAuthor} - ${sourceName}`;
    else if (articleAuthor) articleFooter = `By ${articleAuthor}`;
    else if (sourceName) articleFooter = `Source: ${sourceName}`;

    return (
        <div onClick={openPopup} className={viewType === "panels" ? classes.panelCard : classes.listCard}>
            {(viewType === "panels" && imageUrl) && <div className={classes.articleImage}><img src={imageUrl} /></div>}
            <div className={classes.content}>
                <h4>{articleTitle}</h4>
                {(viewType === "panels" && articleShortText) && <div>{articleShortText}</div>}
                <div className={classes.timestamp}>
                    <span>{articleDatetime}</span>
                    {sourceName && <div className={classes.authors}>{sourceName}</div>}
                </div>
            </div>
            {popupVisible && <Popup title={articleTitle} text={articleDescription} subtext={articleContent} url={articleUrl} imageUrl={imageUrl}
                footer={articleFooter} hidePopup={_ => setPopupVisible(false)} />}
        </div>
    );
}

export default Article;