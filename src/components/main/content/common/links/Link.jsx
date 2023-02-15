import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import { getFullPathImage } from "../../../../utils/ImageDetails";

import "./Link.css";


const Link = ({ id, title, categoryName, onItemClick }) => {
    const dispatch = useDispatch();
    const category = useSelector((state) =>
        state.categories.items.find((c) => c.name === categoryName)
    );  

    const handleItemClick = (category, id) => {
      dispatch(setCategory(category));
      onItemClick(id);
    }

    return (
      <div
        className="link p-1"
        onClick={() => handleItemClick(category, id)}
      >
        <div>
          <img src={category.icon} className="image" alt={category.name} />
        </div>
        <div className="ms-2 me-2">
          <div className="title">{title}</div>
        </div>
        <div>
          <img
            src={getFullPathImage("forward")}
            className="arrow"
            alt="arrow"
          />
        </div>
      </div>
    );
}

export default Link;
