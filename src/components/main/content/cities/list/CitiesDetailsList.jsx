import { useDispatch, useSelector } from "react-redux";
import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import ListSmallTile from "../../common/lists/ListSmallTile";
import ContentList from "../../common/ContentList";

import {
  fetchCity,
  setCitiesView,
} from "../../../../reducers/cities/citiesSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";

import "./CitiesDetailsList.css";

const CitiesDetailsList = ({ cities }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Cities")
  );

  let arrayForSort = [...cities];
  arrayForSort.sort((a, b) => a.name.localeCompare(b.name));

  const items = [];

  const handleItemClick = (id) => {
    dispatch(fetchCity(id));
    dispatch(setCitiesView("details"));
    dispatch(setCategory(category));
  };

  arrayForSort.forEach((city) => {
    items.push(
      <ListSmallTile
        key={city.cityId}
        id={city.cityId}
        label={city.name}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="pt-1 mb-1 cities-details-list">
      <DetailsHeader icon={getFullPathImage("city")} label="Cities" />
      <ContentList items={items} />
    </div>
  );
};

export default CitiesDetailsList;
