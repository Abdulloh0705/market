import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci'; // CiStar komponentini import qilish
import '../rating/rating.scss' // SCSS faylini import qilish
import { GoStarFill } from 'react-icons/go';

const Rating = () => {
  const [rating, setRating] = useState(0); // Holatni yaratish: boshlang'ichda 0 yulduz

  // Yulduz bosilganda uni yangilash
  const handleClick = (index) => {
    setRating(index + 1); // Bosilgan yulduzga mos ravishda ratingni yangilash
  };

  return (
    <div className="rating">
      <div className="rating_star">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`star ${rating > index ? 'active' : ''}`}
            onClick={() => handleClick(index)} // Bosilganda handleClick chaqiriladi
          >
           <div className="star_icon">
           <GoStarFill />
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
