import { FaStar, FaRegStar } from "react-icons/fa";

interface IRatingStarsProps {
  rating: number;
}

const RatingStars = ({ rating }: IRatingStarsProps) => {
  const rounded = Math.round(rating);

  return (
    <div className="flex items-center gap-1 text-sm">
      {[...Array(5)].map((_, index) =>
        index < rounded ? (
          <FaStar key={index} className="text-yellow-400" />
        ) : (
          <FaRegStar key={index} className="text-gray-300" />
        ),
      )}

      <span className="text-gray-500 text-xs">({rating})</span>
    </div>
  );
};

export default RatingStars;
