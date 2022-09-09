import { useSelector } from "react-redux";
import HomeItems from "./Items/HomeItems";
import HomeFeaturedItems from "./FeaturedItems/HomeFeaturedItems";
import ContentHeader from "../common/ContentHeader";


export const HomeContent = () => {
  const category = useSelector(state => state.categories.items.find(c => c.name === "Home"))
  return (
    <div className="d-flex flex-column">
      <ContentHeader category={category} />
      <HomeItems />
      <HomeFeaturedItems />
    </div>
  );
};

export default HomeContent;
