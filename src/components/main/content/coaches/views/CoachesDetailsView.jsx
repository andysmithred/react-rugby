import { useSelector } from "react-redux";
import { setCoachesView } from "../../../../reducers/coaches/coachesSlice";
import ItemsHeader from "../../common/ItemsHeader";
import CoachesList from "../list/CoachesList";
import CoachDashboard from "../dashboard/CoachDashboard";

import "../../Content.css";

const CoachesDetailsView = () => {
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Coaches")
  );

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Index", "New", "Edit", "Delete"]}
        category={category}
        setView={setCoachesView}
      />
      <div className="d-flex flex-row content-view-content">
        <CoachesList />
        <CoachDashboard />
      </div>
    </div>
  );
};

export default CoachesDetailsView;
