import { useSelector } from "react-redux";
import CoachesHeader from "../header/CoachesHeader";
import CoachesGrid from "../grid/CoachesGrid";

import "../../Content.css";

const CoachesIndexView = () => {
  const items = useSelector((state) => state.coaches.items);
  return (
    <div className="d-flex flex-column content-view">
      <CoachesHeader menu_items={["Details", "New"]} />
      <CoachesGrid items={items} />
    </div>
  );
};

export default CoachesIndexView;
