import { useDispatch, useSelector } from "react-redux";
import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import ListSmallTile from "../../common/lists/ListSmallTile";
import ContentList from "../../common/ContentList";

import {
  fetchSchool,
  setView,
} from "../../../../reducers/schools/schoolsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";

import "./SchoolsDetailsList.css";

const SchoolsDetailsList = ({ schools }) => {
    let arrayForSort = [...schools];
    arrayForSort.sort((a, b) => a.name.localeCompare(b.name));
    
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Schools")
  );
  const items = [];

  const handleItemClick = (id) => {
    dispatch(fetchSchool(id));
    dispatch(setView("details"));
    dispatch(setCategory(category));
  };

  arrayForSort.forEach((school) => {
    items.push(
      <ListSmallTile
        key={school.schoolId}
        id={school.schoolId}
        label={school.name}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="pt-1 mb-1 schools-details-list">
      <DetailsHeader icon={getFullPathImage("school")} label="Schools" />
      <ContentList items={items} />
    </div>
  );
};

export default SchoolsDetailsList;
