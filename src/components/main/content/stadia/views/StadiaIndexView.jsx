import { useSelector } from "react-redux";

import StadiaHeader from "../header/StadiaHeader";
import StadiaGrid from "../grid/StadiaGrid";

import "../../Content.css";

const StadiaIndexView = () => {
  const items = useSelector((state) => state.stadia.items);
  return (
    <div className="d-flex flex-column content-view">
        <StadiaHeader menu_items={["Details", "New"]} />
        <StadiaGrid items={items} />
    </div>
  );
};

export default StadiaIndexView;
