import React from "react";
import RestaurantList from "./components/RestaurantList.jsx";
import Banner from "./components/Banner.jsx";


function Home() {
    return (
        <>
            <Banner/>
            <RestaurantList initialUrl={'/api/restaurant/'}/>
        </>
    )
}

export default Home;
