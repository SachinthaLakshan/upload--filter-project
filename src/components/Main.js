import React, { useState } from 'react';
import Section from './Section';


const Main = () => {


    return (
        <div class="main-container">

            <div >
                <Section />
                <Section />
                <Section />
                <Section />
                <Section />
            </div>
            <div>
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