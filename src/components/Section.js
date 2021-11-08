import React, { useState } from 'react';
import Component from './Component';


const Section = (props) => {

    const [headerIsEditable, setHeaderIsEditable] = useState(false);
    const [addButtonKey, setaddButtonKey] = useState(0);
    const [componentType, setComponentType] = useState("");
    const [buttonrowVisible, setButtonrowVisible] = useState(true);
    const [showBottomInputs, setShowBottomInputs] = useState(true);


    const clickHandler = () => {
        setHeaderIsEditable(true);
    }
    const sectionCloseBtnHandler = () => {
        props.closeBtnHandler(props.scectionObj.id);
    }
    const rowBtnClickHandler = (type) => {

        setComponentType(type);
        setButtonrowVisible(false);

    }
    const buttonRow = (<>
        <div className="section-initial-text">


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

    const sidePlusButton = (key) => {
        console.log(key)
        setaddButtonKey(key);
        setShowBottomInputs(false);
    }

    return (
        <div className="card-container">
            <div className="section-header">
                {!headerIsEditable ? <h5 onClick={clickHandler} alt={"click to edit"} >{props.scectionObj.sectionName}</h5 > :
                    <input placeholder="Add Header.." />}
                <i className="fa fa-times-circle-o" onClick={sectionCloseBtnHandler} />
            </div>

            {props.scectionObj.component && props.scectionObj.component.map((obj) => {
                return (<div className="copyright-preview" key={obj.id}>
                    {addButtonKey === obj.id && buttonrowVisible ? buttonRow : <></>}
                    {addButtonKey === obj.id && !buttonrowVisible ? <div className="add-component" >
                        <Component type={componentType} sectionId={props.scectionObj.id} componentSaveHandler={props.componentSaveHandler} componentId={obj.id} />
                    </div> : <></>
                    }
                    <div className="plus-icon-wrapper" onClick={() => sidePlusButton(obj.id)}>
                        <i className="fa fa-plus" aria-hidden="true" ></i>
                    </div>
                    {obj.headerText && <h2>{obj.headerText}</h2>}
                    {obj.headerBody && <p>{obj.headerBody}</p>}
                    {obj.descriptionText && <div className="description-preview"><p>{obj.descriptionText}</p></div>}
                    {obj.type === "line" && <div className="section-initial-text"><hr /></div>}
                    {obj.type === "file" &&
                        <div className="image-upload-container">
                        <img src={obj.fileUrl.preview} alt="placeholder" />
                        <input className="image-name" value={obj.fileName}    />
                    </div>}
                    {obj.type === "link" &&
                        <div className="image-upload-container">
                        <img src={obj.url} alt="placeholder" />
                        <input className="image-name" value={obj.fileName}    />
                    </div>}
                </div>)
            })}
            {showBottomInputs ? <div className="section-initial-text" >
                <Component type={componentType} sectionId={props.scectionObj.id} componentSaveHandler={props.componentSaveHandler} />
            </div> : <></>}
            {buttonRow}
        </div>
    );
};

export default Section;