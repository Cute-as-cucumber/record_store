import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

const Rating = ({value, text}) => {
  return (
    <div className = 'rating'>
        <span>
            {/**if value is larger than 1 show full star; betweem 0.5 and 1 show half star */}
            {value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
            {value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
            {value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
            {value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
            {value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span className = "rating-text">
            {//if there's text, show text
            text && text}
        </span>
    </div>
  )
}

export default Rating