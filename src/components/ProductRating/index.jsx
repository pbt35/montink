import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const getStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
  }

  if (hasHalf) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
  }

  return stars;
};

const ProductRating = ({ rating = 4.3, totalReviews = 28 }) => {
  return (
    <div className="flex items-center gap-2 mt-5 mb-5">
      <div className="flex text-xl">{getStars(rating)}</div>
      <span className="text-sm text-gray-600 ml-1">
        {rating.toFixed(1)} ({totalReviews} avaliações)
      </span>
    </div>
  );
};

export default ProductRating;
