import React from 'react'
import { useParams } from 'react-router-dom'
import tovarArr from '../../../bacent';
import '../product/product.scss'
import Rating from '../../rating/Rating';
const Product = () => {
    const { id } = useParams()
    const tovar = tovarArr.find(tovar => tovar.id == id)
    return (
        <div>
            <div className="container">
                <div className="card_id">
                    <div className="id_img">
                        <img src={tovar.img} alt={tovar.title} />
                    </div>
                    <div className="card_esse">
                        <h2>{tovar.title}</h2>
                        <div className="product_star">
                            <Rating />
                            <div className="product_text">
                                <p>(150 Reviews)</p>
                            </div>
                        </div>
                        <p className="id_price">{tovar.price}</p>
                        <p>{tovar.text}</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product
