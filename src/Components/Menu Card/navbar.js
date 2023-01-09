import React from 'react'

const navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group container">

                    {
                        menuList.map((curElem) => {
                            return <button className="btn-group-item font" onClick={() => filterItem(curElem)}>{curElem}</button>
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default navbar;