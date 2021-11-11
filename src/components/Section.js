import React, { useState, useEffect } from 'react';
import Component from './Component';


const Section = (props) => {

    const [addButtonKey, setaddButtonKey] = useState(0);
    const [componentType, setComponentType] = useState("");
    const [buttonrowVisible, setButtonrowVisible] = useState(true);
    const [showBottomInputs, setShowBottomInputs] = useState(true);
    const [sectionNane, setSectionName] = useState(props.scectionObj.sectionName);
    const [isBottom,setIsBottom]=useState(true);

    const sectionCloseBtnHandler = () => {
        props.closeBtnHandler(props.scectionObj.id);
    }
    const componentCloseBtnHandler = (componenntId) => {
        props.componentCloseHandler(props.scectionObj.id,componenntId)
    }
    const rowBtnClickHandler = (type,bottomOrTop) => {
        console.log(bottomOrTop);
        console.log(isBottom);
        if(bottomOrTop==="bottom"){
            setIsBottom(true);
        }else if(bottomOrTop==="middle"){
            setIsBottom(false);
        }
        setComponentType(type);
        setButtonrowVisible(false);
    }
    const buttonRow =(type)=>{ 

        return(<>
        <div className="section-initial-text">
            <p>Select the component that you want to add</p>
        </div>
        <div className="row-1 bottom-btn-wraper">
            <button className="row-buttons" onClick={() => rowBtnClickHandler("copyright",type)}>CopyRight</button>
            <button className="row-buttons" onClick={() => rowBtnClickHandler("description",type)}>Description</button>
            <button className="row-buttons" onClick={() => rowBtnClickHandler("file",type)}>File</button>
            <button className="row-buttons" onClick={() => rowBtnClickHandler("link",type)}>Link</button>
            <button className="row-buttons" onClick={() => rowBtnClickHandler("line",type)}>Line</button>
        </div>
    </>
    )}

    const sidePlusButton = (key) => {
        setaddButtonKey(key);
        setShowBottomInputs(false);
        setButtonrowVisible(true);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            props.updateSectionName({ id: props.scectionObj.id, sectionName: sectionNane });
        }
    }

    return (
        <div className="card-container">
            <div className="section-header">
                <input onKeyDown={handleKeyDown} value={sectionNane} placeholder="SECTION NAME" onChange={(e) => setSectionName(e.target.value)} />
                <i className="fa fa-times-circle-o" onClick={sectionCloseBtnHandler} />
            </div>

            {props.scectionObj.component && props.scectionObj.component.map((obj) => {
                return (<div className="copyright-preview" key={obj.id}>
                    {addButtonKey === obj.id && buttonrowVisible ? buttonRow("middle") : <></>}
                    {addButtonKey === obj.id && !buttonrowVisible ? <div className="add-component" >
                        <Component type={componentType} sectionId={props.scectionObj.id} componentSaveHandler={props.componentSaveHandler} componentId={obj.id} />
                    </div> : <></>
                    }
                    <div className="plus-icon-wrapper" onClick={() => sidePlusButton(obj.id)}>
                        <i className="fa fa-plus" aria-hidden="true" ></i>
                    </div>
                    <div className="componennt-header">
                        <i className="fa fa-times-circle-o" onClick={()=>componentCloseBtnHandler(obj.id)} />
                    </div>
                    {obj.headerText && <h2>{obj.headerText}</h2>}
                    {obj.headerBody && <p>{obj.headerBody}</p>}
                    {obj.descriptionText && <div className="description-preview"><p>{obj.descriptionText}</p></div>}
                    {obj.type === "line" && <div className="section-initial-text"><hr /></div>}
                    {obj.type === "file" &&
                        <div className="image-upload-container">
                            <img src={obj.fileUrl.preview} alt="placeholder" />
                            <input className="image-name" value={obj.fileName} />
                            <p>{obj.date}</p>
                        </div>}
                    {obj.type === "link" &&
                        <div className="image-upload-container">
                            <img src={obj.url} alt="placeholder" />
                            <input className="image-name" value={obj.fileName} />
                            <a href={obj.url}><i href={obj.url} className="fa fa-pencil-square-o" /></a>
                            <input className="image-name-url" disabled={true} value={obj.url} />
                            <p>{obj.date}</p>
                        </div>}
                </div>)
            })}
            {showBottomInputs ||isBottom ? <div className="bottom-input-component" >
                <Component type={componentType} sectionId={props.scectionObj.id} componentSaveHandler={props.componentSaveHandler} />
            </div> : <></>}
            {buttonRow("bottom")}
        </div>
    );
};

export default Section;