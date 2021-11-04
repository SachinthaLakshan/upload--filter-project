import React, { useState, useEffect } from 'react';
import Section from './Section';


const Main = () => {
    var isection =[
        {
            id: 1,
            sectionName: "Homeeeee"
        }
        ];

    const [section, setSection] = useState([isection]);

    useEffect(() => {
        let arr = localStorage.getItem("section");
        if (arr) {
            let obj = JSON.parse(arr)
            setSection(obj)
        }
    }, [])

    
    const sectionCloseBtnHandler = (index) => {
        let tempList = section;
        tempList.splice(index, 1)
        localStorage.setItem("section", JSON.stringify(tempList))
        setSection(tempList)
        window.location.reload()
    }

    const addSection = () => {
        let tempList = section;
        tempList.push({id:2,sectionName:"NEW SECTION"});
        localStorage.setItem("section", JSON.stringify(tempList));
        setSection(section);
        window.location.reload();
    }

    return (
        <div className="main-container">
            <div >
                {section && section.map((obj, index) => {
                    return (<div key={index}>
                        <Section scectionObj={obj} index={index} closeBtnHandler={sectionCloseBtnHandler} />
                        <div className="plus-icon-wrapper" onClick={addSection}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                    </div>)
                })}
            </div>
            <div className="sidebar">
                <h2>Filter</h2>
                <div className="row-1" >
                    <input type="checkbox" />
                    <label>Images</label>
                </div>
                <div className="row-1" >
                    <input type="checkbox" />
                    <label>Link</label>
                </div>
                <div className="row-1" >
                    <input type="checkbox" />
                    <label>Copytext</label>
                </div>
                <div className="row-1">
                    <input type="checkbox" />
                    <label>Description</label>
                </div>
            </div>

        </div>
    );
};

export default Main;