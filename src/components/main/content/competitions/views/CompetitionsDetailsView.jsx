import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/competitions/competitionsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import CompetitionsList from "../list/CompetitionsList";
import CompetitionDashboard from "../dashboard/CompetitionDashboard";

import "../../Content.css";

const CompetitionsDetailsView = () => {
    const category = useSelector((state) =>
      state.categories.items.find((c) => c.name === "Competitions")
    );

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Index", "Edit", "Delete"]}
        category={category}
        setView={setView}
      />

      <div className="d-flex flex-row content-view-content">
        <CompetitionsList />
        <CompetitionDashboard />
      </div>
    </div>
  );
};

export default CompetitionsDetailsView;
