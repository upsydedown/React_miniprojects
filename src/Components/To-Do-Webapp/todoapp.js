import React, { useState, useEffect } from 'react'
import "./style.css";

const getLocalData = () => {
    const itemList = localStorage.getItem("ToDoListItems");
    if (itemList) {
        return JSON.parse(itemList);
    } else {
        return [];
    }
};

const Todoapp = () => {
    const [inputData, setinputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [edited_item, set_edited_item] = useState("");
    const [toggleButton, settoggleButton] = useState(false);

    // Add Item function

    const addItems = () => {
        if (!inputData) {
            alert("Enter valid input");
        } else if (inputData && toggleButton) {
            setItems(
                items.map((curElem) => {
                    if (curElem.id === edited_item) {
                        return { ...curElem, name: inputData };
                    } return curElem;
                })
            );
            setinputData("");
            set_edited_item(null);
            settoggleButton(false);
        }
        else {
            const NewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            }
            setItems([...items, NewInputData]);
            setinputData("");
        }
    };

    // Edit Item function
    const editItems = (index) => {
        const edit_item = items.find((curElem) => {
            return curElem.id === index;
        })
        setinputData(edit_item.name);
        set_edited_item(index);
        settoggleButton(true);
    }

    // Delete Item function

    function deleteItems(index) {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        });
        setItems(updatedItems);
    }

    // Remove All Item function

    const RemoveAll = () => {
        setItems([]);
    }

    // Adding Storage

    useEffect(() => {
        localStorage.setItem("ToDoListItems", JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className="main-body">
                <div className="content-box container">
                    <div className="image-body"></div>
                    <figure className='image-box container'>
                        <img className='logo' src="images/logo.png" alt="" srcSet="" />
                    </figure>
                    <div className="addItems">
                        <input type="text" className='form-control' placeholder='Enter item name' value={inputData} onChange={(event) => setinputData(event.target.value)} />
                        {toggleButton ? (<i className="fa fa-pencil edit-btn" aria-hidden="true" onClick={() => addItems()}></i>) : (<i className="fa fa-plus add-btn" aria-hidden="true" onClick={() => addItems()}></i>)}
                    </div>

                    {/* Show Items Section */}

                    <div className="item-list container">
                        {items.map((curElem, index) => {
                            return (
                                <div className="items" key={index}>
                                    <h3 className='text'>{curElem.name}</h3>
                                    <div className="icon-btn">
                                        <i className="fa fa-pencil edit-btn" aria-hidden="true" onClick={() => editItems(curElem.id)}></i>
                                        <i className="fa fa-trash-alt trash-btn" aria-hidden="true" onClick={() => deleteItems(curElem.id)}></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="show-item">
                        <button className="show-btn" data-sm-link-text="Remove Items" onClick={RemoveAll}>
                            <span>Show List</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todoapp;