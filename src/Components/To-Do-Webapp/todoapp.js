import React, { useState } from 'react'
import "./style.css";

const Todoapp = () => {
    const [inputData, setinputData] = useState("")
    return (
        <>
            <div className="main-body">
                <div className="image-body"></div>
                <figure>
                    <img src="" alt="" srcSet="" />
                    <figcaption>Lorem ipsum dolor sit amet.</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" className='form-control' placeholder='Enter item name' value={inputData} onChange={(event) => setinputData(event.target.value)}/>
                    <i className="fa fa-plus add-btn" aria-hidden="true"></i>
                </div>
                <div className="item-list">
                    <div className="items">
                        <h3>apple</h3>
                        <div className="icon-btn">
                            <i className="fa fa-pencil edit-btn" aria-hidden="true"></i>
                            <i className="fa fa-trash-alt trash-btn" aria-hidden="true"></i>
                        </div>

                    </div>
                </div>



                <div className="showItems">
                    <button className="show-btn" data-sm-link-text="Remove Items">
                        <span>List</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Todoapp;