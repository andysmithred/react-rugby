import { useDispatch, useSelector } from "react-redux";
import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import ListSmallTile from "../../common/lists/ListSmallTile";
import ContentList from "../../common/ContentList";

import {
  fetchStadium,
  setView,
} from "../../../../reducers/stadia/stadiaSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";

import "./StadiaDetailsList.css";

const StadiaDetailsList = ({ stadia }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Stadia")
  );
  const items = [];

  const handleItemClick = (id) => {
    dispatch(fetchStadium(id));
    dispatch(setView("details"));
    dispatch(setCategory(category));
  };

  stadia.forEach((stadium) => {
    items.push(
      <ListSmallTile
        key={stadium.stadiumId}
        id={stadium.stadiumId}
        label={stadium.name}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="pt-1 mb-1 stadia-details-list">
      <DetailsHeader icon={getFullPathImage("stadium")} label="Stadia" />
      <ContentList items={items} />
    </div>
  );
};

export default StadiaDetailsList;
