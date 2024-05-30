import { CDN_URL } from "../utils/constants";


const FoodCard = (props) => {
    const {
        foodData
        } = props;

    const {
        action : {text},
        cost,
        ingredient,
        starReview,
        minute,
        imageId
        } = foodData;
    return(
        <div className="food-card">
            <img alt="food-logo"
            className="food-logo"
             src={
                CDN_URL + imageId
                } />
            <h3>{text}</h3>
            <h5>{ingredient}</h5>
            <h5 className="review">{starReview}</h5>
            <h5>₹{cost}</h5>
            <h5>{minute} minute</h5>

        </div>
    )
}
export default FoodCard