import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCompetition } from "../../../../reducers/competitions/competitionsSlice";

import ItemHeaderComplete from "../../common/ItemHeaderComplete";
import CompetitionDetails from "./CompetitionDetails";

import "./CompetitionDashboard.css";

const CompetitionDashboard = () => {
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Competitions")
  );

  const dispatch = useDispatch();
  const fetching = useSelector((state) => state.competitions.fetchingItem);
  const items = useSelector((state) => state.competitions.items);
  const item = useSelector((state) => state.competitions.item);

  useEffect(() => {
    if (!fetching && items.length > 0 && !item) {
      dispatch(fetchCompetition(items[0].competitionId));
    }
  }, [dispatch, fetching, items, item]);
  
  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (item) {
    return (
      <div className="pt-1 ps-1 competition-dashboard">
        <ItemHeaderComplete label={item.name} category={category} complete={item.complete} />
        <div className="row">
          <div className="col-lg-4">
            <CompetitionDetails item={item} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="competition-dashboard">No competition found</div>;
  }
};

export default CompetitionDashboard;
