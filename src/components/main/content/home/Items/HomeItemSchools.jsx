import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchSchools,
  fetchSchool,
} from "../../../../reducers/schools/schoolsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemSchools = () => {
  const schools = useSelector((state) => state.schools.items);
  const school = useSelector((state) => state.schools.selected);
  const fetching = useSelector((state) => state.schools.fetching);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Schools")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchools());
  }, [dispatch]);

  useEffect(() => {
    if (schools.length > 0 && !school) {
      dispatch(fetchSchool(schools[0].schoolId));
    }
  }, [dispatch, schools, school]);

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
        value={schools.length}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default HomeItemSchools;
