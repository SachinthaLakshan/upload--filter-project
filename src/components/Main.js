import React, { useState, useEffect } from 'react';
import Section from './Section';
import produce from "immer"


const Main = () => {
    const InitialState = {
        id: 123,
        sectionName: "SECTION NAME",
        component: []
    }
    //localStorage.clear();
    const [section, setSection] = useState([InitialState]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let arr = localStorage.getItem("section");
        if (arr) {
            let obj = JSON.parse(arr);
            setSection(obj);
        }
    }, [])

    const idGenarator = () => {
        var val = Math.floor(1000 + Math.random() * 9000);
        return (val);
    }
    const sectionCloseBtnHandler = (index) => {
        var tempArr = section.filter(obj => obj.id !== index);
        setSection(tempArr);
        localStorage.setItem("section", JSON.stringify(tempArr))
    }

    const addSection = () => {
        let tempList = section;
        let arr = tempList.concat({
            id: idGenarator(),
            sectionName: `SECTION NANE-${idGenarator()}`
        });
        setSection(arr);
        localStorage.setItem("section", JSON.stringify(arr));
    }
    const addComponentHandler = (componentObj,sectionId) => {
        console.log(componentObj);
        var index = section.map(function (x) { return x.id; }).indexOf(sectionId);
        const newsection = [...section];
        newsection[index] = {
            ...newsection[index],
            component: [...newsection[index].component,componentObj]
          };
          localStorage.setItem("section", JSON.stringify(newsection));
          setSection(newsection);
          
          


        
    //      var index = section.map(function (x) { return x.id; }).indexOf(sectionId);
    //      var tempcom=section[index].component.push({id:componentObj.id,type:componentObj.type,headerText:componentObj.headerText,headerBody:componentObj.headerBody});
    //    console.log(">>",tempcom);
         //  section[index]=tempcom;
        //  setSection(section);
         //console.log(">>",section);
         // localStorage.setItem("section", JSON.stringify(section));
        // window.location.reload()
        // console.log(section);
        // var tempList=section.filter(obj => obj.id === sectionId);
        // tempList[0].component.concat({id:123,ahsd:"sasa"});
       // var index = section.map(function (x) { return x.id; }).indexOf(sectionId);
       //var tempComponentlist=section[index].component;
    //    setSection( section.map((obj)=>{
    //        if(obj.id===sectionId){
    //            obj.component.concat({id:componentObj.id,type:componentObj.type,headerText:componentObj.headerText,headerBody:componentObj.headerBody});
    //        }
    //    }));
        //var array=section[index].component.concat({id:componentObj.id,type:componentObj.type,headerText:componentObj.headerText,headerBody:componentObj.headerBody});
        //section[index].component=array
        //setSection(array1);
        //console.log(section);
        // section[index].component[count]={id:componentObj.id,type:componentObj.type,headerText:componentObj.headerText,headerBody:componentObj.headerBody};
        // console.log("com::", section);
        // setSection(section);
        // setCount(count+1);
         //setSection(nextState);
        //  console.log(section);
    }

    return (
        <div className="main-container">
            <div >
                {section.map((obj) => {
                    return (<div key={obj.id}>
                        <Section scectionObj={obj} closeBtnHandler={sectionCloseBtnHandler} componentSaveHandler={addComponentHandler} />
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