import HomeFeaturedCity from "./HomeFeaturedCity";
import HomeFeaturedRegion from "./HomeFeaturedRegion"

import './HomeFeaturedItems.css';

const HomeFeaturedItems = () => {
    return (
        <div className="d-flex flex-row home-featured-items">
            <div className='item'>
                <HomeFeaturedCity />
            </div>
            <div className='item'>
                {/* <HomeFeaturedRegion /> */}
            </div>
            <div className='item'>
                {/* <HomeFlagsOnDay /> */}
            </div>
        </div>
    );
}

export default HomeFeaturedItems;
