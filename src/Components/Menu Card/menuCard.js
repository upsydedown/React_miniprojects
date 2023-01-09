import React from 'react'
const menuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-body">
        {menuData.map((currelem) => {
          const { id, image, name, description,price ,hotel } = currelem;
          return (
            <>
              <div className="card-section font" key={id}>
                <div className="card" id='card1'>
                  <div className="card-body container">
                    <span className="card-number card-circle font">{id}</span>
                    <span className="card-author font">{hotel}</span>
                    <h2 className="card-title font">{name}</h2>
                    <span className="card-description truncate-overflow">{description}
                    </span>
                    <div className="img-box">
                      <img className='logo' src={image} alt="" srcset="" />
                    </div>
                    <button className="read font">{price}</button>
                  </div>
                </div>
              </div>
            </>
          );
        }
        )
        }
      </section>
    </>
  )
}

export default menuCard;