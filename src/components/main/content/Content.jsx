import { useSelector } from "react-redux";
import HomeContent from "./home/HomeContent";
import CitiesContent from "./cities/CitiesContent";
import RegionsContent from "./regions/RegionsContent";
import CountriesContent from "./countries/CountriesContent";
import SchoolTypesContent from "./schoolTypes/SchoolTypesContent";

import "./Content.css";


const Content = () => {
  const category = useSelector((state) => state.categories.selected);

  if (!category) {
    return <div>loading</div>;
  }

  return (
    <div className="d-flex flex-column flex-fill content">
      {category.name === "Home" && <HomeContent />}
      {category.name === "Cities" && <CitiesContent />}
      {category.name === "Regions" && <RegionsContent />}
      {category.name === "Countries" && <CountriesContent />}
      {category.name === "SchoolTypes" && <SchoolTypesContent />}
    </div>
  );
};

export default Content;
