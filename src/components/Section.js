import React, { useState } from 'react';


const Section = (props) => {

    const [headerIsEditable, setHeaderIsEditable] = useState(false);


    const clickHandler = () => {
        setHeaderIsEditable(true);
    }
    const sectionCloseBtnHandler = () => {
        props.closeBtnHandler(props.scectionObj.id);
    }
    const copyRightBtnClickHandler = () => {
        return (
            <div className="copyright-btn-element-wrapper">
                <h2>My Headline</h2>
                <p>This is my copy text</p>
            </div>
        )
    }
    const abc = (
        <div className="copyright-btn-element-wrapper">
            <h2>My Headline</h2>
            <p>This is my copy text</p>
        </div>
    );

    return (
        <div className="card-container">
            <div className="section-header">
                {!headerIsEditable ? <h5 onClick={clickHandler} alt={"click to edit"} >{props.scectionObj.sectionName}</h5 > :
                    <input placeholder="Add Header.." />}
                <i className="fa fa-times-circle-o" onClick={sectionCloseBtnHandler} />
            </div>
            <div className="section-initial-text">
                <p>Select the component that you want to add</p>
            </div>
            <div className="row-1 bottom-btn-wraper">
                <button className="row-buttons" onClick={() => copyRightBtnClickHandler()}>CopyRight</button>
                <button className="row-buttons">Description</button>
                <button className="row-buttons">File</button>
                <button className="row-buttons">Link</button>
                <button className="row-buttons">Line</button>
            </div>
        </div>
    );
};

export default Section;