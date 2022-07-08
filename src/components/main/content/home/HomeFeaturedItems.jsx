import HomeFeaturedCity from "./HomeFeaturedCity";

// import React from 'react';

// import HomeFeaturedPlace from './HomeFeaturedPlace';
// import HomeFeaturedTerritory from './HomeFeaturedTerritory';
// import HomeFlagsOnDay from './HomeFlagsOnDay';

import './HomeFeaturedItems.css';

const HomeFeaturedItems = () => {
    return (
        <div className="home-featured-items">
            <div className='item'>
                <HomeFeaturedCity />
            </div>
            <div className='item'>
                {/* <HomeFeaturedPlace /> */}
            </div>
            <div className='item'>
                {/* <HomeFlagsOnDay /> */}
            </div>
        </div>
    );
}

export default HomeFeaturedItems;

