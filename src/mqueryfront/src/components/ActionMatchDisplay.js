import React from "react";

const ActionMatchDisplay = (props) => {
    const { text, href } = props;

    return href ?
        (
            <a
                href={href}
                target="_blank"
            >
                {text}
            </a>
        )
        : text;
};


export default ActionMatchDisplay;
