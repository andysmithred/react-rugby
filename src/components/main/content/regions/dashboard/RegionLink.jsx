import { useSelector, useDispatch } from "react-redux";
import { fetchRegion, setView } from "../../../../reducers/regions/regionsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import { getFullPathImage } from "../../../../utils/ImageDetails";

import "./RegionLink.css";


const RegionLink = ({ region }) => {
    const dispatch = useDispatch();
    const category = useSelector((state) =>
        state.categories.items.find((c) => c.name === "Regions")
    );  

    const handleItemClick = (category, id) => {
      dispatch(fetchRegion(id));
      dispatch(setView("details"));
      dispatch(setCategory(category));
    }

    return (
      <div
        className="  RegionLink"
        onClick={() => handleItemClick(category, region.regionId)}
      >
        <div>
          <img src={category.icon} className="image" alt={category.name} />
        </div>
        <div className="details">
          <div className="title">{region.name}</div>
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

export default RegionLink;