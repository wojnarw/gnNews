import React from "react";
import classes from "../styles/Card.module.css";

const Panel = (props) => {

    return (
        <div className={classes.card}>
            {props.title && <h2>{props.title}</h2>}
            {props.children && <div>{props.children}</div>}
        </div>
    );
}

export default Panel;