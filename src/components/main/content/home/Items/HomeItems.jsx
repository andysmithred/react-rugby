import HomeItemCities from "./HomeItemCities";
import HomeItemRegions from "./HomeItemRegions";
import HomeItemCountries from "./HomeItemCountries";
import "./HomeItems.css";

const HomeItems = () => {
  return (
    <div className="d-flex flex-row flex-wrap py-1 home-items">
      <HomeItemCities />
      <HomeItemRegions />
      <HomeItemCountries />
    </div>
  );
};

export default HomeItems;
