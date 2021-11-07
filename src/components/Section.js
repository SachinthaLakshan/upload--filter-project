import React, { useState } from 'react';
import Component from './Component';


const Section = (props) => {

    const [headerIsEditable, setHeaderIsEditable] = useState(false);
    const [rowButtontype, setRowButtontype] = useState("");
    const [componentType, setComponentType] = useState("");


    const clickHandler = () => {
        setHeaderIsEditable(true);
    }
    const sectionCloseBtnHandler = () => {
        props.closeBtnHandler(props.scectionObj.id);
    }
    const idGenarator = () => {
        var val = Math.floor(1000 + Math.random() * 9000);
        return (val);
    }
    const rowBtnClickHandler = (type) => {

        setComponentType(type);

    }
    const buttonRow = (<>
        <div className="section-initial-text">
            <hr />

            <p>Select the component that you want to add</p>
        </div>
        <div className="row-1 bottom-btn-wraper">
            <button className="row-buttons" onClick={() => rowBtnClickHandler("copyright")}>CopyRight</button>
            <button className="row-buttons" onClick={() => rowBtnClickHandler("description")}>Description</button>
            <button className="row-buttons" onClick={() => rowBtnClickHandler("file")}>File</button>
            <button className="row-buttons" onClick={() => rowBtnClickHandler("link")}>Link</button>
            <button className="row-buttons" onClick={() => rowBtnClickHandler("line")}>Line</button>
        </div>
    </>
    );

    return (
        <div className="card-container">
            <div className="section-header">
                {!headerIsEditable ? <h5 onClick={clickHandler} alt={"click to edit"} >{props.scectionObj.sectionName}</h5 > :
                    <input placeholder="Add Header.." />}
                <i className="fa fa-times-circle-o" onClick={sectionCloseBtnHandler} />
            </div>
           
            {props.scectionObj.component && props.scectionObj.component.map((obj) => {
                return (<div className="copyright-preview" key={obj.id}>
                     <div className="plus-icon-wrapper" >
                <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
                    <h2>{obj.headerText}</h2>
                    <p>{obj.headerBody}</p>
                </div>)
            })}
             {componentType === "copyright" ? <div className="section-initial-text" >
                <Component type="copyright" sectionId={props.scectionObj.id} componentSaveHandler={props.componentSaveHandler} />
            </div> : <></>
            }
            {buttonRow}
        </div>
    );
};

export default Section;