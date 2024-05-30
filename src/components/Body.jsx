import FoodCard from "./FoodCard"
import FoodList from "../utils/mockData"
import { useState , useEffect } from "react"

const Body = () => {
    const [NewFoodList,setFoodList] = useState(FoodList)

    useEffect(()=> {
        console.log("UseEffect is calling")
    },[])
    return (
        <div className="body">
            <div className="filer">
                <button className="filer-btn" onClick={() => {
                    const filteredRate = NewFoodList.filter(
                        (res) => res.starReview > 4.5 
                    )
                    setFoodList(filteredRate)

                }}> 
                Top Rated Food
                </button>
            </div>
            <div className="food-container">
             {
                NewFoodList.map(food =>(
                    < FoodCard key = {food.id} foodData = {food} />
                ))
             }
            </div>
        </div>
    )
}
  
export default Body