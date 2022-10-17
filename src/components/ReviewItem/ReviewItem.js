import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, price, shipping, quantity, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="riview-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>price:${price}</small></p>
                    <p><small>shipping:{shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>

                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;