import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ noOfStars = 5 }) => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [clickedStar, setClickedStar] = useState(0);

  function handleMouseEnter(key) {
    setHoveredStar(key);
  }

  function handleMouseLeave() {
    setHoveredStar(0);
  }

  function handleClick(key) {
    setClickedStar(key);
  }

  return (
    <div className='flex flex-col justify-center items-center space-y-6 bg-green-100 h-screen'>
      <p className='font-mono text-2xl text-black'>
        Hover or click over any star:
      </p>
      <div className='flex flex-row justify-center items-center'>
        {[...Array(noOfStars)].map((_, index) => {
          index = index + 1;
          return (
            <FaStar
              key={index}
              className={`w-20 h-20 fill-current cursor-pointer ${index <= (hoveredStar || clickedStar) ? 'text-yellow-400' : 'text-gray-400'}`}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

StarRating.propTypes = {
  noOfStars: PropTypes.number,
};

export default StarRating;
