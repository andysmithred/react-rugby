import { useDispatch } from "react-redux/es/exports";

import { addStadium } from "../../../../reducers/stadia/stadiaSlice";
import StadiaHeader from "../header/StadiaHeader";
import AddStadium from "../forms/AddStadium";


const StadiaNewView = () => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addStadium(item));
  };

  return (
    <div className="d-flex flex-column">
      <StadiaHeader menu_items={["Index"]} />
      <AddStadium onAdd={handleAddItem} />
    </div>
  );
};

export default StadiaNewView;
