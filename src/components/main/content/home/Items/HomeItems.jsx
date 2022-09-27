import HomeItemCities from "./HomeItemCities";
import HomeItemRegions from "./HomeItemRegions";
import HomeItemCountries from "./HomeItemCountries";
import "./HomeItems.css";
import HomeItemSchoolTypes from "./HomeItemSchoolTypes";

const HomeItems = () => {
  return (
    <div className="d-flex flex-row flex-wrap py-1 home-items">
      <HomeItemCities />
      <HomeItemRegions />
      <HomeItemCountries />
      <HomeItemSchoolTypes />
    </div>
  );
};

export default HomeItems;
