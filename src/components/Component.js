import React, { useState } from 'react';


const Component = (props) => {

    const [headline, setHeadline] = useState("");
    const [type, setType] = useState("");
    const [headlineText, setHeadlineText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const [linkText, setLinkText] = useState("");
    const [toggleHeadlineText, setToggleHeadlineText] = useState(true);

    const idGenarator = () => {
        var val = Math.floor(1000 + Math.random() * 9000);
        return (val);
    }

    const genarateComponentObj = (type) => {
        if (type === "copyright") {
            return { id: idGenarator(), type: props.type, headerText: headline, headerBody: headlineText, editable: false }
        }
        else if (type === "description") {
            return { id: idGenarator(), type: props.type, descriptionText: descriptionText, editable: false }
        }
        else if (type === "file") {
            return { id: idGenarator(), type: props.type, fileName: "", fileUrl: "", editable: false }
        }
        else if (type === "link") {
            return { id: idGenarator(), type: props.type, url: linkText, editable: false }
        }
        else if (type === "line") {
            return { id: idGenarator(), type: props.type, editable: false }
        }

    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {     
                setToggleHeadlineText(false);
                props.componentSaveHandler(genarateComponentObj(props.type), props.sectionId, props.componentId);
        }

    }
    const focusedType = (type) => {
        setType(type);
    }

    const Component = () => {
        switch (props.type) {
            case "copyright": return (
                <div className="copyright-wrapper">
                    <input className="headline" onFocus={() => focusedType("headline")} placeholder="My Headline" onChange={(e) => setHeadline(e.target.value)}/> 
                    <br />
                    <input placeholder="his is my copy text" onFocus={() => focusedType("headlinetext")} onChange={(e) => setHeadlineText(e.target.value)} onKeyDown={handleKeyDown} /> 
                </div>
            )
            case "description": return ( <div className="description-input"><textarea placeholder="I would like to here.." onFocus={() => focusedType("description")} onChange={(e) => setDescriptionText(e.target.value)} onKeyDown={handleKeyDown} /></div>)
            case "file": return (<input type="file" />)
            case "link": return (<input type="url" />)
            case "line": return (<div className="section-initial-text"><hr  /><input onKeyDown={handleKeyDown}/></div>)
            default:
        }
    }

    return (
        <div className="component-container">
            {toggleHeadlineText ? Component() : <></>}
        </div>
    );
};

export default Component;