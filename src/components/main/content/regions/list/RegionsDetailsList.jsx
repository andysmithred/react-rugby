import { useDispatch, useSelector } from "react-redux";
import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import ListSmallTile from "../../common/lists/ListSmallTile";
import ContentList from "../../common/ContentList";

import {
  fetchRegion,
  setRegionsView,
} from "../../../../reducers/regions/regionsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";

import "./RegionsDetailsList.css";

const RegionsDetailsList = ({ regions }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Regions")
  );

  let arrayForSort = [...regions];
  arrayForSort.sort((a, b) => a.name.localeCompare(b.name));

  const items = [];

  const handleItemClick = (id) => {
    dispatch(fetchRegion(id));
    dispatch(setRegionsView("details"));
    dispatch(setCategory(category));
  };

  arrayForSort.forEach((region) => {
    items.push(
      <ListSmallTile
        key={region.regionId}
        id={region.regionId}
        label={region.name}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="pt-1 mb-1 regions-details-list">
      <DetailsHeader icon={getFullPathImage("region")} label="Regions" />
      <ContentList items={items} />
    </div>
  );
};

export default RegionsDetailsList;
