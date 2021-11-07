import React, { useState } from 'react';


const Component = (props) => {

    const [headline,setHeadline]=useState("");
    const [headlineText,setHeadlineText]=useState("");
    const [toggleHeadline,setToggleHeadline]=useState(true);
    const [toggleHeadlineText,setToggleHeadlineText]=useState(true);

    const idGenarator = () => {
        var val = Math.floor(1000 + Math.random() * 9000);
        return (val);
    }

    var componentObj={id:idGenarator(),type: props.type,headerText: headline,headerBody: headlineText}

    const handleKeyDown = (event,type) => {
        if (event.key === 'Enter') {
            if(type==="headline")setToggleHeadline(false);
            else if(type==="headlinetext")setToggleHeadlineText(false);
        }
        
      }

    const Component = () => {
        switch (props.type) {
            case "copyright": return (
                <div className="copyright-wrapper">
                    {toggleHeadline?<input className="headline" placeholder="My Headline" onChange={(e)=>setHeadline(e.target.value)} onKeyDown={handleKeyDown("headline")} />:<p className="headline">{headline}</p>}
                    <br/>
                    {toggleHeadlineText?<input placeholder="his is my copy text" onChange={(e)=>setHeadlineText(e.target.value)} />:<p>{headlineText("headlinetext")}</p>}
                    
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
            <div className="plus-icon-wrapper" >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
            {Component()}
        </div>
    );
};

export default Component;