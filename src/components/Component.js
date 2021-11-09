import React, { useState } from 'react';


const Component = (props) => {

    const [headline, setHeadline] = useState("");
    const [headlineText, setHeadlineText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const [linkText, setLinkText] = useState("");
    const [imageName, setImageName] = useState("");
    const [toggleHeadlineText, setToggleHeadlineText] = useState(true);
    const [image, setImage] = useState({ preview: "", raw: "" });
    const [imageLinkFocus, setImageLinkFocus] = useState(false);
    const [date, SetDate] = useState("");
     
    var currentDate=new Date().toLocaleString() + '';

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };
    const linkAddFunction = () => {
        props.componentSaveHandler(genarateComponentObj(props.type), props.sectionId, props.componentId);
        setToggleHeadlineText(false);
    }

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
            return { id: idGenarator(), type: props.type, fileName: imageName, fileUrl: image, editable: false,date:currentDate }
        }
        else if (type === "link") {
            return { id: idGenarator(), type: props.type, fileName: imageName, url: linkText, editable: false,date:currentDate }
        }
        else if (type === "line") {
            return { id: idGenarator(), type: props.type, editable: false }
        }

    }

    const imageUploader = () => {
        setToggleHeadlineText(false);
        props.componentSaveHandler(genarateComponentObj(props.type), props.sectionId, props.componentId);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setToggleHeadlineText(false);
            props.componentSaveHandler(genarateComponentObj(props.type), props.sectionId, props.componentId);
        }

    }
    const addLinkFocus = () => {
        setImageLinkFocus(true);
    }

    const Component = () => {
        switch (props.type) {
            case "copyright": return (
                <div className="copyright-wrapper">
                    <input className="headline" placeholder="My Headline" onChange={(e) => setHeadline(e.target.value)} />
                    <br />
                    <input placeholder="his is my copy text" onChange={(e) => setHeadlineText(e.target.value)} onKeyDown={handleKeyDown} />
                </div>
            )
            case "description": return (<div className="description-input"><textarea placeholder="I would like to here.." onChange={(e) => setDescriptionText(e.target.value)} onKeyDown={handleKeyDown} /></div>)
            case "file": return (
                <div className="row-1">
                    <label htmlFor="upload-button">
                        {image.preview ? (
                            <div className="image-upload-container">
                                <img src={image.preview} alt="img" />
                                <input className="image-name" value={imageName} placeholder="Name" onChange={(e) => setImageName(e.target.value)} />
                                <button onClick={imageUploader} className="image-button"><i className="fa fa-cloud-upload" /></button>
                                <p>{new Date().toLocaleString() + ''}</p>
                            </div>
                        ) : (
                            <div className="image-upload-container">
                                <img src="placeholder.png" alt="placeholder" />
                                <input className="image-name" value={imageName} onChange={(e) => setImageName(e.target.value)} placeholder="Name" />
                                <p>{currentDate}</p>
                            </div>
                        )}
                    </label>
                    <input
                        type="file"
                        id="upload-button"
                        style={{ display: "none" }}
                        onChange={handleChange}
                    />
                    <div className="trangle-flag">
                        <i className="fa fa-cloud-upload" />
                    </div>
                </div>
            )
            case "link": return (
                <div className="row-1">
                    <label htmlFor="upload-button">

                        <div className="image-upload-container">
                            <img src={imageLinkFocus ? linkText : "placeholder.png"} alt="placeholder" />
                            <input className="image-name" value={imageName} onChange={(e) => setImageName(e.target.value)} placeholder="Name" />
                            <i className="fa fa-pencil-square-o" />
                            <input className="image-name-url" onFocus={addLinkFocus} value={linkText} placeholder="https://" onChange={(e) => setLinkText(e.target.value)} onKeyDown={handleKeyDown} />
                            <p>{new Date().toLocaleString() + ''}</p>
                        </div>

                    </label>
                    <div className="trangle-flag">
                        <i className="fa fa-link" />
                    </div>
                </div>
            )
            case "line": return (<div className="section-initial-text"><hr /><button onClick={linkAddFunction} >Add</button></div>)
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