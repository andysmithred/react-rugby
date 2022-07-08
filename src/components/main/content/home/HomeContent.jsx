import HomeItems from "./HomeItems";
import HomeFeaturedItems from "./HomeFeaturedItems";

import "./HomeContent.css";

export const HomeContent = () => {
  return (
    <div className="home-content">
      <div>
        <HomeItems />
      </div>
      <div>
        <HomeFeaturedItems />
      </div>
    </div>
  );
};

export default HomeContent;
