import React, { useState, useEffect } from 'react';
import Section from './Section';



const Main = () => {
    const InitialState = {
        id: 123,
        sectionName: "SECTION NAME",
        component: []
    }
    //localStorage.clear();
    const [section, setSection] = useState([InitialState]);
    const [imagesChecked, setImagesChecked] = useState(false);
    const [imagesLink, setImagesLink] = useState(false);
    const [imagesCopy, setImagesCopy] = useState(false);
    const [imagesDescription, setImagesDescription] = useState(false);

    useEffect(() => {
        let arr = localStorage.getItem("section");
        if (arr) {
            let obj = JSON.parse(arr);
            setSection(obj);
            console.log(obj)
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
            sectionName: "SECTION NANE",
            component: []
        });
        setSection(arr);
        localStorage.setItem("section", JSON.stringify(arr));
    }

    const updateSection=(data)=>{
        var index_section = section.map(function (x) { return x.id; }).indexOf(data.id);
        const newsection = [...section];
        newsection[index_section].sectionName = data.sectionName;
        localStorage.setItem("section", JSON.stringify(newsection));
        setSection(newsection);
        console.log(newsection);
    }


    function addAfter(array, index, newItem) {
        return [
            ...array.slice(0, index),
            newItem,
            ...array.slice(index)
        ];
    }

    const addComponentHandler = (componentObj, sectionId, componentId) => {
        var index_section = section.map(function (x) { return x.id; }).indexOf(sectionId);
        var index_component = section[index_section].component.map(function (x) { return x.id; }).indexOf(componentId);
        const newsection = [...section];
        newsection[index_section] = {
            ...newsection[index_section],
            component: [...addAfter(section[index_section].component, index_component, componentObj)]
        };
        localStorage.setItem("section", JSON.stringify(newsection));
        setSection(newsection);
    }
    
    const componentCloseHandler=(sectionId,componentId)=>{
        var index_section = section.map(function (x) { return x.id; }).indexOf(sectionId);
        const newsection = [...section];
        newsection[index_section] = {
            ...newsection[index_section],
            component: section[index_section].component.filter(obj => obj.id !== componentId)
        };
        setSection(newsection);
        localStorage.setItem("section", JSON.stringify(newsection))
    }


    const handleImagesChange = () => {
        const newsection = [...section];
        for (var i = 0; i < newsection.length; i++) {
            newsection[0] = {
                ...newsection[0],
                component: [...section[0].component.filter((data) => data.type === "file")]
            };
        }
        setSection(newsection);
        setImagesChecked(!imagesChecked);
        if (imagesChecked) {
            let arr = localStorage.getItem("section");
            if (arr) {
                let obj = JSON.parse(arr);
                setSection(obj);
            }
        }
    };
    const handleLinkChange = () => {
        const newsection = [...section];
        for (var i = 0; i < newsection.length; i++) {
            newsection[0] = {
                ...newsection[0],
                component: [...section[0].component.filter((data) => data.type === "link")]
            };
        }
        setSection(newsection);
        setImagesLink(!imagesLink);
        if (imagesLink) {
            let arr = localStorage.getItem("section");
            if (arr) {
                let obj = JSON.parse(arr);
                setSection(obj);
            }
        }
    };
    const handleCopyChange = () => {
        const newsection = [...section];
        for (var i = 0; i < newsection.length; i++) {
            newsection[0] = {
                ...newsection[0],
                component: [...section[0].component.filter((data) => data.type === "copyright")]
            };
        }
        setSection(newsection);
        setImagesCopy(!imagesCopy);
        if (imagesCopy) {
            let arr = localStorage.getItem("section");
            if (arr) {
                let obj = JSON.parse(arr);
                setSection(obj);
            }
        }
    };
    const desChange = () => {

        const newsection = [...section];
        for (var i = 0; i < newsection.length; i++) {
            newsection[i] = {
                ...newsection[i],
                component: [...section[i].component.filter((data) => data.type === "description")]
            };
        }
        setSection(newsection);
        setImagesDescription(!imagesDescription);
        if (imagesDescription) {
            let arr = localStorage.getItem("section");
            if (arr) {
                let obj = JSON.parse(arr);
                setSection(obj);
            }
        }
    };

    return (
        <div className="main-container">
            <div >
                {section.map((obj) => {
                    return (<div key={obj.id}>
                        <Section updateSectionName={updateSection} scectionObj={obj} closeBtnHandler={sectionCloseBtnHandler} componentSaveHandler={addComponentHandler} componentCloseHandler={componentCloseHandler} />
                    </div>)
                })}
                <div className="plus-icon-wrapper" onClick={addSection}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
            </div>
            <div className="sidebar">
                <h2>Filter</h2>
                <div className="row-1" >
                    <input type="checkbox" checked={imagesChecked} onChange={handleImagesChange} />
                    <label>Images</label>
                </div>
                <div className="row-1" >
                    <input type="checkbox" checked={imagesLink} onChange={handleLinkChange} />
                    <label>Link</label>
                </div>
                <div className="row-1" >
                    <input type="checkbox" checked={imagesCopy} onChange={handleCopyChange} />
                    <label>Copytext</label>
                </div>
                <div className="row-1">
                    <input type="checkbox" checked={imagesDescription} onChange={desChange} />
                    <label>Description</label>
                </div>
            </div>
        </div>
    );
};

export default Main;