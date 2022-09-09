import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Content from "./content/Content";
import IconBar from "./icon-bar/IconBar";
import {
  categoriesList,
  setCategories,
} from "../reducers/categories/categoriesSlice";
import "./Main.css";

const Main = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setCategories(categoriesList));
  }, [dispatch]);

  return (
    <div className="d-flex flex-grow-1 m-1 main">
      <IconBar />
      <Content />
    </div>
  );
};

export default Main;
