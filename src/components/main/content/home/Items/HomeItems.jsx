import HomeItemCities from "./HomeItemCities";
import HomeItemRegions from "./HomeItemRegions";
import HomeItemCountries from "./HomeItemCountries";
import HomeItemSchoolTypes from "./HomeItemSchoolTypes";
import HomeItemSchools from "./HomeItemSchools";

import "./HomeItems.css";

const HomeItems = () => {
  return (
    <div className="d-flex flex-row flex-wrap py-1 home-items">
      <HomeItemCities />
      <HomeItemRegions />
      <HomeItemCountries />
      <HomeItemSchoolTypes />
      <HomeItemSchools />
    </div>
  );
};

export default HomeItems;
