import FoodCard from "./FoodCard";
import { useState, useEffect } from "react";
import { EMPTY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [NewFoodList, setFoodList] = useState([]);
  const [filteredFood, setfilteredFood] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setFoodList(
      json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setfilteredFood(
      json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };
  //conditional rendering

  return NewFoodList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filer">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="filter-btn"
            onClick={() => {
              console.log(searchText);
              const newFilterList = NewFoodList.filter((item) => {
                const actionText = item.action?.text;

                return actionText
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setfilteredFood(newFilterList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRate = NewFoodList.filter(
              (res) => res.starReview > 4.5
            );
            setFoodList(filteredRate);
          }}
        >
          Top Rated Food
        </button>
      </div>
      <div className="food-container">
        {filteredFood.length > 0 ? (
          filteredFood.map((food) => <FoodCard key={food.id} foodData={food} />)
        ) : (
          <div className="empty-state">
            <img src={EMPTY_URL} />
            <p className="empty-note">No result found for "{searchText}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
