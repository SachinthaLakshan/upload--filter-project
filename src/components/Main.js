import React, { useState, useEffect } from 'react';
import Section from './Section';


const Main = () => {
    const InitialState={
        id:0,
        sectionName:"SECTION NAME"
    }
//localStorage.clear();
    const [section, setSection] = useState([InitialState]);
    const [id ,setCount]=useState(InitialState.id);

    useEffect(() => {
        let arr = localStorage.getItem("section");
        if (arr) {
            let obj = JSON.parse(arr);
            setSection(obj);
        }
    }, [])

    
    const sectionCloseBtnHandler = (index) => {
        var tempArr=section.filter(obj=>obj.id!==index);
        setSection(tempArr);
        localStorage.setItem("section", JSON.stringify(tempArr))       
    }

    const addSection = () => {
        let tempList = section;
        let arr=tempList.concat({
            id: id+1,
            sectionName: `SECTION NANE-${section.length}`
        });
        setSection(arr);
        setCount(id+1);
        localStorage.setItem("section", JSON.stringify(tempList));   
    }

    return (
        <div className="main-container">
            <div >
                {section.map((obj) => {
                    return (<div key={obj.id}>
                        <Section scectionObj={obj}  closeBtnHandler={sectionCloseBtnHandler} />
                    </div>)
                })}
                <div className="plus-icon-wrapper" onClick={addSection}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
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