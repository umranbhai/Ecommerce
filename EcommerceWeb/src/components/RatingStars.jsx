import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"

const RatingStars = ({ stars, reviews }) => {

    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (item, index) => {
                let number = index + 0.5;
                return (
                    stars >= index + 1 ? <FaStar /> : stars >= number ? <FaStarHalfAlt /> : <AiOutlineStar />
                )
            })}
        </div>
    )
}
export default RatingStars
