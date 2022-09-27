import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchSchoolTypes,
  fetchSchoolType,
} from "../../../../reducers/schoolTypes/schoolTypesSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemSchoolTypes = () => {
  const schoolTypes = useSelector((state) => state.schoolTypes.items);
  const schoolType = useSelector((state) => state.schoolTypes.selected);
  const fetching = useSelector((state) => state.schoolTypes.fetching);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "SchoolTypes")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchoolTypes());
  }, [dispatch]);

  useEffect(() => {
    if (schoolTypes.length > 0 && !schoolType) {
      dispatch(fetchSchoolType(schoolTypes[0].schoolTypeId));
    }
  }, [dispatch, schoolTypes, schoolType]);

  const handleItemClick = (category) => {
    dispatch(setCategory(category));
  };

  if (fetching) {
    return <div className="mt-1 loading">LOADING...</div>;
  }

  return (
    <div className="item">
      <HomeItem
        category={category}
        value={schoolTypes.length}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default HomeItemSchoolTypes;
