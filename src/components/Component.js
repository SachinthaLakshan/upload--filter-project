import React, { useState } from 'react';


const Component = (props) => {

    const [headline, setHeadline] = useState("");
    const [type, setType] = useState("");
    const [headlineText, setHeadlineText] = useState("");
    const [toggleHeadline, setToggleHeadline] = useState(true);
    const [toggleHeadlineText, setToggleHeadlineText] = useState(true);

    const idGenarator = () => {
        var val = Math.floor(1000 + Math.random() * 9000);
        return (val);
    }

    var componentObj = { id: idGenarator(), type: props.type, headerText: headline, headerBody: headlineText,editable:false }

    const handleKeyDown = (event) => {

        if (event.key === "Enter") {
            if (type === "headline") {
                setToggleHeadline(false);
            }
            else if (type === "headlinetext") {
                setToggleHeadlineText(false);
                props.componentSaveHandler(componentObj,props.sectionId);
            }
        }

    }
    const focusedType = (type) => {
        setType(type);
    }

    const Component = () => {
        switch (props.type) {
            case "copyright": return (
                <div className="copyright-wrapper">
                    {toggleHeadline ? <input className="headline" onFocus={() => focusedType("headline")} placeholder="My Headline" onChange={(e) => setHeadline(e.target.value)} onKeyDown={handleKeyDown} /> : <p className="headline">{headline}</p>}
                    <br />
                    {toggleHeadlineText ? <input placeholder="his is my copy text" onFocus={() => focusedType("headlinetext")} onChange={(e) => setHeadlineText(e.target.value)} onKeyDown={handleKeyDown} /> : <p>{headlineText}</p>}

                </div>
            )
            case "description": return (<p>Description</p>)
            case "file": return (<p>file</p>)
            case "link": return (<p>Link</p>)
            case "line": return (<p>Line</p>)
            default:
        }
    }

    return (
        <div className="component-container">
           
            {toggleHeadlineText?Component():<></>}
        </div>
    );
};

export default Component;