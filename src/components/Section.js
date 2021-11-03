import React, { useState } from 'react';


const Section = () => {


    return (
        <div class="card-container">
            <div className="section-header">
                <h5>SECTION NANE</h5>
                <i className="fa fa-times-circle-o" />
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