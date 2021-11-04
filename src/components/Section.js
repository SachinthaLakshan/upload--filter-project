import React, { useState } from 'react';


const Section = ({scectionObj,closeBtnHandler,index}) => {

     const [headerIsEditable, setHeaderIsEditable] = useState(false);
    // var section = [
    //     {
    //         id: 1,
    //         sectionName: "Homeeeee"
    //     }, {
    //         id: 2,
    //         sectionName: "Car"
    //     },
    //     {
    //         id: 3,
    //         sectionName: "Bike"
    //     }
    // ];
    // localStorage.setItem("section", JSON.stringify(section));
    // var storedColors = JSON.parse(localStorage.getItem("section"));
    // console.log(storedColors);

    const clickHandler = () => {
        setHeaderIsEditable(true);
    }
    const sectionCloseBtnHandler =()=>{
        closeBtnHandler(index)
    }
   
    return (
        <div className="card-container">
            <div className="section-header">
                {!headerIsEditable ? <h5 onClick={clickHandler} alt={"click to edit"} >{scectionObj.sectionName}</h5 > :
                    <input placeholder="Add Header.." />}
                <i className="fa fa-times-circle-o" onClick={sectionCloseBtnHandler} />
            </div>
            <div className="row-1 bottom-btn-wraper">
                <button className="row-buttons">CopyRight</button>
                <button className="row-buttons">Description</button>
                <button className="row-buttons">File</button>
                <button className="row-buttons">Link</button>
                <button className="row-buttons">Line</button>
            </div>
        </div>
    );
};

export default Section;