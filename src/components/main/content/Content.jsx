import { useSelector } from "react-redux";
import ContentHeader from "./common/ContentHeader";
import HomeContent from "./home/HomeContent";
import CitiesContent from "./cities/CitiesContent";
import "./Content.css";

const Content = () => {
  const category = useSelector((state) => state.categories.selected);
  console.log(category);

  if (!category) {
    return <div>loading</div>;
  }

  return (
    <div className="content">
      <ContentHeader category={category} />
      {category.name === "Home" && <HomeContent />}
      {category.name === "Cities" && <CitiesContent />}
    </div>
  );
};

export default Content;
