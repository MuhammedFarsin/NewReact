import React, { startTransition } from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * 
 * --> HEADER
 * -> logo
 * -> nav item
 * 
 * --> BODY
 * -> search
 * -> food container
 *   - food card
 *    - img
 *    - namd of food
 *    - star rating
 * 
 * --> FOOTER
 * -> CopyWrite
 * -> Links
 * -> Contaat Information 
 * 
 */

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/736x/b0/1e/69/b01e69dfd04399324803c453b0fb9029.jpg" />
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const FoodCard = (props) => {
    const {
        foodData
        } = props;

    const {
        name,
        cost,
        ingredient,
        starReview,
        minute,
        image
        } = foodData?.data;
    return(
        <div className="food-card">
            <img alt="food-logo"
            className="food-logo"
             src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + image
                } />
            <h3>{name}</h3>
            <h5>{ingredient}</h5>
            <h5 className="review">{starReview}</h5>
            <h5>₹{cost}</h5>
            <h5>{minute} minute</h5>

        </div>
    )
}
const FoodList = [
    {
        data : {
            name : "Biriyani",
            cost : 130,
            ingredient : "Chicken,Tomato,Sose",
            starReview : 4.5,
            minute : 39,
            image : "e0839ff574213e6f35b3899ebf1fc597"
        },
    },
    {
        data : {
            name : "KFC",
            cost : 230,
            ingredient : "Chicken,Bread,Tomato",
            starReview : 4.3,
            minute : 39,
            image : "rrh9bulv6vcj4ebduth7"
        },
    }
]
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="food-container">
                
                <FoodCard foodData = {FoodList[0]} />
                <FoodCard foodData = {FoodList[1]} />
                 
                
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            < Header />
            < Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(< AppLayout />)

