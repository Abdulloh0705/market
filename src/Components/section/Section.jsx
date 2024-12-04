import React from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import tovarArr from '../../bacent';

import Rating from '../rating/Rating';
import { Link } from 'react-router-dom';


const Section = () => {
  return (
    <>
      <div className="product_filtr">
        <div className="product_neme">
          <div className="product_box">
            <p className="product_title">Today’s</p>
          </div>
          <div className="product_flash">
            <h2 className="product_flash_title">Flash Sales</h2>
          </div>
        </div>
        <div className="product_icons">
          <div className="product_icon">
            <div className="icon_left">
              <GoArrowLeft />
            </div>
            <div className="icon_right">
              <GoArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="tovar">
        <div className="tavar1">
          {
            tovarArr.map(tovar => (
              <div className="pult_card" key={tovar.id}>
                <div className="tovar_img">
                  <Link to={`/product/${tovar.id}`}>
                    <img src={tovar.img} alt={tovar.title} />
                  </Link>
                </div>

                <div className="tovar_text">
                  <h2>{tovar.title}</h2>
                  <p>{tovar.price}</p>
                  <Rating />
                </div>
              </div>
            ))

          }
        </div>
      </div>
    </>
  )
}

export default Section


